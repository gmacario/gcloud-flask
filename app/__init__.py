from flask import Flask, request, session, redirect
from flask_restplus import Api, Resource, fields

from google.appengine.ext import ndb
from .models import QuestionModel, UserModel
import re

import requests
import requests_toolbelt.adapters.appengine
requests_toolbelt.adapters.appengine.monkeypatch()

from google.oauth2 import id_token
from google.auth.transport import requests

import os

from flask_cors import CORS

from flask_jwt_extended import JWTManager


CLIENT_ID = "506439383895-knuismolm5pp5svv8g0do7v9h126f792.apps.googleusercontent.com"

def create_app():
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    os.environ['OAUTHLIB_IGNORE_SCOPE_CHANGE'] = '1'
    app = Flask(__name__)
    app.config['JWT_SECRET_KEY'] = 'secret'
    api = Api(app)
    app.secret_key = 'secret'
    CORS(app)
    JWTManager(app)

    question_model = api.model('QuestionModel', {
        'type': fields.String,
        'category': fields.String,
        'difficulty': fields.Integer,
        'question': fields.String,
        'correct_answer': fields.String,
        'incorrect_answers': fields.List(fields.String),
    })

    @api.route('/api/1.0/')
    class QueryTrivial(Resource):
        @api.marshal_with(question_model)
        def get(self):
            return QuestionModel.query().fetch()

        @api.expect(question_model, validate=True)
        @api.marshal_with(question_model)
        def post(self):
            data = request.get_json()
            quest = QuestionModel(**data)
            quest.put()
            return quest



    @api.route('/api/1.0/googleidtoken')
    class GoogleToken(Resource):
        def post(self):
            token = request.get_json()['id_token']
            try:
                idinfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
                if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                    raise ValueError('Wrong issuer.')

                user = UserModel.query(UserModel.userid == idinfo['sub']).get()
                if user is None:
                    user = UserModel.create_user_from_google_id(idinfo)
                    user.put()

                return user.jwt_authentication()
            except ValueError:
                return {'auth': 'error'}, 400

    return app