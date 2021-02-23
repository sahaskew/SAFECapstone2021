/* This is the server file. This file will create an http connection and kickstart 
a socket connection.

local port is set to :   http://localhost:3000. click this to locally test your code. */

const express = require('express')
const socketIO = require('socket.io') //socketIO is an abstraction of websockets. 

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

/*create http page using express, and sends our index.html as the default page*/
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

/*socket IO takes http server as arg to listen to socketIO requests*/ 
const io = socketIO(server);

 io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('createRoom',function(room){
    socket.join(room);
    console.log('client joined room' + room);
  })
  socket.on('disconnect', () => console.log('Client disconnected'));
 });
/*
 var roomno  = 1;
 io.sockets.in(roomno).emit('initialMsg', "hey nerds, welcome to room " + roomno);
*/
 //test emit signal with displaying time
 setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

