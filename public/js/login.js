/*
    login.js file is used to log an user into the website if their credentials
    are already in the database (we're using MongoDB). This file will be called
    whenever the admin.html file is visited by a user. The user will enter
    their email address and password, and when they press the "submit" button,
    or input, this file should receive the information the user entered. With
    that information it should compare the data to what's in the database.

    Might need to create a seperate login.html file and have that file send
    the user to the admin.html file upon successful login attempt. That way we
    can make it so that an user will have to be authenticated in order to
    access the admin.html address.
*/
//'http://localhost:3000'

// setup: Have this file track the admin.html file
// have the script tag in the header of the admin.html file list this file
// as the source
// Next: create a socket.io instance
//const socket = io();

// Function runs as soon as the admin.html file is loaded
/*
window.onload = function() {
    const loginForm = document.getElementById("login-form");
    if(loginForm) {
        loginForm.addEventListener('submit', event => {
            // I'm not sure if I need to do this
            event.preventDefault();
            // Grab the email and password
            // Note: Both the email and password are required in the html
            //       form, so it's important that the following lines don't
            //       execute if the user leaves any of the fields blank.
            //       Test for later
            // It does seem like the html form doesn't send the information
            // through when a field is left blank
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // DON'T KEEP THIS!!! FOR TESTING PURPOSES ONLY!!!
            alert("Email: " + email + "\nPassword: " + password);
            // Was successful in getting the user's data
            // Remember to delete this once finished integrating the database

            // DO NOT KEEP THIS!! FOR TESTING PURPOSES ONLY!!!!
            // It didn't work. Still need to delete this just in case
            //socket.emit('message', email, password);

            // Clear inputs after login attempt
            document.getElementById("email").value = '';
            document.getElementById("password").value = '';
        });
    }
}
*/

// I reiterate: DO NOT KEEP THIS!! THIS IS ONLY FOR TESTING PURPOSES!!!
/*
socket.on('Message', (email, password) => {
    console.log((email, password));
    alert("Email:" + email + "\nPassword:" + password);
});
*/

/*
function Login() {
    let email = document.getElementById('email').value;
    console.log('User email: ' + email);

    return false;
}

export default Login;
*/

var express = require('express');
var router = express.Router();

router.post("../admin", (req, res) => {
    console.log(req);
});

module.exports = router;