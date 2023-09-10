let ratingList = document.querySelectorAll(".rating-list li label");
let ratingForm = document.querySelector(".rating-form");
let thankCard = document.querySelector(".thank-card");
let rate = document.querySelector(".thank-card .rate");

// Add event listener to rating list buttons
ratingList.forEach((item) => {
  item.addEventListener("click", checkRate);
});

// Function to toggle check of rate button
function checkRate(event) {
  // Remove check class from rate buttons
  ratingList.forEach((item) => {
    if (item != event.target) item.classList.remove("selected");
  });

  // toggle "selected" class
  event.target.classList.toggle("selected");

  if (event.target.classList.contains("selected")) {
    rate.innerHTML = event.target.nextSibling.value;
  } else {
    rate.innerHTML = "-";
  }
}

function submitForm(event) {
  event.preventDefault();
  // Hide the form
  ratingForm.classList.add("hidden");
  // Display the Thank Card
  thankCard.classList.remove("hidden");
}
