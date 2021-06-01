


function checkCode()
{

    code = localStorage.getItem("code")

    var inputCode = document.getElementById("codeInput").value;
    inputCode = inputCode.replaceAll(" ", "")
    
    if (String(inputCode) === String(code))
    {
        window.location.href = "/resetPass?50HqygjkbHQM-aiG5ddQUYIUhtXyM+"
    }
    else
    {
        alert("Invalid Code")


    }
}

