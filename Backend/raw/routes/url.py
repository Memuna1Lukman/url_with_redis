from fastapi import APIRouter,HTTPException,status,Depends,Request
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models,schemas,utils,oauth
from datetime import datetime,timedelta
router = APIRouter(
    prefix="/shorturl",
    tags=['URL']
)

@router.post("/",status_code=status.HTTP_201_CREATED,response_model=schemas.GetUrl)
def create_url (request:Request,url:schemas.UrlCreate,db:Session = Depends(get_db),current_user :int = Depends(oauth.get_current_user)):
    maxAllowedRequests = 5
    windowSizeMinutes = 1
    time_elaspsed = datetime.now() - timedelta(minutes=windowSizeMinutes) 
    
    client_ip = request.client.host
    query_one = db.query(models.Links).filter(
        models.Links.owner_id == current_user.id,
        models.Links.created_at >= time_elaspsed
        ).count()
    
    
    if(query_one >=maxAllowedRequests):
        raise HTTPException(status_code=status.HTTP_429_TOO_MANY_REQUESTS,detail="You have to many requests")
    
    query_links = db.query(models.Links).filter(
        models.Links.owner_id == current_user.id,
        models.Links.original_url == url.original_url
        ).first()
    if query_links:
        return query_links
    
    created_url = models.Links(original_url = url.original_url,short_url="temp",owner_id=current_user.id)
    db.add(created_url)
    db.flush()
    created_url.short_url = utils.generate_url(created_url.id)
    db.commit()
    db.refresh(created_url)
    return created_url


@router.get("/{short_url}")
def visit_main_site(request:Request, short_url:str,db:Session=Depends(get_db)):
   
    query_links = db.query(models.Links).filter(models.Links.short_url == short_url).first()
     
    if not query_links:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"{short_url} is not found")
    
    new_click = models.Clicks(
        ip_address = request.client.host,
        link_id = query_links.id
    )
    db.add(new_click)
    db.commit()

    return RedirectResponse(query_links.original_url)
