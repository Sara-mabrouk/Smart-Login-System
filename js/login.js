// logIn ==============>>

var logEmail = document.getElementById('logEmail');
var logPass = document.getElementById('logPass');
var logBtn = document.getElementById('logBtn');
var success = document.getElementById('success');

function logIn() {
    if (logEmail.value == '' ||
        logPass.value == '') {
        success.innerHTML = `<span class"text-danger my-3"> Please Fill all Fields </span>`
    }
}



// Event BTN LogIn ==>>
logBtn.addEventListener('click', function() {
    logIn()
});