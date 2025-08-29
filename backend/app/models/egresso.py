from sqlalchemy import Column, Integer, String, JSON, DateTime, func

from ..core.database import Base


class Egresso(Base):
    __tablename__ = "egressos"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    telefone = Column(String(20), nullable=False)
    curso = Column(String(255), nullable=True)

    # Seções do formulário (estrutura flexível em JSON)
    dados_pessoais = Column(JSON, nullable=False, default={})
    acao_afirmativa = Column(JSON, nullable=False, default={})
    formacao_bolsas = Column(JSON, nullable=False, default={})
    experiencia_profissional = Column(JSON, nullable=False, default={})
    avaliacao_formacao = Column(JSON, nullable=False, default={})
    avaliacao_curso = Column(JSON, nullable=False, default={})
    experiencia_academica = Column(JSON, nullable=False, default={})

    criado_em = Column(DateTime(timezone=True), server_default=func.now())
    atualizado_em = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())


