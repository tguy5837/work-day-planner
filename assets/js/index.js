// var

$(currentDay).text(function () {
    var now = moment().format("dddd, MMM Do YYYY");
    return now;
});

// var checkTime = function () {

// }

// var timeCheck = $("time").attr("datetime");
// console.log(timeCheck);

$(".slot time").each(function () {
    var currentTimeSlot = $(this).attr("datetime");
    console.log("Time Slot: " + currentTimeSlot);

    var currentTime = moment().format("HH:mm");
    console.log("Current Time: " + currentTime);

    if (currentTime > currentTimeSlot) {
        $(".slot input").addClass("list-group-item-dark");
    } else if (currentTime < currentTimeSlot) {
        $(".slot input").addClass("list-group-item-danger");
    }
})