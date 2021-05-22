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
const fs = require('fs');

const user = {email:'safeadmin@safemail.com', password:'safepassword'};

function login(username,pass) {
    let result;
    if(username === user.email && pass === user.password) {
        result = true;
    }
    else {
        result = false;
    }
    
    return result;
}

module.exports = { login };