var user = document.getElementById("user");
var pass = document.getElementById("pass");

function inicio(){
    if(user.value == "erika" && pass.value == "duberi2"){      
      /*document.getElementById("info1").style.display="block";*/
      location.href = "logeado.html";
    }
    else{
      /*alert("No logeado");   
      
      location.href = "logeado.html";
    }
}