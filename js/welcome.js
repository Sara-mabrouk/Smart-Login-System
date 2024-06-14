var logOutBtn = document.getElementById("logOutBtn");
var welcomeUser = document.getElementById("userName");
var userName = localStorage.getItem("userName");

welcomeUser.innerHTML = "حمدلله علي السلامه وقدر ولطف يـ " + userName;

logOutBtn.addEventListener("click", function() {
    location.href = "index.html";
});