//Admin.js includes animations and logic defining the header menu.

/*
const logout = document.querySelector('.logOutText');

const localKey = 'safeUser';

logout.addEventListener('click', leaveStorage);

function leaveStorage(event) {
    // Removes the users from localStorage
    localStorage.removeItem(localKey);
}
*/
// create function to check if user already logged in
/*
function checkStorage() {
    let user = localStorage.getItem(localKey);
    if(user) {
        return true;
    }
    return false;
}
*/

var lastElement = '';


function buttonClicked(id) {
  if (lastElement != "") {
    var last = document.getElementById(lastElement);
    last.classList.add("aFolder");
    last.classList.remove("clickedFolder");
  } else {
    var inbox = document.getElementById("inbox");
    inbox.classList.remove("clickedFolder");
    inbox.classList.add("aFolder");
  }
  var element = document.getElementById(id);
  element.classList.remove("aFolder");
  element.classList.add("clickedFolder");
  lastElement = id;
}

function writeMessage() {
  const replyWindow = window.open("/reply", "popup", "width=1000,height=650");
}

function Validate() {
  var password = document.getElementById("password1").value;
  var confirmPassword = document.getElementById("password2").value;
  var formSub = document.getElementById("login-form");
  if (password != confirmPassword) {
    alert("Passwords do not match.");
    return false;
  } else if (password == "") {
    alert("Fields Cannot Be Blank !");
    return false;
  } else if (confirmPassword == "") {
    alert("Fields Cannot Be Blank !");
    return false;
  } else {
    formSub.action = "dashboard.html";
    return true;
  }
  formSub.submit();

  return true;
}

var state = false;
function toggle() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("eye").style.color = "#7a797e";
    state = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("eye").style.color = "#5887ef";
    state = true;
  }
}

function toggle1() {
  if (state) {
    document.getElementById("password1").setAttribute("type", "password");
    document.getElementById("eye").style.color = "#7a797e";
    state = false;
  } else {
    document.getElementById("password1").setAttribute("type", "text");
    document.getElementById("eye").style.color = "#5887ef";
    state = true;
  }
}

function toggle2() {
  if (state) {
    document.getElementById("password2").setAttribute("type", "password");
    document.getElementById("eye2").style.color = "#7a797e";
    state = false;
  } else {
    document.getElementById("password2").setAttribute("type", "text");
    document.getElementById("eye2").style.color = "#5887ef";
    state = true;
  }
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav1 = document.querySelector(".background");
  const adminIcon = document.querySelector(".adminIcon");
  const navLinkRight = document.querySelector(".navLinkRight");
  const navLinkLeft = document.querySelector(".navLinkLeft");

  burger.addEventListener("click", () => {
    nav1.classList.toggle("nav1-active");
    if (navLinkLeft.classList.contains("navLinkLeft")) {
      navLinkLeft.classList.remove("navLinkLeft");
      navLinkLeft.classList.add("navLinkLeftActive");
      navLinkRight.classList.remove("navLinkRight");
      navLinkRight.classList.add("navLinkRightActive");
      adminIcon.classList.remove("adminIcon");
      adminIcon.classList.add("adminIconActive");
    } else {
      navLinkLeft.classList.remove("navLinkLeftActive");
      navLinkLeft.classList.add("navLinkLeft");
      navLinkRight.classList.remove("navLinkRightActive");
      navLinkRight.classList.add("navLinkRight");
      adminIcon.classList.remove("adminIconActive");
      adminIcon.classList.add("adminIcon");
    }
    //Animate Links
    if (navLinkLeft.style.animation) {
      adminIcon.style.animation = ``;
      navLinkLeft.style.animation = ``;
      navLinkRight.style.animation = ``;
    } else {
      adminIcon.style.animation = `navLinkFade 0.5s ease forwards ${
        1 / 7 + 0.5
      }s`;
      navLinkRight.style.animation = `navLinkFade 0.5s ease forwards ${
        0 / 7 + 0.5
      }s`;
      navLinkLeft.style.animation = `navLinkFade 0.5s ease forwards ${
        1 / 7 + 0.5
      }s`;
    }

    burger.classList.toggle('toggle');

    });
  }
//Call function
navSlide();

//module.exports = { checkStorage };
let url = '/readMessage';

const readDiv = document.querySelector('.readMessage');

const logout = document.querySelector('#inbox');

logout.addEventListener('click', (event) => {
    fetch(url)
        .then(response => {
            console.log('Request Successful ', response);
            return response.json();
        })
        .then(data => {
            console.log('Data ', data);
            data.forEach((item) => {
                let div = document.createElement('div');
                let pTag = document.createElement('p');
                pTag.innerHTML = `Subject: ${item.subject} <br />`;
                pTag.innerHTML += `Message: ${item.message} <br />`;
                if(item.email === undefined) {
                    pTag.innerHTML += `Email: None <br />`;
                }
                else {
                    pTag.innerHTML += `Email: ${item.email} <br />`;
                }
                pTag.innerHTML += `Date: ${item.date} <br />`;
                div.appendChild(pTag);
                readDiv.appendChild(div);
            });
        })
        .catch(error => {
            console.log('Request failed ', error);
        });
});

 /*   burger.classList.toggle("toggle");
  });
};
//Call function
navSlide();
*/
