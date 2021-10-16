// display current time and date at header
var now = moment().format("MMMM DD, YYYY - hh:mm A");
// console.log(now);

$("#currentDay")
    .text(now);

// function to loop through workday period object
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

    var blockDescription = $("<div>")
        .addClass("description col-8")
        .text("sample text");
    
    var blockBtn = $("<div>") 
        .addClass("saveBtn col")
        .text("sample icon");

    // append hour div, description div, and save button div to parent row
    timeBlock.append(blockTime, blockDescription, blockBtn);

    $(".container").append(timeBlock);

});






// // function to create block elements: block, block hour, and block description
// var createBlock = function(blockDescription, blockTime, timeBlock) {



    
//     // create parent element li for individual time block
//     var blockItem = $("<li>")
//         .addClass("time-block");
//     var blockTime = $("<span>")
//         .addClass("hour")
//         .text(blockTime);
//     var blockDescription = $("<p>")
//         .addClass("description")
//         .text(blockDescription);

//     // append hour span and description p to parent li
//     blockItem.append(blockTime, blockDescription);

//     // append to div container on page
//     $(".container" + timeBlock).append(blockItem);
// }

// createBlock();

