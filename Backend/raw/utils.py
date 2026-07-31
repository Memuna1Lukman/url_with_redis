from pwdlib import PasswordHash
import hashlib
import base64

password_hash = PasswordHash.recommended()

def verify_password(plain_password, hashed_password):
    return password_hash.verify(plain_password, hashed_password)


def get_password_hash(password):
    return password_hash.hash(password)


def generate_url(link_id:int,length:int = 7)->str:

    shaSecrete= hashlib.sha256(str(link_id).encode('utf-8')).digest()


    base64_encoded = base64.urlsafe_b64encode(shaSecrete).decode('utf-8')

    clean_encoded = base64_encoded.replace("=","").replace("-", "").replace("_", "")

    return "https://" + clean_encoded[:length]