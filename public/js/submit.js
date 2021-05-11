
function ShowHideEmail(chkEmail) {
    var dvPassport = document.getElementById("dvEmail");
    dvPassport.style.display = chkEmail.checked ? "block" : "none";
}

// functions for the message.html;
// count the number of textarea
function countNum(obj){ 
    document.getElementById('textNum').innerHTML = obj.value.length;
}

// check the feedback in the form. 
// use the status of checkbox, to jump to different pages.
function checkform(){
    var feedback = document.getElementById("feedback").value;
    var formSub =document.getElementById("form");
    if(feedback == ''){
        alert("Please write your feedback");
        return false;
    }
    else{
        var checkSub = confirm("Are you sure want to submit the feedback?");
        if(checkSub == true){
            formSub.action = "/addMessage";
            formSub.submit();
            return true;
        }
        else{
            return false;
        }
    }   
}

function getInfo(){
    var name = document.getElementById("name").value;
    var feedback = document.getElementById("feedback").value;
   /* notice here: .checked not .value  (ture means chedked, else if false)*/
    var checkStatus = document.getElementById("check").checked;
    console.log("name: " + name);
    console.log("feedback: " + feedback);
    console.log("cheack: " + checkStatus);
}


/* ================================================ */
// functions for feedbackEmail.html

// check the fromat of emial.
function checkEmail(){
    var email = document.getElementById("emailName").value;
    //console.log("Email: " + email);

    if(!email){
        alert("Please enter your email");
        return false;
    }
    if(email != ""){
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if(!reg.test(email)){
            alert("Please enter a valid email format");
            return false;
        }
    }   
}

function getEmail(){
    var email = document.getElementById("emailName").value;
    console.log("Email: " + email);
}