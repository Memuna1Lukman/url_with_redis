from fastapi import APIRouter,HTTPException,status,Depends,Request
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models,schemas,utils,oauth
from sqlalchemy import func
router = APIRouter(
    prefix="/clicks",
    tags=["Clicks"]
)

@router.get("/{short_url}/stats")
def get_clicks(short_url:str,db:Session=Depends(get_db),current_user:int=Depends(oauth.get_current_user)):
    query_links = db.query(models.Links).filter(models.Links.short_url == short_url).first()
    if not query_links:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Short URL not found"
        )
    if query_links.owner_id != current_user.id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,detail="You are not authorized to view these statistics")
    query_clicks = db.query(models.Clicks).join(models.Links).filter(models.Links.short_url == short_url).count()

    return {"short_url": short_url, "total_clicks": query_clicks}


@router.get("/shorturl/me")
def get_all (db:Session=Depends(get_db),current_user:int=Depends(oauth.get_current_user)):
    query = db.query(
        models.Links.short_url,
        func.count(models.Clicks.id).label("total_clicks")
    )\
    .outerjoin(models.Clicks,models.Links.id == models.Clicks.link_id)\
    .filter(models.Links.owner_id == current_user.id)\
    .group_by(models.Links.short_url)\
    .all()
    
    return [{"short_url": row.short_url, "clicks": row.total_clicks} for row in query]