/* this file is ran when student.html starts */ 
//socket connection on frontend
//var socket = io.connect( 'http://localhost:3000' );

const socket = io(); 
const chatForm  = document.getElementById("chat-form");

//when msg submiitted, (1)display on client side (2) emit it to the server 
if(chatForm){
 chatForm.addEventListener('submit', event => {
   event.preventDefault(); //so that form contents do not automatically send to a file ( we might actually need this for the DB entries)
   const msg = event.target.elements.msg.value; //get the msg value from the form
   console.log(msg);
 });
}


socket.on('Msg', msg => {
  console.log(msg); //logs on frontend console (browser console)
});