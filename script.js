var currentDayEl = document.getElementById("currentDay");
var today = dayjs();

currentDayEl.textContent = "Today is " + today.format("dddd, MMMM DD, YYYY")
currentDayEl.style.fontSize = "60px"


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
  var currentHour = "hour-" + today.format("HH");
  
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

  // Display Local Storage to the Time Slot
var localStorageActivity = localStorage.getItem(slotHour)

var slotText = $(timeSlots[index]).children().eq(1)

if (!localStorageActivity) {
  slotText.text("")
} else {
  slotText.text(localStorageActivity)
} 

})})