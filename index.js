/* This is the server file. This file will create an http connection and kickstart 
a socket connection. local port is set to :   http://localhost:3000   */

const express = require("express");
require('dotenv').config();
const socketIO = require("socket.io");
const {instrument} = require( "@socket.io/admin-ui"); 
const PORT = process.env.PORT || 3000;


const INDEX = "/index.html";
const DASHBOARD = "public/Dashboard.html";
const STUDENT = "public/student.html";
const CHAT = "public/chat.html";
const ADMIN = "public/admin.html";
const ABOUT = "public/about.html";
const MESSAGE = "public/message.html";
const RESET = "public/resetpw.html";


//set up app
var app = express();
var server = app.listen(PORT, () => {
  console.log(`SAFE is running on port ${PORT}`);

});
 
//calls a module that connects to mongodb 
var mongoConnect = require('./public/js/mongoModule.js');
mongoConnect.db();

//static files for retrieval. ALL HTML and CSS must go in this folder.
app.use(express.static("public"));

//Socketio gets passed http server as arg and specifies 
var io = socketIO(server, {
  cors: {
    origin: ["https://admin.socket.io"] //permits cross origin of the static chat admin site
  }
});

//connect server to chat admin UI . !! NEED TO ENCRPYT !!
instrument(io, {
  auth: {
    type: "basic",
    username: "admin",
    password: "$2y$12$JMlYelfCXM5t6woezPSxZ.wbPa97DD.Xu2J7eu4lXQN1rURTYI6HO" 
  },
});
  

app.get("/", (req, res) => {
  res.sendFile(INDEX, { root: __dirname });
});

app.get("/student", (req, res) => {
  res.sendFile(STUDENT, { root: __dirname });
});

app.get("/chat", (req, res) => {
  res.sendFile(CHAT, { root: __dirname });
});

app.get("/dashboard", (req, res) => {
  res.sendFile(DASHBOARD, { root: __dirname });
});

app.get("/admin", (req, res) => {
  res.sendFile(ADMIN, { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile(ABOUT, { root: __dirname });
});

app.get("/message", (req, res) => {
  res.sendFile(MESSAGE, { root: __dirname });
});
/*
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
app.post("/submit", (req, res) => {
  console.log(req.body.name);
  console.log(req.body.feedback);
  res.redirect("/feedbackDone.html");
})
*/
io.on("connection", (socket) => {
  console.log("Client connected via socket (not in a room yet)");
  
  //sends msg to client to test connection 
  socket.emit('Msg', 'welcome! , I am a msg sent from the server to your chat room.');

  socket.on("createRoom", function (room) {
    socket.join(room);
    console.log("client joined room " + room + ", ID: " + socket.id);
  });
  //display chat msg on server terminal 
  socket.on( "chatMsg", msg => {
    console.log(msg); 
    //emit to everybody
    io.emit('Msg', msg ); 
  });

  socket.on("disconnect", () => { 
    console.log("Client disconnected");
    io.emit( 'Msg', 'A user has left the chat');
  }); 
});

//test emit signal with displaying time display msg sent time
setInterval(() => io.emit("time", new Date().toTimeString()), 1000);
