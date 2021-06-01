let code = "";

function makeId(length) {
  const result = [];
  const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=-+";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}

/* check email */
function checkEmail() {
  const email = document.getElementById("email").value;
  if (!email) {
    alert("Please enter your email");
    return false;
  }
  if (email !== "") {
    const reg =
        /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+(([.\-])[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (!reg.test(email)) {
      alert("Please enter a valid email format");
      return false;
    }
  }
}

function setCode() {
  const code = makeId(30);
  localStorage.setItem("code", code);

  return code;
}
