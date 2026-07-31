from sqlalchemy.orm import relationship
from sqlalchemy import Column,Integer,String,TIMESTAMP,text,BigInteger,DateTime,ForeignKey
from .database import Base
from sqlalchemy.sql import func

class User (Base):
    __tablename__ = "urlUsers"

    id = Column(Integer,primary_key=True, index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


    linked = relationship("Links", back_populates="owner", cascade="all, delete-orphan")

class Links(Base):
    __tablename__ = "link"

    id = Column(Integer,primary_key=True, index=True) 
    original_url = Column(String,nullable=False)
    short_url = Column(String,unique=True,nullable=False)
    owner_id = Column(Integer,ForeignKey("urlUsers.id",ondelete="CASCADE"),nullable=False) 
    owner = relationship("User",back_populates= "linked")
    click = relationship("Clicks",back_populates="link")
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Clicks(Base):
    __tablename__ = "clicks" 
    id = Column(Integer,primary_key=True, index=True)
    ip_address = Column(String,nullable=False)
    clicked_at = Column(DateTime(timezone=True), server_default=func.now())
    link_id = Column(Integer,ForeignKey("link.id",ondelete="CASCADE"),nullable=False)
    link = relationship("Links",back_populates="click") 
