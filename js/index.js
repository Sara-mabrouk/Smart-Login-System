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

// sign up ==>>
function signUp() {
    if (signupName.value == '' ||
        signupEmail.value == '' ||
        signupPass.value == '') {
        exitFelids.innerHTML = `<span class"text-danger my-3"> Please Fill all Fields </span>`
    } else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
                exitFelids.innerHTML = `<span class"text-danger my-3">Email Already Exist  </span>`
                return false
            }
        }
        getUserData()
        exitFelids.innerHTML = `<span class"text-success my-3"> Sign up successful </span>`
    }
}

function getUserData() {
    var user = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPass.value
    }
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
    location.href = '/index.html';
}

// Event BTN ==>>
signupBtn.addEventListener('click', function() {
    signUp()
})