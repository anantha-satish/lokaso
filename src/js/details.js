const triggerdetails = document.querySelectorAll(".trigger-details");
const enterdetails = document.getElementById("enter-details");
const addinlinecart = document.getElementById("add-inline-cart");
const experiencebtns = document.getElementById("experience-btns");

function _toggleInlineCartView() {
    experiencebtns.classList.toggle('d-flex');
    experiencebtns.classList.toggle('d-none');
    enterdetails.classList.toggle('d-block');
    enterdetails.classList.toggle('d-none');
}

if (triggerdetails) {
    for (let index = 0; index < triggerdetails.length; index++) {
        const element = triggerdetails[index];
        element.addEventListener("click", function () {
            _toggleInlineCartView();
        });
    }
}

if (addinlinecart) {
    addinlinecart.addEventListener("click", function () {
        _toggleInlineCartView();
    });
}

