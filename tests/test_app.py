from app import create_app
from app.models import QuestionModel
import pytest

from faker import Faker
import random
fake = Faker()

def test_app_is_running(client):
    res = client.get('/')
    assert res.status_code == 200

def test_api_simple_query(client):
    res = client.get('/api/1.0/')
    assert res.status_code == 200
    assert res.is_json

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

def generate_random_question():
    qtype = random.choice(['boolean', 'multiple'])
    category = random.choice(['Science', 'History', 'Film'])
    if qtype == 'boolean':
        quest = QuestionModel(
            type = qtype,
            category = category,
            difficulty = random.randint(0,4),
            question = fake.sentence(),
            correct_answer = random.choice(["True", "False"])
        )
    else:
        quest = QuestionModel(
            type = qtype,
            category = category,
            difficulty = random.randint(0,4),
            question = fake.sentence(),
            correct_answer = fake.sentence(),
            incorrect_answers = [fake.sentence() for _ in range(3)]
        )
    return quest


def test_question_get_all(client):
    for _ in range(10):
        generate_random_question().put()

    res = client.get('/api/1.0/')
    data = res.get_json()
    assert res.status_code == 200
    assert len(data) == 10

def test_question_post(client):
    quest = generate_random_question()
    payload = {
        'type': quest.type,
        'category': quest.category,
        'difficulty': quest.difficulty,
        'question': quest.question,
        'correct_answer': quest.correct_answer,
        'incorrect_answers': quest.incorrect_answers
    }

    res = client.post('/api/1.0/', json=payload)
    assert res.status_code == 200
    assert res.get_json()['correct_answer'] == quest.correct_answer
    assert len(QuestionModel.query().fetch()) == 1