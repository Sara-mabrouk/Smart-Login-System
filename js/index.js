var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPass = document.getElementById('signupPass');
var signupBtn = document.getElementById('signupBtn');
var exitFelids = document.getElementById('exitFelids');
var users = [];

// localStorage ==>.
if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

// Validation functions
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

function isValidName(name) {
    return name.length >= 3;
}

// sign up ==>>
function signUp() {
    var name = signupName.value;
    var email = signupEmail.value;
    var password = signupPass.value;

    if (name === '' || email === '' || password === '') {
        exitFelids.innerHTML = `<span class="my-3">Please Fill all Fields</span>`;
    } else if (!isValidName(name)) {
        exitFelids.innerHTML = `<span class=" my-3">Name Must Be At Least 3 Characters</span>`;
    } else if (!isValidEmail(email)) {
        exitFelids.innerHTML = `<span class="my-3">Please Enter a Valid Email</span>`;
    } else if (!isValidPassword(password)) {
        exitFelids.innerHTML = `<span class="my-3">Password Must Be At Least 6 Characters</span>`;
    } else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email.toLowerCase() == email.toLowerCase()) {
                exitFelids.innerHTML = `<span class="my-3">Email Already Exists</span>`;
                return;
            }
        }
        getUserData();
        exitFelids.innerHTML = `<span class=" my-3">Sign up successful</span>`;
    }
}

function getUserData() {
    var user = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPass.value
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    location.href = 'index.html';
}

// Event BTN ==>>
signupBtn.addEventListener('click', function() {
    signUp();
});