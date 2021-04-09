/* this file is ran when chat.html is loaded. 
It is socket connection create via frontend */ 

//var socket = io.connect( 'http://localhost:3000' );

const socket = io(); //create frontend socket connection to server. 

window.onload=function(){

 const chatForm  = document.getElementById("form");
 if(chatForm){
  chatForm.addEventListener('submit', event => {
   event.preventDefault(); //so that form contents do not automatically send to a file/ disconnect socket
   const msg = document.getElementById("msg").value; 
  // const msg = event.target.elements.msg.value; //get the msg value from the form

   //test msg output
//   console.log(msg);

   //send message to server
   socket.emit('chatMsg', msg); 
  });
 }

}

socket.on('Msg', msg => {
  console.log(msg); //logs msg sent from server to frontend console (browser console)
  chatBox(msg) //now send that message to be put in DOM as chatbox
});

//output message to DOM to create chatboxes
function chatBox(msg){
 const div = document.createElement('div');
 div.classList.add('.mess');
 div.innerHTML = `<p class= "messageText"> ${msg} </p>`;
 document.querySelector('.mess').appendChild(div);
}
//chatR chatL or chatbox class

//when msg submiitted, (1)display on client side (2) emit it to the server 
//call below function when button clicked
/*
 document.getElementById("submit-button").addEventListener('click', function() {
  const msg = document.getElementById("msg").value; 
  console.log(msg);

  //emit the message to server
  socket.emit('chatMsg', msg); 
 });


*/ 