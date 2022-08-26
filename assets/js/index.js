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
    // get time slot time
    var currentTimeSlot = $(this).attr("datetime");

    //turn into moment time
    var time = moment(currentTimeSlot, "HH:mm").format("HH:mm");

    console.log("Time Slot: " + time);

    var currentTime = moment().format("HH:mm");
    console.log("Current Time: " + currentTime);

    if (moment().isAfter(time)) {
        $(".slot input").addClass("list-group-item-dark");
    };
});