var MongoClient = require('mongodb').MongoClient;

module.exports = function( options ){
  if ( typeof options.connection !== 'string' ){
    throw new Error('Invalid option `connection` connection string');
  }

  var defaults = {
    collection: 'logs'
  };

  for ( var key in defaults ){
    if ( !( key in options ) ){
      options[ key ] = defaults[ key ];
    }
  }

  var _db;
  var getDb = function( callback ){
    if ( _db ) return callback( null, _db );

    MongoClient.connect( options.connection, function( error, db ){
      if ( error ) return callback( error );

      _db = db;
      callback( null, db );
    });
  };

  return function( entry ){
    getDb( function( error, db ){
      if ( error ) throw error;

      db.collection( options.collection ).insert( entry, { safe: false } );
    });
  };
}