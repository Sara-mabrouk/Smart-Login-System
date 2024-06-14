// logIn ==============>>

var logEmail = document.getElementById('logEmail');
var logPass = document.getElementById('logPass');
var logBtn = document.getElementById('logBtn');
var success = document.getElementById('success');

let users = [];

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

function logIn() {
    var email = logEmail.value;
    var password = logPass.value;

    if (email === '' || password === '') {
        success.innerHTML = `<span class=" my-3">Please Fill all Fields</span>`;
    } else if (!isValidEmail(email)) {
        success.innerHTML = `<span class=" my-3">Please Enter a Valid Email</span>`;
    } else if (!isValidPassword(password)) {
        success.innerHTML = `<span class=" my-3">Password Must Be At Least 6 Characters</span>`;
    } else {
        for (let i = 0; i < users.length; i++) {
            if (email.toLowerCase() == users[i].email.toLowerCase() && password == users[i].password) {
                success.innerHTML = `<span class=" my-3">Success</span>`;

                localStorage.setItem('userName', JSON.stringify(users[i].name));
                location.href = "home.html";
                return;
            }
        }
        success.innerHTML = `<span class="text-danger my-3">Please Sign Up</span>`;
    }
}

// Event BTN LogIn ==>>
logBtn.addEventListener('click', function() {
    logIn();
});