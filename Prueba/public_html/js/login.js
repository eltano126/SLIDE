/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
function valida_login(){
    var email=document.forms["login"]["email"].value;
    var pass=document.forms["login"]["password"].value;          
        if (email.value === "") {
            email.focus();
            return alert("Por favor ingrese el correo electronico.");
        } else {
            if (pass.value === "") {
                pass.focus();
                return alert("Por favor ingrese la comntraseña.");
            }
        }
  alert("Esta todo bien!");
}
        if((email==="eltano126@gmail.com")&&(pass==="pass")){
             nuevaVentana=window.close("http://localhost:8383/EHS/index.html");
             nuevaVentana1=window.open("http://localhost:8383/EHS/form.html");
        }else{
             nuevaVentana=window.close("http://localhost:8383/EHS/index.html");
             nuevaVentana1=window.open("http://localhost:8383/EHS/error.html");
        }
                
        url=nuevaVentana1;