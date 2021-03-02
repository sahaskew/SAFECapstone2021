/* This is the server file. This file will create an http connection and kickstart 
a socket connection. local port is set to :   http://localhost:3000   */

const express = require("express");
const socketIO = require("socket.io");

const PORT = process.env.PORT || 3000;
const INDEX = "/index.html";
const STUDENT = "public/student.html";
const ADMIN = "public/admin.html"

//set up app
var app = express();
var server = app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

//static files for retrieval. ALL HTML and CSS must go in this folder.
app.use(express.static("public"));

//pass the socket a server. "I want socketio to work on this server"
var io = socketIO(server);

app.get("/student", (req, res) => {
  res.sendFile(STUDENT, { root: __dirname });
});

app.get("/admin", (req, res) => {
  res.sendFile(ADMIN, { root: __dirname });
});

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("createRoom", function (room) {
    socket.join(room);
    console.log("client joined room" + room);
  });
  socket.on("disconnect", () => console.log("Client disconnected"));
});

//test emit signal with displaying time
setInterval(() => io.emit("time", new Date().toTimeString()), 1000);
