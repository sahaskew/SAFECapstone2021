//file is exported and required within index.js
var mongoose = require("mongoose");

//Create message schema
var messageSchema = new mongoose.Schema({
  subject: {
    type: String
  },
  message: {
    type: String,
    required: true,
  },
  response: {
    type: String
  },
  email: {
    type: String
  },
  flag: {
    type: Boolean,
    default: false,
  },
  open: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;


/*
//this module creates a mongoschema and returns the model 
//this was for the requirejs attempt.keep in case.
define(['mongoose'], function(mongoose){ 
//Create message schema
 const messageSchema = new Schema({
  message: String
 })

 return {
   messageObj = mongoose.model('Message', messageSchema) 
 }

});
*/
