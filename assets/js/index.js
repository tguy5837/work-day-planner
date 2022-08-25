$(currentDay).text(function () {
    var now = moment().format("dddd, MMM Do YYYY");
    return now;
})