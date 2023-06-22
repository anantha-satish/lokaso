import flatpickr from "flatpickr";

const fp = flatpickr("#date-selector", {
    "mode": "multiple",
    "inline": true,
    "disable": [
        function (date) {
            // return true to disable
            return (date.getDay() === 0 || date.getDay() === 6);

        }
    ],
});