
     msg = function putMsg(message){
    const newMessage = document.createElement("div");
//    newMessage.classList.add("readMessage");
    newMessage.innerHTML = `<p class = "messageText"> ${fuck} </p>`;
    const oldMessage = document.getElementById("msgDisplay");
    const parent = oldMessage.parentNode; 
    parent.replaceChild(newMessage, oldMessage);
   }