//commonjs configs for requirejs to be used in frontend.

//  var requirejs = require("requirejs");
requirejs.config({
  nodeRequire: require,
  baseUrl: "public/js",
});

/*module.exports.model = function(){
const messageSchema = new Schema({
  message: String
})
const Message = mongoose.model('Message', messageSchema);
module.exports = Message;

}*/
