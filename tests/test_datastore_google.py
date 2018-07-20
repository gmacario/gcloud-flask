
from google.appengine.api import memcache
from google.appengine.ext import ndb
from google.appengine.ext import testbed

import pytest

class MyTestModel(ndb.Model):
    number = ndb.IntegerProperty(default=42)
    text = ndb.StringProperty()

def test_api(app):
    MyTestModel(number=1, text="text").put()
    print MyTestModel.query().fetch()
    assert len(MyTestModel.query().fetch()) == 1

def test_key(app):
    mod = MyTestModel(number=1, text="text")
    mod.put()
    
    key = mod.key

    assert mod == key.get()
    url_safe = key.urlsafe()
    assert ndb.Key(urlsafe = url_safe).get() == mod