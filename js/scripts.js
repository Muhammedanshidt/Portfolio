/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function sendMail() {

    let params= { 
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

const servieceID="service_f43bxbo";
const templateID="template_1yvtnic";

emailjs
.send(servieceID,templateID,params)
.then((res) => {
    document.getElementById("name").value = ""
    document.getElementById("email").value = "" 
    document.getElementById("message").value=""
    console.log(res);
    alert("Your Message Send Successfully");
})
.catch((err) => console.log(err));
}