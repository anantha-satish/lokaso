import flatpickr from "flatpickr";

const fp = flatpickr("#date-selector", {
    "mode": "multiple",
    "inline": true,
    "disable": [
        function (date) {
            // return true to disable
            return (date.getDay() === 0 || date.getDay() === 6);
        }
    ]
});
for(var i = 0; i < 7; i++) {
    console.log('..', $('.flatpickr-weekday'));
    $('.flatpickr-weekday')[i].textContent = $('.flatpickr-weekday')[i].textContent.replace(/\s/g, '').slice(0, 2);
}
