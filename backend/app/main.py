from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.router import api_router
from app.core.database import Base, engine


def create_app() -> FastAPI:
    app = FastAPI(title="Portal dos Egressos IFCE - API", version="0.1.0")

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Create tables on startup (simple bootstrap; replace with Alembic for prod)
    Base.metadata.create_all(bind=engine)

    app.include_router(api_router, prefix="/api/v1")

    @app.get("/health", tags=["health"])  # simple healthcheck
    def healthcheck():
        return {"status": "ok"}

    return app


app = create_app()


