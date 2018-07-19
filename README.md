# Test GLcoud con flask e OAuth2

Copy credentials in main folder, then:

```
dev_appserver.py --enable_host_checking=false --env_var OAUTHLIB_INSECURE_TRANSPORT=1 --support_datastore_emulator=yes app.yaml
```