var currentDayEl = document.getElementById("currentDay");
var today = dayjs();

currentDayEl.textContent = "Today is " + today.format("dddd, MMMM DD, YYYY")
currentDayEl.style.fontSize = "60px"

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  var timeBlockParent = $(".container-fluid");
  var textArea = $(".description")


    //this = event.target = save button
  timeBlockParent.on("click", ".saveBtn", function (event) {
    
    textArea = event.target.parentElement.children[1]
    textAreaInput = textArea.value 
    timeId = event.target.parentElement.id
    localStorage.setItem(timeId, textAreaInput)
  })
  })

  var timeSlots = $("div.container-fluid").children()
  var currentHour = "hour-" + today.hour();

  // console.log(timeSlots[4].id)
  
  $.each(timeSlots, function(index) {

    var slotHour = timeSlots[index].id
    // console.log(timeSlots[index].id)
    // console.log(timeSlots[index])

    if (slotHour === currentHour) {
      var matches = timeSlots[index];
      console.log(matches)
      $(matches).addClass("present")
    } else if (slotHour < currentHour){
      $(timeSlots[index]).addClass("past")
    } else {
      $(timeSlots[index]).addClass("future")
    }
  })




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
