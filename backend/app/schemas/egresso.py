from typing import Any, Dict, Optional
from pydantic import BaseModel, EmailStr


class EgressoSections(BaseModel):
    dados_pessoais: Dict[str, Any]
    acao_afirmativa: Dict[str, Any]
    formacao_bolsas: Dict[str, Any]
    experiencia_profissional: Dict[str, Any]
    avaliacao_formacao: Dict[str, Any]
    avaliacao_curso: Dict[str, Any]
    experiencia_academica: Dict[str, Any]


class EgressoBase(BaseModel):
    nome: str
    email: EmailStr
    telefone: str
    curso: Optional[str] = None


class EgressoCreate(EgressoBase, EgressoSections):
    pass


class EgressoOut(EgressoBase, EgressoSections):
    id: int

    class Config:
        from_attributes = True


