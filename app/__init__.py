from flask import Flask, request, session, redirect
from flask_restplus import Api, Resource, fields

from google.appengine.ext import ndb
from .models import QuestionModel
import re

import google.oauth2.credentials
import google_auth_oauthlib.flow

flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
    'credentials.json',
    scopes=['profile', 'email']
    )

import os 
def create_app():
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    app = Flask(__name__)
    api = Api(app)
    app.secret_key = 'secret'

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

    @api.route('/api/1.0/login')
    class LoginRes(Resource):
        def get(self):
            flow.redirect_uri = 'http://localhost:8080/api/1.0/oauth2callback'
            authorization_url, state = flow.authorization_url(
                access_type='offline',
                prompt='consent',
                include_granted_scopes='true')

            session['STATE'] = state
            return redirect(authorization_url)

    @api.route('/api/1.0/oauth2callback')
    class Oauth2Res(Resource):
        def get(self):
            print '-----STATE=', session['STATE']
            flow.redirect_uri = 'http://localhost:8080/api/1.0/oauth2callback'
            authorization_response = request.url
            print '\n\n--------', authorization_response
            print '\n\ncode ---', request.args['code']
            flow.fetch_token(authorization_response=authorization_response)
            return request.args

    return app

