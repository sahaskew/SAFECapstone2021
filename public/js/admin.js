//Admin.js includes animations and logic defining the header menu.
let lastElement = "";

function buttonClicked(id) {
  if (lastElement !== "") {
    let last = document.getElementById(lastElement);
    last.classList.add("aFolder");
    last.classList.remove("clickedFolder");
  } else {
    let inbox = document.getElementById("inbox");
    inbox.classList.remove("clickedFolder");
    inbox.classList.add("aFolder");
  }
  let element = document.getElementById(id);
  element.classList.remove("aFolder");
  element.classList.add("clickedFolder");
  lastElement = id;
}

function writeMessage() {
  window.open("/reply", "popup", "width=1000,height=650");
}

function Validate() {
  let password = document.getElementById("password1").value;
  let confirmPassword = document.getElementById("password2").value;
  let formSub = document.getElementById("login-form");
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  } else if (password === "") {
    alert("Fields Cannot Be Blank !");
    return false;
  } else if (confirmPassword === "") {
    alert("Fields Cannot Be Blank !");
    return false;
  } else {
    formSub.action = "dashboard.html";
    return true;
  }
  formSub.submit();

  return true;
}

let state = false;

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

    burger.classList.toggle("toggle");
  });
};
//Call function
navSlide();
