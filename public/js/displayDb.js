
//output all entries of DB to Dashboard DOM 
/*
function outputEntries(QueryList){ //Querylist is a list of JSON docs
 const div = document.createElement('div');
 div.classList.add('messages');
 div.innerHTML = `<p>  ${QueryList[0].message} </p> 
 <p class= "messageText">  ${msg}  </p>`;
 document.querySelector('.messages').appendChild(div);
}

    .readMessage
      p.messageText
        | Feedback:
        | Hi Bruce, I am in your capstone class and I wanted to let you know that I really like
        | such and such about it. Thanks for such and such. I only wish you would do more
        | X, Y, and Z in class. Have a good one

*/ 
 function helper(txt) {
  const div = document.createElement("div");
  div.classList.add("readMessage");
  div.innerHTML = `<p class = "messageText"> ${txt} </p>`;
  document.querySelector(".readMessage").appendChild(div); //probably something better than append
 }



