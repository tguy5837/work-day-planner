// display the current day at the top of the screen
$(currentDay).text(function () {
    var now = moment().format("dddd, MMM Do YYYY");
    return now;
});

// time check function
$(".slot time").each(function () {
    // get time slot time
    var currentTimeSlot = $(this).attr("datetime");
    console.log(currentTimeSlot);

    var currentTime = moment().format("HH");
    console.log("Current Time: " + currentTime);

    if (parseInt(currentTimeSlot) < parseInt(currentTime)) {
        $(this).siblings("input").addClass("list-group-item-dark");
    } else if (parseInt(currentTimeSlot) === parseInt(currentTime)) {
        $(this).siblings("input").addClass("list-group-item-danger");
    } else if (parseInt(currentTimeSlot) > parseInt(currentTime)) {
        $(this).siblings("input").addClass("list-group-item-success");
    }
});