/* keeping this in case we get requirejs working
requirejs(['./common'], function (common) {
    requirejs(['formModule']);
});
*/
//Enable/Disable Email textbox
function EnableDisableTextBox(chkEmail) {
  const txtEmail = document.getElementById("txtEmail");
  txtEmail.disabled = !chkEmail.checked;
  if (!txtEmail.disabled) {
    txtEmail.classList.add("innerInput");
    txtEmail.classList.remove("emailInput");
    txtEmail.focus();
  } else {
    txtEmail.classList.remove("innerInput");
    txtEmail.classList.add("emailInput");
  }
}

// // Hide/Show Email text box
// function ShowHideEmail(chkEmail) {
//   var dvPassport = document.getElementById("dvEmail");
//   dvPassport.style.display = chkEmail.checked ? "block" : "none";
// }

// functions for the message.html;
// count the number of textarea
function countNum(obj) {
  document.getElementById("textNum").innerHTML = obj.value.length;
}

function getInfo() {
  const name = document.getElementById("name").value;
  const feedback = document.getElementById("feedback").value;
  /* notice here: .checked not .value  (ture means checked, else if false)*/
  const checkStatus = document.getElementById("chkEmail").checked;
  console.log("name: " + name);
  console.log("feedback: " + feedback);
  console.log("check: " + checkStatus);
}

/* ================================================ */
// functions for feedbackEmail.html

// check the format of email.
// function checkEmail(){
//     var email = document.getElementById("emailName").value;
//     //console.log("Email: " + email);

//     if(!email){
//         alert("Please enter your email");
//         return false;
//     }
//     if(email != ""){
//         var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
//         if(!reg.test(email)){
//             alert("Please enter a valid email format");
//             return false;
//         }
//     }
// }

function getEmail() {
  const email = document.getElementById("emailName").value;
  console.log("Email: " + email);
}

function checkEmail2() {
  const email = document.getElementById("txtEmail").value;
  console.log("Email: " + email);

  if (!email) {
    alert("Please enter your email!");
    return false;
  }
  if (email === "") {
    return;
  }
  const reg =
      /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+(([.\-])[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  if (!reg.test(email)) {
    alert("Please enter a valid email format!");
    return false;
  }
}

// check the feedback in the form.
// use the status of checkbox, to jump to different pages.
function checkForm() {
  const feedback = document.getElementById("feedback").value;
  const checkStatus = document.getElementById("chkEmail").checked;
  const formSub = document.getElementById("form");
  if (feedback === "") {
    alert("Please write your feedback!");
    return false;
  } else {
    const checkSub = confirm("Are you sure want to submit the feedback?");
    if (checkSub === true) {
      // to the different pages.
      if (checkStatus === true) {
        const result = checkEmail2();
        return result !== false;
        // formSub.action= "feedbackDone.html"
      } else {
        formSub.action = "/addMessage";
      }
      formSub.submit();
      return true;
    } else {
      return false;
    }
  }
}
