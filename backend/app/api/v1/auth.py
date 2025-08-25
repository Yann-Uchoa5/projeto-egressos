from datetime import datetime, timedelta
from typing import Optional

from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel

from ...core.security import create_access_token, Settings, get_settings


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int


router = APIRouter()


def verify_coordinator_credentials(username: str, password: str, settings: Settings) -> bool:
    # Minimal bootstrap: single coordinator from env
    return username == settings.COORDINATOR_USER and password == settings.COORDINATOR_PASSWORD


@router.post("/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), settings: Settings = Depends(get_settings)):
    if not verify_coordinator_credentials(form_data.username, form_data.password, settings):
        raise HTTPException(status_code=401, detail="Credenciais inválidas")

    expires_delta = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    expire_at = datetime.utcnow() + expires_delta
    token = create_access_token({"sub": form_data.username}, expires_delta=expires_delta, settings=settings)
    return Token(access_token=token, expires_in=int(expires_delta.total_seconds()))


