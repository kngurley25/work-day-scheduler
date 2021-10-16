// display current time and date at header
var now = moment().format("MMMM DD, YYYY - hh:mm A");
// console.log(now);

$("#currentDay")
    .text(now);

// iterate through object of static time periods
var hourObject = {
    1: "9:00 AM",
    2: "10:00 AM",
    3: "11:00 AM",
    4: "12:00 PM",
    5: "1:00 PM",
    6: "2:00 PM",
    7: "3:00 PM",
    8: "4:00 PM",
    9: "5:00 PM"
}

var hours = Object.values(hourObject);
console.log(hours);

Object.values(hourObject).forEach(val => console.log(val));

Object.values(hourObject).forEach(function(val) {

    var timeBlock = $("<div>")
        .addClass("row time-block align-items-center");

    var blockTime = $("<div>")
        .addClass("hour col")
        .text(val);

    var blockDescription = $("<textarea>")
        .addClass("description col-8")
        .text("");
    
    var blockBtn = $("<div>") 
        .addClass("saveBtn col")
        .text("sample icon");

    // append hour div, description div, and save button div to parent row
    timeBlock.append(blockTime, blockDescription, blockBtn);

    // append timeblock row to container
    $(".container").append(timeBlock);

});


// local storage persistance for schedule
var saveSchedule = function() {

    var scheduleData = JSON.parse(localStorage.getItem("schedule-data")) || []; 
    var scheduleObj = {
    }
    scheduleData.push(scheduleObj);
    localStorage.setItem("schedule-data", JSON.stringify(scheduleData));
}

saveSchedule();



