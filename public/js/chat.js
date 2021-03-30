/* this file is ran when message.html is loaded. 
It is socket connection on frontend */ 

//var socket = io.connect( 'http://localhost:3000' );

const socket = io(); 

window.onload=function(){

// const chatForm  = document.getElementById("form");

//when msg submiitted, (1)display on client side (2) emit it to the server 
//call below function when button clicked
 document.getElementById("submit-button").addEventListener('click', function() {
  const msg = document.getElementById("msg").value; 
  console.log(msg);
  socket.emit('chatMsg', msg); 
 });

}
/*if(chatForm){
 chatForm.addEventListener('submit', event => {
   event.preventDefault(); //so that form contents do not automatically send to a file ( we might actually need this for the DB entries)
   const msg = event.target.elements.msg.value; //get the msg value from the form

   //test msg output
   console.log(msg);

   //send message to server
//   socket.emit('chatMsg', msg); 
 });
}
*/
socket.on('Msg', msg => {
  console.log(msg); //logs on frontend console (browser console)
});