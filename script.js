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

// function to create dynamic HTML elements
var createBlock = function(val) {
    
    var timeBlock = $("<div>")
        .addClass("row time-block align-items-center");
    
    var blockHour = $("<div>")
        .addClass("hour col")
        .text(val);
    
    var blockDescription = $("<p>")
        .addClass("description col-8")
        .text("sample description text");
    
    var blockBtn = $("<div>") 
        .addClass("saveBtn col")
        .text("sample icon");
    
    // append hour div, description div, and save button div to parent row
    timeBlock.append(blockHour, blockDescription, blockBtn);

    // append timeblock row to container
    $(".container").append(timeBlock);
    
}

// create dynamic HTML elements over each static hour time period
Object.values(hourObject).forEach(function(val) {

    createBlock(val);

})

// description text was clicked
$("description").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();
    
    var textInput = $("<textarea>")
        .val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
})




// load and save to local storage
var loadSchedule = function() {

    var schedule = JSON.parse(localStorage.getItem("schedule")) || [];

    // TODO verify this
    createBlock(schedule);

}

var saveSchedule = function() {
    
    var schedule = localStorage.setItem("schedule", JSON.stringify("schedule")) || [];

    var scheduleObj = {
        // TODO add description part of time block
    }
    schedule.push(scheduleObj);
    localStorage.setItem("schedule", JSON.stringify(schedule));
}




