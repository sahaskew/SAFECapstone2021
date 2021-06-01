var code = "";

function makeid(length) {
  var result = [];
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=-+";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}

/* check email */
function checkEmail() {
  var email = document.getElementById("email").value;
  if (!email) {
    alert("Please enter your email");
    return false;
  }
  if (email != "") {
    var reg =
      /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (!reg.test(email)) {
      alert("Please enter a valid email format");
      return false;
    }
  }
}

function setCode() {
  const code = makeid(30);
  localStorage.setItem("code", code);

  return code;
}
