function validateForm()
{
    var x = document.forms["myForm"]["fname"].value;
    if ( x == "")
    {
        alert("Name must be filled out");
        return false;
    }
}

function myFunction()
{
    var inobj = document.getElementById("id");
    if (!inobj.checkValidity())
{
    document.getElementById("result").innerHTML = inobj.validationMessage;
}
else{
    document.getElementById("result").innerHTML = "Input OK";
}
}

function demo()
{
alert ("hi")
}

function agechecker()
{
    var inobj = document.getElementById("idd")
    if (!inobj.checkValidity())
    {
        document.getElementById("checker").innerHTML = inobj.validationMessage;
    }
    else{
        document.getElementById("checker").innerHTML = " Eligible";
    }
}