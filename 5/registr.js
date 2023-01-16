var Passwd = document.getElementById("password");
var Passwd_s = document.getElementById("password-second");
var length = document.getElementById("length");
var upper = document.getElementById("upper");
var number = document.getElementById("number");


Passwd.onfocus = function() {
    document.getElementById("errors").style.display = "block";;
}


Passwd.onblur = function() {
    document.getElementById("errors").style.display = "none";
}


Passwd.onkeyup = function() {
  
    let check1 = false;
    let check2 = false;
    let check3 = false;

    Passwd.classList.remove("pass-standard");
    Passwd.classList.add("pass-valid");

    var upperCaseLetters = /[A-Z]/g;
    if(Passwd.value.match(upperCaseLetters))
     {  
        upper.classList.remove("invalid");
        upper.classList.add("valid");
        check1 = true;
    } else {
        upper.classList.remove("valid");
        upper.classList.add("invalid");
    }

    var numbers = /[0-9]/g;
    if(Passwd.value.match(numbers)) 
    {  
        number.classList.remove("invalid");
        number.classList.add("valid");
        check2 = true;
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if(Passwd.value.length >= 8) 
    {
        length.classList.remove("invalid");
        length.classList.add("valid");
        check3 = true;
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    if(check1 == true && check2 == true && check3 == true)
    {
        Passwd.classList.remove("pass-invalid");
        Passwd.classList.add("pass-valid");
    }
    else{
        Passwd.classList.remove("pass-valid");
        Passwd.classList.add("pass-invalid");
    }
}

Passwd_s.onkeyup = function ()
{
  var value_pass = Passwd.value;
  var value_pass_sec = Passwd_s.value;
  
  Passwd_s.classList.remove("pass-standard");
  Passwd_s.classList.add("pass-valid");
    if(value_pass != value_pass_sec){
        Passwd_s.classList.remove("pass-valid");
        Passwd_s.classList.add("pass-invalid");
    }
    else{
        Passwd_s.classList.remove("pass-invalid");
        Passwd_s.classList.add("pass-valid");
    }

}