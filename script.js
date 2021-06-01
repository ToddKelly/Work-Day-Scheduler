var today = moment();
$("#currentDay").text(today.format('LLLL'));// used the moment js to create the current day,date and time

var present_hour = today.format("H");//created a variable for storing the hour as an integer value
console.log(present_hour);

$(".saveBtn").on("click", function() {// Event listener for creating the function to get the schedule time and date
    var schedule_data = $(this).siblings(".schedule").val();
    var schedule_time = $(this).parent().attr("id");
    localStorage.setItem(schedule_time, schedule_data );//storing the data in local storage
});

// uploading the saved data from localStorage 
$("#7 .schedule").val(localStorage.getItem("7"));
$("#8 .schedule").val(localStorage.getItem("8"));
$("#9 .schedule").val(localStorage.getItem("9"));
$("#10 .schedule").val(localStorage.getItem("10"));
$("#11 .schedule").val(localStorage.getItem("11"));
$("#12 .schedule").val(localStorage.getItem("12"));
$("#13 .schedule").val(localStorage.getItem("13"));
$("#14 .schedule").val(localStorage.getItem("14"));
$("#15 .schedule").val(localStorage.getItem("15"));
$("#16 .schedule").val(localStorage.getItem("16"));
$("#17 .schedule").val(localStorage.getItem("17"));
$("#18 .schedule").val(localStorage.getItem("18"));

function time_change() {//created a function to compared the time present on the schedule and the present time

  
    $(".time-block").each(function() {
        var compare_hour = parseInt($(this).attr("id"));//converted the time already present into an integer
        console.log(compare_hour);
        console.log(compare_hour < present_hour);
        if (compare_hour < present_hour) {// using the conditions in order to allot the past present and future classes 
            $(this).addClass("past").removeClass("present").removeClass("future");
        } 
        else if (compare_hour == present_hour) {
          $(this).addClass("present").removeClass("future").removeClass("past");
        } 
        else {
          $(this).addClass("future").removeClass("past").removeClass("present");
        }
    });
  }
  
  time_change();// call the function created