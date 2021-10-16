// display current time and date at header
var now = moment().format("MMMM DD, YYYY - hh:mm A");
// console.log(now);

$("#currentDay")
    .text(now);

// iterate through object of static time periods
var hourObject = {
    9: "9:00 AM",
    10: "10:00 AM",
    11: "11:00 AM",
    12: "12:00 PM",
    13: "1:00 PM",
    14: "2:00 PM",
    15: "3:00 PM",
    16: "4:00 PM",
    17: "5:00 PM"
}
var hourCount = Object.keys(hourObject).length

// create dynamic HTML elements over each static hour time period
Object.values(hourObject).forEach(function(key, val) {

    // load local storage into block description
    var schedule = localStorage.getItem(key);

    var timeBlock = $("<div>")
    .addClass("row time-block");

    var blockHour = $("<div>")
    .addClass("hour col")
    .text(key);

    var blockDescription = $("<textarea>")
    .addClass("description textarea col-8")
    .text("")
    .val(schedule);

    var blockBtn = $("<button>") 
    .addClass("saveBtn far fa-save col")

    // append hour div, description div, and save button div to parent row
    timeBlock.append(blockHour, blockDescription, blockBtn);

    // append timeblock row to container
    $(".container").append(timeBlock);

    // audit description for current time of day
    var currentHour = moment().hour()
    console.log("The current hour is " + currentHour);

    var hourValue = val + hourCount;
    if (hourValue > currentHour) {
        $(blockDescription).addClass("future");
    }
    else if (hourValue === currentHour) {
        $(blockDescription).addClass("present");
    }
    else if (hourValue < currentHour) {
        $(blockDescription).addClass("past");
    }
    
    // save to local storage upon click save button
    $(blockBtn).on("click", function() {
 
        localStorage.setItem(key, $(blockDescription).val());

    })
})





