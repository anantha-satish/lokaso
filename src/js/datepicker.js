import AirDatepicker from 'air-datepicker';
const localeEn = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yyyy',
    timeFormat: 'hh:ii aa',
    firstDay: 0
};

new AirDatepicker("#date-selector", {
    "inline": 'true',
    "locale": localeEn,
    "minDate": new Date(),
    "firstDay": 1,
    "showOtherMonths": false,
    "selectOtherMonths": false,
    "prevHtml": "<span class='icon-chevron-left'></span>",
    "nextHtml": "<span class='icon-chevron-right'></span>",
    "disableNavWhenOutOfRange": false
});
