/*this file manipulates the DOM for the admin dashboard. data is retrieved 
from a different module. displaying the subject and message of a single object.
when a subject is clicked, the associated msg must be displayed */

//var data = require("JSONmodule.js");
//dataList = data.fn(); //JSON list

function msgDisplay(){
  const newMessage = document.createElement("div");
  newMessage.classList.add("readMessage");
  newMessage.innerHTML = `<p class = "messageText"> "beep bloop" </p>`;
  const oldMessage = document.getElementById("msgDisplay");
  const parent = oldMessage.parentNode; 
  parent.replaceChild(newMessage, oldMessage);
}

//every button created must come with onclick = helper() 
function subjDisplay(dataList){
  //loop through datalist and make a button for each
 const newSubject = document.createElement("button");
 newSubject.classList.add("clickableMessage");
 newSubject.innerHTML = `<p class = "messageText"> ${dataList[0].subject} </p>`;
 document.querySelector("messages").appendChild(newSubject);
}
