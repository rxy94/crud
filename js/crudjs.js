/*************************************************************************************************/
/*                  JavaScript for crud table                                                    */
/*                  Author: Ruyi Xia Ye                                                          */
/*                  Version: 1.0                                                                 */
/*                  Date: February 2024                                                          */
/*                  Comments: Lenguajes de Marcas project                                        */
/*************************************************************************************************/

//Función de validación para el Login
function validateLogin() {
    
    let valid = true;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usernameRegex = /^[a-z0-9_]{8,12}$/;
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,15}/ ;

    if (username == ""  || !usernameRegex.test(username)) {
        alert("Invalid username. A username should have between 8 and 12 characters, using letters, numbers, and underscores.");
        document.getElementById('usernameHelp').style.visibility = "visible";
        document.getElementById('username').style.borderColor="lightblue";
        valid = false;
    }

    if (password == "" || !passwordRegex.test(password)) {
        alert("Invalid password. A strong password should have between 8 and 15 characters, including one lowercase letter, one uppercase letter, one number, and one special character.");
        document.getElementById('passwordHelp').style.visibility="visible";
        document.getElementById('password').style.borderColor="lightblue";
        valid = false;
    }

    return valid; 
}


//Función de validación para el formulacio de Inserción
function validacion() {

    let valid = true;
    const name = document.getElementById("name").value;
    const idnumber = document.getElementById("idnumber").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const fechaIn = document.getElementById("fechaIn").value;
    const ticketclass = document.getElementById("ticketclass").value;
    const terms = document.getElementById('terms');
    const nameRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/ ;
    const idRegex = /^[0-9]{8}[A-Za-z]$/ ;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ ;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/ ;


    if (name == "" || !nameRegex.test(name) || /^\s+$/.test(name) || /[0-9]/.test(name)) {
        document.getElementById('nameHelp').style.visibility = "visible" ;
        document.getElementById('name').style.borderColor="lightblue";
        valid = false;
    }

    if (idnumber == "" || !idRegex.test(idnumber)) {
        document.getElementById('idnumberHelp').style.visibility = "visible" ;
        document.getElementById('idnumber').style.borderColor="lightblue";
        valid = false;
    }

    
    if (phone == "" || !phoneRegex.test(phone)) {
        document.getElementById('phoneHelp').style.visibility = "visible" ;
        document.getElementById('phone').style.borderColor="lightblue";
        valid = false;
    }

    
    if (email == "" || !emailRegex.test(email)) {
        document.getElementById('emailHelp').style.visibility = "visible" ;
        document.getElementById('email').style.borderColor="lightblue";
        valid = false;
    }

    if(fechaIn == "") {
        document.getElementById('fechaInHelp').style.visibility = "visible" ;
        document.getElementById('fechaIn').style.borderColor="lightblue";
        valid = false;
    }

    if(ticketclass == 0) {
        document.getElementById('ticketclassHelp').style.visibility = "visible" ;
        document.getElementById('ticketclass').style.borderColor="lightblue";
        valid = false;
    }
    

    if(!terms.checked) { 
        document.getElementById('termsHelp').style.visibility = "visible" ;
        document.getElementById('terms').style.borderColor="lightblue";
        valid = false;
    }

    return valid;

}


//Función que resetea los campos al enviar el formulario
function resetear(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden"; 
    document.getElementById(id).style.borderColor="black";
}


//Función para el Listado
function myFunction() {
    confirm("Are you sure you want to delete this row?");
}

//Función para el formulario de edición
function saveChanges() {
    confirm("Are you sure you want to save these changes?");
}
