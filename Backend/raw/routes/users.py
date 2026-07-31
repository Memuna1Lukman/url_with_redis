from fastapi import HTTPException,Depends,status,APIRouter,Response
from .. import models,utils,schemas
from ..database import get_db
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
router = APIRouter(
    tags=["Users"],
    prefix= "/users"
)

@router.post("/",status_code=status.HTTP_201_CREATED,response_model=schemas.UserResponse)
def create_user(user: schemas.UserCreate,db:Session = Depends(get_db)):
    user_model = user.model_dump()
    user_model["password"] = utils.get_password_hash(user.password)
    user_model_data = models.User(**user_model)
    try:
       db.add(user_model_data)
       db.commit()
       db.refresh(user_model_data)
       return user_model_data
    except IntegrityError:
        db.rollback()
        raise HTTPException(
                            status_code=status.HTTP_409_CONFLICT,
                            detail="Registration failed. Email or Username is already taken."
        )



    