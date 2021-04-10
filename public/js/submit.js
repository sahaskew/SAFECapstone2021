
// count the number of textarea
function countNum(obj){ 
    document.getElementById('textNum').innerHTML = obj.value.length;
}

function checkform(){
    //var name = document.getElementById("name").value;
    var feedback = document.getElementById("feedback").value;
    //console.log("name: " + name);
    if(feedback == ''){
        alert("Please write your feedback");
        return false;
    }
    else{
        var checkSub = confirm("Are you sure want to submit the feedback?");
        if(checkSub == true){
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
    var checkStatus = document.getElementById("check").value;
    console.log("name: " + name);
    console.log("feedback: " + feedback);
    console.log("cheack: " + checkStatus);
}
