$(currentDay).text(function () {
    var now = moment().format("dddd, MMM Do YYYY");
    return now;
})

// var checkTime = function () {

// }

var timeCheck = $("time").attr("datetime");
console.log(timeCheck);