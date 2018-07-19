import sys
sys.path.insert(1, '/Users/ludus//Downloads/google-cloud-sdk/platform/google_appengine')
sys.path.insert(1, '/Users/ludus//Downloads/google-cloud-sdk/platform/google_appengine/lib/yaml/lib')
sys.path.insert(1, './lib')

import pytest
from app import create_app
from google.appengine.ext import testbed
from google.appengine.ext import ndb


@pytest.fixture
def app():
    app = create_app()
    app.testing = True
    app.testbed = testbed.Testbed()
    app.testbed.activate()
    app.testbed.init_datastore_v3_stub()
    app.testbed.init_memcache_stub()
    ndb.get_context().clear_cache()

    return app

@pytest.fixture
def client(app):
    return app.test_client()
