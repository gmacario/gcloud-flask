from google.appengine.ext import ndb

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