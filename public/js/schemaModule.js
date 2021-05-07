//this module creates a mongoschema and returns the model 
define(['mongoose'], function(mongoose){ 
//Create message schema
 const messageSchema = new Schema({
  message: String
 })

 return {
   messageObj = mongoose.model('Message', messageSchema) 
 }

});
