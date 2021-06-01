/* hiding password*/
function show() {
  let P = document.getElementById("password");
  let showP = document.getElementById("show");
  let hideP = document.getElementById("hide");
  if (P.type === "password") {
    P.type = "text";
    showP.style.display = "block";
    hideP.style.display = "none";
  } else {
    P.type = "password";
    showP.style.display = "none";
    hideP.style.display = "block";
  }
}

/*confirm password */
function checkPass() {
  let password = document.getElementById("password").value;
  let comPassword = document.getElementById("ConfirmPass").value;
  //console.log("pass" + password);
  //console.log("compass"+ comPassword);
  if (password === "") {

  } else if (password === comPassword) {
    document.getElementById("ConfirmPass").style.boxShadow =
      "0px 0px 1px 1px rgba(0,0,225,0.6)";
    document.getElementById("ConfirmPass").style.border = "1px solid blue";
  } else {
    document.getElementById("ConfirmPass").style.boxShadow =
      "0px 0px 1px 1px rgba(255,0,0)";
    document.getElementById("ConfirmPass").style.border = "1px solid red";
  }
}

/* check all information  */
function checkForm() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let comPass = document.getElementById("ConfirmPass").value;

  if (!email) {
    alert("Please enter your email");
    return false;
  }
  if (!pass) {
    alert("Password should not be empty!");
    return false;
  }
  if (!comPass) {
    alert("Please confirm your password!");
    return false;
  }
  if (pass !== comPass) {
    alert("Inconsistent passwords");
    return false;
  }
  if (email !== "") {
    let reg =
        /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+(([.\-])[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (!reg.test(email)) {
      alert("Please enter a valid email format");
      return false;
    } else {
      document.getElementById("email").style.color = "white";
    }
  }
}
// get information
function info() {
  let name = document.getElementById("Name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  console.log("name is: " + name);
  console.log("Email is: " + email);
  console.log("Password is: " + pass);
}
