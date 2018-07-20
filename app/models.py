from google.appengine.ext import ndb
from flask_jwt_extended import create_access_token, decode_token
import jwt

def difficulty_validator(prop, value):
    if not 0 <= value < 5:
        raise ValueError("{} should be between 0 and 4".format(value))
    return value

class QuestionModel(ndb.Model):
    category = ndb.StringProperty()
    type = ndb.StringProperty()
    question = ndb.StringProperty()
    difficulty = ndb.IntegerProperty(validator=difficulty_validator)
    correct_answer = ndb.StringProperty()
    incorrect_answers = ndb.StringProperty(repeated=True)

class UserModel(ndb.Model):
    userid = ndb.StringProperty()
    email = ndb.StringProperty()
    username = ndb.IntegerProperty()
    picture = ndb.StringProperty()
    is_admin = ndb.BooleanProperty(default=False)

    @staticmethod
    def create_user_from_google_id(idinfo):
        user = UserModel(
            userid = idinfo['sub'],
            email = idinfo['email'],
            picture = idinfo['picture']
        )
        return user

    def auth_token(self):
        return create_access_token(identity=self.key.urlsafe())

    @staticmethod
    def from_jwt_token(token):
        try:
            key = ndb.Key(urlsafe = decode_token(token)["identity"])
            return key.get()
        except jwt.ExpiredSignatureError:
            return None