// Select the element with the class "date"
let dateElement = document.querySelector(".date");

// Get the current date and set it as the inner HTML of the selected element
let currentDate = new Date().getDate() ;
let month = new Date().getFullYear();
let year = new Date().getFullYear()
dateElement.innerHTML = month
