//Connect to MongoDB
module.exports.db = function () {
  const dbURI =
    "mongodb+srv://jkmoore:sypzeg-Mupxit-2zudba@cluster0.bfd5u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const mongoose = require("mongoose");
  // const Schema = mongoose.Schema;
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection
    .once("open", function () {
      console.log("Connected to MongoDB");
    })
    .on("error", function (error) {
      console.log("error is:", error);
    });
};

/* this was originally on index.js with above code. this is now part of SchemaModule.js
//Create message schema
const messageSchema = new Schema({
  message: String
})
const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
*/
/* How to create and save a message
const testMessage = new Message({
  message: 'testing message with mongo'
});
testMessage.save(); */
