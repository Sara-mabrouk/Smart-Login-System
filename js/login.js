// logIn ==============>>

var logEmail = document.getElementById('logEmail');
var logPass = document.getElementById('logPass');
var logBtn = document.getElementById('logBtn');
var success = document.getElementById('success');

let users = [];

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

function logIn() {
    if (logEmail.value == '' ||
        logPass.value == '') {
        success.innerHTML = `<span class"text-danger my-3"> Please Fill all Fields </span>`
    } else {
        for (let i = 0; i < users.length; i++) {
            if (logEmail.value.toLowerCase() == users[i].email.toLowerCase() && logPass.value == users[i].password) {
                success.innerHTML = `<span class"text-success my-3"> Success</span>`

                localStorage.setItem('userName', JSON.stringify(users[i].name))
                location.href = "/home.html";
                return
            }
        }
        success.innerHTML = `<span class"text-danger my-3"> Please Sign Up </span>`
    }
}
// Event BTN LogIn ==>>
logBtn.addEventListener('click', function() {
    logIn()
});