// let sbus = document.querySelector("#sbus");
// let search = document.querySelector(".section-Padding");

// window.addEventListener("load", () => {
//   search.classList.add("active");
// });

// let viewSeat = document.querySelector("#viewSeat");
// let seatDetailsPage = document.querySelector(".seatDetailsPage");
// let closeSeat = document.querySelector("#closeSeat");
// viewSeat.addEventListener("click", () => {
//   seatDetailsPage.classList.add("active");
// });
// closeSeat.addEventListener("click", () => {
//   seatDetailsPage.classList.remove("active");
// });

// Boarding and Dropping Points Js
const boardingSelect = document.getElementById("boarding");
const droppingSelect = document.getElementById("dropping");
const continueBtn = document.getElementById("continueBtn");

function checkSelections() {
  if (boardingSelect.value && droppingSelect.value) {
    continueBtn.style.display = "block";
  } else {
    continueBtn.style.display = "none";
  }
}

boardingSelect.addEventListener("change", checkSelections);
droppingSelect.addEventListener("change", checkSelections);

continueBtn.addEventListener("click", () => {
  // Redirect to payment page
  window.location.href = "payment.html"; // Replace with your payment page URL
});
