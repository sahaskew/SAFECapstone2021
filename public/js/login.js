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
const fs = require("fs");
const filePath = "public/users.txt";
//const localKey = 'safeUser';

// Reads the txt file that contains the admin accounts
function readUsersFile() {
  // fs.readFileSync returns the contents of the file as a string
  let userFile = fs.readFileSync(filePath, "utf-8");
  // need to parse the data and store it as an array
  let userArr = JSON.parse(userFile);
  return userArr;
}

function login(username,pass) {
    let users = readUsersFile();
    // loop through each user searching for a matching username and password
    let i;
    for(i = 0; i < users.length; i++){
        if(username === users[i].email && pass === users[i].password) {
            // set localStorage item for easier navigation
            //localStorage.setItem(localKey,users[i].name);
            return true;
        }
    }  
    return false;
}

/*
function checkStorage() {
    let user = window.localStorage.getItem(localKey);
    if(user) {
        return true;
    }
    return false;
}
*/

module.exports = { login };
 /*
function login(username, pass) {
  let users = readUsersFile();
  // loop through each user searching for a matching username and password
  let i;
  for (i = 0; i < users.length; i++) {
    if (username === users[i].email && pass === users[i].password) {
      return true;
    }
  }
  return false;
}

module.exports = { login };
*/

