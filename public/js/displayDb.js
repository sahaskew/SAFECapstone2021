var data = require("JSONmodule.js");
dataList = data.fn(); //JSON list

//const res = fetch('/dashboard');
//const dataList = res.json();

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
