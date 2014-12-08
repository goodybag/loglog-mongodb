# Loglog MongoDB

> MongoDB logging transport for [Loglog](https://github.com/goodybag/loglog)

__Install:__

```
npm install -S loglog-mongodb
```

__Usage:__

```javascript
var loglog = require('logllog');

// Log to console and mongo
var logger = logger.create( 'App', {
  transports: [
    loglog.transports.console()
  , require('loglog-mongodb')({
      connectionString: 'mongodb://my_host/my_db'
    , collection: 'logs' // (default)
      // See all options for db.createCollection()
      // http://mongodb.github.io/node-mongodb-native/2.0/api-docs
    , collectionOptions: {
        capped: true // (default)
      , size:   1000 * 1000 * 1000 * 4 // (default) 4gigs
      }
    })
  ]
});
```