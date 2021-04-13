/* this file is ran when chat.html is loaded. 
It is  the socket connection create via frontend .
 note that for ANY message sent it is relayed 
 through the socket and server before being 
 displayed on front end. So app.js cant implement msg retrieval. */ 

 //'http://localhost:3000' 

const socket = io(); //create frontend socket connection to server. 

window.onload=function(){

 const chatForm  = document.getElementById("form");
 if(chatForm){
  chatForm.addEventListener('submit', event => {
   event.preventDefault(); //so that form contents do not automatically send to a file/ disconnect socket
   const msg = document.getElementById("msg").value; 
  
   //send message to server
   socket.emit('chatMsg', msg); 
  
   //clear input after sending msg
   document.getElementById("msg").value = '';
  });
 }

}

socket.on('Msg', msg => {
  console.log(msg); //logs msg sent from server to frontend console (browser console)
  chatBox(msg) //now send that message to be put in DOM as chatbox
});

//output message to DOM to inside chatboxes
function chatBox(msg){
 const div = document.createElement('div');
 div.classList.add('.mess');
 div.innerHTML = `<p class= "messageText"> ${msg} </p>`;
 document.querySelector('.chatBox .mess').appendChild(div);
}

/* not in use
 document.getElementById("submit-button").addEventListener('click', function() {
  const msg = document.getElementById("msg").value; 
  console.log(msg);

  //emit the message to server
  socket.emit('chatMsg', msg); 
 });
*/ 