const cancelCarting = document.getElementById("cancel-carting");
const checkout = document.getElementById("checkout");

if (cancelCarting) {
    cancelCarting.addEventListener("click", () => {
        window.history.back();
    });
}

const goBackDetails = document.querySelectorAll(".btn-go-details");

if (goBackDetails) {
    for (let index = 0; index < goBackDetails.length; index++) {
        const element = goBackDetails[index];
        element.addEventListener('click', () => {
            window.location.href = "./details.html";
        });
    }
}

if (checkout) {
    checkout.addEventListener("click", () => {
        window.location.href = "./checkout.html";
    });
}