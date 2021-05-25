//retrieve data from mongodb using Message Schema
//(pass existing connection to this module or will new one work?)

var Message = require('./public/js/schemaModule.js')

module.exports.fn = Message.find( {}, function(err, data){ // all callbacks in mongo are (err, result) dataObj is a list of JSON doc
     if(err)  
      return console.error(err);
     return data;
   })