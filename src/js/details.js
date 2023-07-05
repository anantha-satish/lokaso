const bookdetails = document.getElementById("book-details");
const giftdetails = document.getElementById("gift-details");
const triggerbookexperience = document.getElementById("trigger-book-experience");
const triggergiftexperience = document.getElementById("trigger-gift-experience");
const defaultcart = document.getElementById("default-cart");
const experiencebtns = document.getElementById("experience-btns");

const defaultcheckout = document.getElementById("default-checkout");
const giftcheckout = document.getElementById("gift-checkout");
const cartnotch = document.querySelector(".cart-notch");

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
        experiencebtns.classList.add('d-flex');
        experiencebtns.classList.remove('d-none');
        bookdetails.classList.remove('d-block');
        bookdetails.classList.add('d-none');
        cartnotch.classList.add('d-block');
        cartnotch.classList.remove('d-none');
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


// Clickoutside to close details
document.addEventListener("click", function () {
    if (!giftdetails) {
        alert('');
    }
});

document.addEventListener('mouseup', function (e) {
    if (!giftdetails.contains(e.target)) {
        giftdetails.classList.add('d-none');
        experiencebtns.classList.add('d-flex');
        experiencebtns.classList.remove('d-none');
    }
    if (!bookdetails.contains(e.target)) {
        bookdetails.classList.add('d-none');
        experiencebtns.classList.add('d-flex');
        experiencebtns.classList.remove('d-none');
    }
});