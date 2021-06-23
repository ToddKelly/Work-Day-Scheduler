// Time and date 
var timeDisplayEl = $('#time-display');


//display the current date and time in the header 
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

  //calls the displaytime function and shows every second on the screen 
  setInterval(displayTime, 1000);

//connect to the saveBtn  
$(".saveBtn").on("click", function() {
    var schedule_data = $(this).siblings(".schedule").val();
    var schedule_time = $(this).parent().attr("id");
    localStorage.setItem(schedule_time, schedule_data );
});

//time ID selector
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

function time_change() {

  
    $(".time-block").each(function() {
        var compare_hour = parseInt($(this).attr("id"));
        console.log(compare_hour);
        console.log(compare_hour < present_hour);
        if (compare_hour < present_hour) {
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
  
  time_change();