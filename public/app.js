//App.js includes animations and logic defining the header menu.

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav1 = document.querySelector('.background');
    const adminIcon = document.querySelector('.adminIcon li');
    const navLinkRight = document.querySelector('.navLinkRight li');
    const navLinkLeft = document.querySelector('.navLinkLeft li');
    


    burger.addEventListener('click', () => {
        nav1.classList.toggle('nav1-active');
    //Animate Links
    if(navLinkLeft.style.animation) {
        adminIcon.style.animation = ``;
        navLinkLeft.style.animation = ``;
        navLinkRight.style.animation = ``;
    } else {
        adminIcon.style.animation = `navLinkFade 0.5s ease forwards ${1/7 + 0.5}s`
        navLinkRight.style.animation = `navLinkFade 0.5s ease forwards ${0/7 + 0.5}s`
        navLinkLeft.style.animation = `navLinkFade 0.5s ease forwards ${1/7 + 0.5}s`
    }

    burger.classList.toggle('toggle');

    });
  }
  //Call function
  navSlide();

var textarea = document.getElementById('input');
var result = document.getElementById('result');

function updateResult() {
    result.textContent = textarea.value;
    document.getElementById('input').value = "";
}
document.getElementById('sendButton').onclick = updateResult;
var input = document.getElementById('input');



/*
var i = 0;
var textTemplate = document.getElementById('text');
function sendMessage() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "duplicater" + ++i;
    // or clone.id = ""; if the divs don't need an ID
    original.parentNode.appendChild(clone);
}



function appendMessage() {
    const messageContainer = document.getElementById('chatBoxContainer');
  
    // Create and append the message div
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chatR';
  
     Create the username div
    const usernameDiv = document.createElement('div');
    usernameDiv.className = 'message-username';
    usernameDiv.textContent = `${message.user.id}:`;
  
    // Append the username div to the MessageDiv
    messageDiv.append(usernameDiv);
  
    // Create the main message text div
    var textTemplate = document.getElementById('text');
  
    // Append the username div to the MessageDiv
    messageDiv.append(textTemplate);
  
    // Then append the messageDiv to the "messages" div
    messageContainer.appendChild(messageDiv);
  }

  //appendMessage();




document.getElementById('sendButton').onclick = duplicate;


var i = 0;
var original = document.getElementById('text');

function duplicate() {
    var element = document.getElementById("getTime");
    element.innerHTML = "New Heading";
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "duplicated" + ++i; // there can only be one element with an ID
    original.parentNode.appendChild(clone);
}
*/