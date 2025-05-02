//your JS code here. If required.
let fn = document.getElementById("fn");
let ln = document.getElementById("ln");
let pn = document.getElementById("pn");
let email = document.getElementById("email");

function alertt() {
	alert(`First Name: ${fn.value}, Last Name: ${ln.value}, Number: ${pn.value}, Email ID: ${email.value}`);
}

document.getElementById("submit").addEventListener("click", alertt)

