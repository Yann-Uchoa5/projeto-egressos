from datetime import datetime, timedelta
from functools import lru_cache
from typing import Any, Dict, Optional

from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
import jwt
from pydantic_settings import BaseSettings


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")


class Settings(BaseSettings):
    JWT_SECRET: str = "change-me"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    COORDINATOR_USER: str = "coordenador@ifce.edu.br"
    COORDINATOR_PASSWORD: str = "senha-segura"

    class Config:
        env_file = ".env"
        env_prefix = ""


@lru_cache
def get_settings() -> "Settings":
    return Settings()


def create_access_token(data: Dict[str, Any], *, expires_delta: Optional[timedelta], settings: Settings) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.JWT_SECRET, algorithm=settings.JWT_ALGORITHM)
    return encoded_jwt


def get_current_user(token: str = Depends(oauth2_scheme), settings: Settings = Depends(get_settings)) -> str:
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=[settings.JWT_ALGORITHM])
        username: str = payload.get("sub")  # type: ignore[assignment]
        if username is None:
            raise HTTPException(status_code=401, detail="Token inválido")
        return username
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expirado")
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Não autorizado")


