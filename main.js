function validate() {
    var username = document.getElementById("Username").value;
    var passowrd = document.getElementById("Password").value;
    var ErrorMessage = document.getElementById("Error")
    var SuccessfulMessage = document.getElementById("Successfuly")
    if (username=="Bulgaria"&& passowrd=="RP") {
        SuccessfulMessage.style.opacity=1;
        setTimeout(function () {
            window.open("https://www.tyreyryr.github.io/Secrer2");
            window.close("https://www.tyreyryr.github.io/Secret");
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
