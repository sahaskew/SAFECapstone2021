//define a module for requirejs usage
//will probably have to move all mongodb stuff into its own module. use that module in index.js and in here

define(['mongoose'], function(){ //this could require the module of the db being made
//Create message schema
 const messageSchema = new Schema({
  message: String
 })

 return function( ){
   messageObj = mongoose.model('Message', messageSchema); //in submit.js now can I fill/save this?
 }

});
