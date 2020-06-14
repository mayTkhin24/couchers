import datetime
import logging
import re
from contextlib import contextmanager

from crypto import urlsafe_secure_token
from models import LoginToken, SignupToken, User


@contextmanager
def session_scope(Session):
    """Provide a transactional scope around a series of operations."""
    session = Session()
    try:
        yield session
        session.commit()
    except:
        session.rollback()
        raise
    finally:
        session.close()

# When a user logs in, they can basically input one of three things: user id, username, or email
# These are three non-intersecting sets
# * user_ids are numeric representations in base 10
# * usernames are alphanumeric + underscores, at least 2 chars long, and don't start with a number, and don't start or end with underscore
# * emails are just whatever stack overflow says emails are ;)

def is_valid_user_id(field):
    """
    Checks if it's a string representing a base 10 integer
    """
    return re.match(r"^[1-9][0-9]*$", field) is not None

def is_valid_username(field):
    """
    Checks if it's an alphanumeric + underscore, lowercase string, at least two characters long, and starts with a letter, ends with alphanumeric
    """
    return re.match(r"^[a-z][0-9a-z_]*[a-z0-9]$", field) is not None

def is_valid_email(field):
    """
    From SO
    """
    return re.match(r'^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$', field) is not None

def get_user_by_field(session, field):
    """
    Returns the user based on any of those three
    """
    if is_valid_user_id(field):
        logging.debug(f"Field matched to type user id")
        return session.query(User).filter(User.id == field).one_or_none()
    elif is_valid_username(field):
        logging.debug(f"Field matched to type username")
        return session.query(User).filter(User.username == field).one_or_none()
    elif is_valid_email(field):
        logging.debug(f"Field matched to type email")
        return session.query(User).filter(User.email == field).one_or_none()
    else:
        logging.info(f"Field {field=}, didn't match any known types")
        return None

def new_signup_token(session, email, hours=2):
    """
    Make a signup token that's valid for `hours` hours

    Returns token and expiry text
    """
    token = urlsafe_secure_token()
    signup_token = SignupToken(token=token, email=email, expiry=datetime.datetime.utcnow() + datetime.timedelta(hours=hours))
    session.add(signup_token)
    session.commit()
    return signup_token, f"{hours} hours"

def new_login_token(session, user, hours=2):
    """
    Make a login token that's valid for `hours` hours

    Returns token and expiry text
    """
    token = urlsafe_secure_token()
    login_token = LoginToken(token=token, user=user, expiry=datetime.datetime.utcnow() + datetime.timedelta(hours=hours))
    session.add(login_token)
    session.commit()
    return login_token, f"{hours} hours"
