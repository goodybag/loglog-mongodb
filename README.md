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
    })
  ]
});
```