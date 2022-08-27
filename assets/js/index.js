var container = $(".container");

// make button variables
var buttonNine = document.querySelector("#button9");
var buttonTen = document.querySelector("#button10");
var buttonEleven = document.querySelector("#button11");
var buttonTwelve = document.querySelector("#button12");
var buttonThirteen = document.querySelector("#button13");
var buttonFourteen = document.querySelector("#button14");
var buttonFifteen = document.querySelector("#button15");
var buttonSixteen = document.querySelector("#button16");
var buttonSeventeen = document.querySelector("#button17");

// get time slot times for local storage object

// display the current day at the top of the screen
$(currentDay).text(function () {
    var now = moment().format("dddd, MMM Do YYYY");
    return now;
});

// load tasks
$(".slot time").each(function () {
    var currentTimeSlot = $(this).attr("datetime");

    console.log(localStorage.getItem(JSON.parse(currentTimeSlot)));

    var localStorageValue = localStorage.getItem(JSON.parse(currentTimeSlot));
    if (localStorageValue) {
        $(this).siblings("input").val(localStorageValue.replace(/['"]+/g, ''));
    };
});


// when button is clicked, the related input text is saved to local storage
var saveTasks = function (event) {
    if ((event.target) === buttonNine) {
        var inputNine = document.querySelector("#input9").value;
        localStorage.setItem("9", JSON.stringify(inputNine));
    } else if ((event.target) === buttonTen) {
        var inputTen = document.querySelector("#input10").value;
        localStorage.setItem("10", JSON.stringify(inputTen));
    } else if ((event.target) === buttonEleven) {
        var inputEleven = document.querySelector("#input11").value;
        localStorage.setItem("11", JSON.stringify(inputEleven));
    } else if ((event.target) === buttonTwelve) {
        var inputTwelve = document.querySelector("#input12").value;
        localStorage.setItem("12", JSON.stringify(inputTwelve));
    } else if ((event.target) === buttonThirteen) {
        var inputThirteen = document.querySelector("#input13").value;
        localStorage.setItem("13", JSON.stringify(inputThirteen));
    } else if ((event.target) === buttonFourteen) {
        var inputFourteen = document.querySelector("#input14").value;
        localStorage.setItem("14", JSON.stringify(inputFourteen));
    } else if ((event.target) === buttonFifteen) {
        var inputFifteen = document.querySelector("#input15").value;
        localStorage.setItem("15", JSON.stringify(inputFifteen));
    } else if ((event.target) === buttonSixteen) {
        var inputSixteen = document.querySelector("#input16").value;
        localStorage.setItem("16", JSON.stringify(inputSixteen));
    } else if ((event.target) === buttonSeventeen) {
        var inputSeventeen = document.querySelector("#input17").value;
        localStorage.setItem("17", JSON.stringify(inputSeventeen));
    };
};


// time check function
var timeSlotAudit = function () {
    $(".slot time").each(function () {
        // get time slot time
        var currentTimeSlot = $(this).attr("datetime");
        console.log("Current Time Slot: " + currentTimeSlot);

        var currentTime = moment().format("HH");
        console.log("Current Time: " + currentTime);

        if (parseInt(currentTimeSlot) < parseInt(currentTime)) {
            $(this).siblings("input").addClass("list-group-item-dark");
        } else if (parseInt(currentTimeSlot) === parseInt(currentTime)) {
            $(this).siblings("input").addClass("list-group-item-danger");
        } else if (parseInt(currentTimeSlot) > parseInt(currentTime)) {
            $(this).siblings("input").addClass("list-group-item-success");
        }
    })
};

setInterval(function () {
    timeSlotAudit();
}, (1000 * 60) * 5);

timeSlotAudit();

container.on("click", saveTasks);