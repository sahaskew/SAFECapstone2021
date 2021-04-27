/* check email */
function checkEmail(){
    var email = document.getElementById("email").value;
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
    var email = document.getElementById("email").value;
    console.log("Email: " + email);
}