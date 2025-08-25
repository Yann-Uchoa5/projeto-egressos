from fastapi import APIRouter

from . import auth, admin, egresso


api_router = APIRouter()

api_router.include_router(egresso.router, tags=["egresso"])  # egresso form submission and retrieval
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])        # coordinator auth
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])     # protected admin endpoints


