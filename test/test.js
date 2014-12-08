var loglog = require('loglog');
var logger = loglog.create('Test', {
  transports: [
    loglog.transports.console()
  , require('../')({
      connection: 'mongodb://localhost:27017/loglog_mongodb_test'
    , collectionOptions: {
        capped: true
      , size: 1000 * 1000
      }
    })
  ]
});

var loggerB = logger.create('Test A');

logger.info('ohai', { a: true });
loggerB.warn('Ohcheet! %s', 'Bob');