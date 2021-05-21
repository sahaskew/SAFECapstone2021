
//output message to Dashboard DOM 
function chatBox(msg){
 const div = document.createElement('div');
 div.classList.add('mess');
 var msgTime = getTime();
 div.innerHTML = `<p>  ${msgTime} </p> 
 <p class= "messageText">  ${msg}  </p>`;
 document.querySelector('.chatBox').appendChild(div);
}