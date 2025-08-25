from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ...core.database import get_db
from ...models.egresso import Egresso
from ...schemas.egresso import EgressoCreate, EgressoOut


router = APIRouter()


@router.post("/formularios", response_model=EgressoOut)
def submit_form_egresso(payload: EgressoCreate, db: Session = Depends(get_db)):
    egresso = Egresso(
        nome=payload.nome,
        email=payload.email,
        curso=payload.curso,
        dados_pessoais=payload.dados_pessoais,
        acao_afirmativa=payload.acao_afirmativa,
        formacao_bolsas=payload.formacao_bolsas,
        experiencia_profissional=payload.experiencia_profissional,
        avaliacao_formacao=payload.avaliacao_formacao,
        avaliacao_curso=payload.avaliacao_curso,
        experiencia_academica=payload.experiencia_academica,
    )
    db.add(egresso)
    db.commit()
    db.refresh(egresso)
    return egresso


@router.get("/egressos/{egresso_id}", response_model=EgressoOut)
def get_egresso(egresso_id: int, db: Session = Depends(get_db)):
    egresso = db.query(Egresso).get(egresso_id)
    if not egresso:
        raise HTTPException(status_code=404, detail="Egresso não encontrado")
    return egresso


