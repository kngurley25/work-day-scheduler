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

    var timeBlock = $("<div>")
    .addClass("row time-block");

    var blockHour = $("<div>")
    .addClass("hour col")
    .text(key);

    var blockDescription = $("<textarea>")
    .addClass("description textarea col-8")
    .text("");

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
})














// this isn't needed
// description text was clicked
$("description").on("click", "textarea", function() {
    var text = $(this)
        .text()
        .trim();
    
    var textInput = $("<textarea>")
        .val(text);
    $(this).replaceWith(textInput);

    schedule[text] = text;

    saveSchedule();
})



// load and save to local storage
var loadSchedule = function() {

    var schedule = JSON.parse(localStorage.getItem("schedule")) || [];

}

var saveSchedule = function() {
    
    var schedule = JSON.parse(localStorage.getItem("schedule")) || [];

    var scheduleObj = {
        description: blockDescription.text
    }
    schedule.push(scheduleObj);
    localStorage.setItem("schedule", JSON.stringify(schedule));
}




