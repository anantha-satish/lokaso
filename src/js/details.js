const bookdetails = document.getElementById("book-details");
const giftdetails = document.getElementById("gift-details");
const triggerbookexperience = document.getElementById("trigger-book-experience");
const triggergiftexperience = document.getElementById("trigger-gift-experience");
const defaultcart = document.getElementById("default-cart");
const experiencebtns = document.getElementById("experience-btns");

const defaultcheckout = document.getElementById("default-checkout");
const giftcheckout = document.getElementById("gift-checkout");

function _toggleInlineCartView() {
    experiencebtns.classList.toggle('d-flex');
    experiencebtns.classList.toggle('d-none');
}
if (triggerbookexperience) {
    triggerbookexperience.addEventListener("click", function () {
        _toggleInlineCartView();
        bookdetails.classList.toggle('d-block');
        bookdetails.classList.toggle('d-none');
    });
}

if (triggergiftexperience) {
    triggergiftexperience.addEventListener("click", function () {
        _toggleInlineCartView();
        giftdetails.classList.toggle('d-block');
        giftdetails.classList.toggle('d-none');
    });
}

if (defaultcart) {
    defaultcart.addEventListener("click", function () {
        _toggleInlineCartView();
        bookdetails.classList.toggle('d-block');
        bookdetails.classList.toggle('d-none');
    });
}

if (defaultcheckout) {
    defaultcheckout.addEventListener("click", function () {
        window.location.href = "./checkout.html";
    });
}


if (giftcheckout) {
    giftcheckout.addEventListener("click", function () {
        window.location.href = "./gift-checkout.html";
    });
}

