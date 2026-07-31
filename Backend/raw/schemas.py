from pydantic import BaseModel,EmailStr
from typing import Optional
from datetime import datetime


class TokenData(BaseModel):
    id: Optional[int]= None

class UserResponse(BaseModel):
    id: Optional[int] = None
    username : str
    email: str
    created_at : Optional[datetime] = None

class UserCreate(BaseModel):
    id: Optional[int] = None
    username : str
    email: str
    password:str
    created_at : Optional[datetime] = None   
    model_config = {"from_attributes": True}

    
class UrlCreate(BaseModel):
    id: Optional[int] = None
    original_url: str
    short_url: Optional[str] = None
    created_at: Optional[datetime] = None



class GetUrl(BaseModel):
    id: Optional[int] = None
    original_url: str
    short_url: Optional[str] = None
    created_at: Optional[datetime] = None


    model_config = {"from_attributes": True}