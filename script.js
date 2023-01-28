var currentDayEl = document.getElementById("currentDay");
var today = dayjs();

currentDayEl.textContent = "Today is " + today.format("dddd, MMMM DD, YYYY")
currentDayEl.style.fontSize = "60px"

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {

  // Add Click Event For Save Button
  var timeBlockParent = $(".container-fluid");
  var textArea = $(".description")


  timeBlockParent.on("click", ".saveBtn", function (event) {
    
    textInput = event.target.parentElement.children[1]
    textInputValue = textInput.value 
    timeId = event.target.parentElement.id
    localStorage.setItem(timeId, textInputValue)
  })

  // Create Past, Present, Future colorings 
  // class Past = light pink, class Present = pink, class Future = green
  var timeSlots = $("div.container-fluid").children()
  var currentHour = "hour-" + today.format("hh");
  
  $.each(timeSlots, function(index) {

    var slotHour = timeSlots[index].id

    if (slotHour === currentHour) {
      var matches = timeSlots[index];
      $(matches).addClass("present")
    } else if (slotHour < currentHour){
      $(timeSlots[index]).addClass("past")
    } else {
      $(timeSlots[index]).addClass("future")
    }

      console.log(timeSlots[index])



  // Display Local Storage to the Time Slot
var localStorageActivity = localStorage.getItem(slotHour)

var slotText = $(timeSlots[index]).children().eq(1)

if (!localStorageActivity) {
  slotText.text("")
} else {
  slotText.text(localStorageActivity)
} 

})})




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
