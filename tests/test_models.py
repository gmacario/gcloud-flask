import pytest
from app.models import QuestionModel, UserModel
from faker import Faker

from faker import Faker
import random
import string

from datetime import datetime, timedelta
from freezegun import freeze_time


fake = Faker()

def test_question_model(app):
    quest = QuestionModel(
        type = 'boolean',
        category = "Science",
        difficulty = 1,
        question = "Test Question",
        correct_answer = "True"
    )

    quest.put()
    quests = QuestionModel.query().fetch()
    assert len(quests) == 1
    quest = QuestionModel.query().get()
    assert quest.incorrect_answers  == []

def test_question_model_validation(app):
    with pytest.raises(ValueError):
        quest = QuestionModel(
            type = 'boolean',
            category = "Science",
            difficulty = 10,
            question = "Test Question",
            correct_answer = "True"
        )

def create_random_user():
    char_set = string.ascii_uppercase + string.digits
    userid = ''.join(random.choice(char_set) for _ in range(10))
    email = fake.email()
    picture = fake.url()

    user = UserModel(
        userid = ''.join(random.choice(char_set) for _ in range(10)),
        email = fake.email(),
        picture = fake.url()
    )
    return user

def test_user_model(app, client):
    user = create_random_user()
    user.put()

    with app.app_context():
        token = user.auth_token()

        assert user == UserModel.from_jwt_token(token)

        with freeze_time(datetime.now() + timedelta(hours=1)):
            assert UserModel.from_jwt_token(token) == None
        