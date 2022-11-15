function validate() {
    var username = document.getElementById("Username").value;
    var passowrd = document.getElementById("Password").value;
    var ErrorMessage = document.getElementById("Error")
    var SuccessfulMessage = document.getElementById("Successfuly")
    if (username=="Bulgatia"&& passowrd=="RP") {
        SuccessfulMessage.style.opacity=1;
        setTimeout(function () {
            window.open("");
            window.close("");
            SuccessfulMessage.style.opacity=0;
        }, 1000);
        return false;
    }else{
        ErrorMessage.style.opacity=1;
        setTimeout(function () {
            ErrorMessage.style.opacity=0;
        }, 1000);
        
    }

}
