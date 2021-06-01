// Creates the users.txt file if it doesn't exist
// index.js will call this file when the server starts running
// It should initially contain the default admin user and grows when more users are created
// Since all users are technically admin users there's no need to create a role
// I feel like account data should be hidden better, such as in a database where no one can easily find it
const fs = require("fs");
const filePath = "public/users.txt";

// admin array that gets filled in createUsers() function
const users = [];

// Creates a default admin user so that the site has one upon start up
// Should consider deleting this user when an official admin is created in the future
function createUsers() {
  // admin object
  let defaultUser = {
    id: 0,
    firstName: "SafeAdmin",
    lastName: "User",
    email: "safeadmin@safemail.com",
    password: "safepassword",
  };
  users.push(defaultUser);
  // testing multiple users functionality
  // logging in for multiple users works, if there's an issue it might be with future code
  /*
    let defaultUser2 = {
        id: 1,
        firstName: "SafeAdmin2",
        lastName: "User",
        email: "safeadmin2@safemail.com",
        password: "safepassword2"
    };
    users.push(defaultUser2);
    */
  // Checking if the file already exists, so potential data doesn't get overwritten
  if (fs.existsSync(filePath)) {
    return;
  }
  // Creating users.txt file and storing it in the pubilc directory, and writing the admin data
  fs.writeFile(filePath, JSON.stringify(users), (error) => {
    if (error) {
      throw error;
    }
  });
}

module.exports = { createUsers };
