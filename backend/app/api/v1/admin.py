from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ...core.security import get_current_user
from ...core.database import get_db
from ...models.egresso import Egresso
from ...schemas.egresso import EgressoOut


router = APIRouter(dependencies=[Depends(get_current_user)])


@router.get("/me")
def me(current_user: str = Depends(get_current_user)):
    return {"user": current_user}


@router.get("/egressos")
def list_egressos(db: Session = Depends(get_db)):
    rows = db.query(Egresso).order_by(Egresso.id.desc()).all()
    return [
        {
            "id": r.id, 
            "nome": r.nome, 
            "curso": r.curso, 
            "email": r.email,
            "dados_pessoais": r.dados_pessoais or {}
        }
        for r in rows
    ]


@router.get("/egressos/{egresso_id}", response_model=EgressoOut)
def admin_get_egresso(egresso_id: int, db: Session = Depends(get_db)):
    egresso = db.query(Egresso).get(egresso_id)
    if not egresso:
        raise HTTPException(status_code=404, detail="Egresso não encontrado")
    return egresso

