const influencerSignup = document.getElementById("influencer-signup");
const userSignup = document.getElementById("user-signup");
const userLogin = document.getElementById("user-login");
const passwordUserLogin = document.getElementById("password-user-login");
const changePassword = document.getElementById("change-password");

if (influencerSignup) {
    influencerSignup.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = "./influencer-postlogin.html";
    });
}

if (userSignup) {
    userSignup.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = "./details-postlogin.html";
    });
}

if (userLogin) {
    userLogin.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = "./details-postlogin.html";
    });
}

if (passwordUserLogin) {
    passwordUserLogin.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = "./details-postlogin.html";
    });
}

if (changePassword) {
    changePassword.addEventListener('submit', function (event) {
        event.preventDefault();
        window.history.back();
    });
}