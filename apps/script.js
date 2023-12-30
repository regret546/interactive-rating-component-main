const ratingBtn = document.querySelector("#ratingBtn");
const selectedRating = document.querySelectorAll("#ratingList button");
const ratingSpan = document.querySelector("#selected_rating");
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");

let rating = 0;

for (let rate of selectedRating) {
  rate.addEventListener("click", function (e) {
    e.preventDefault();
    rating = parseInt(rate.getAttribute("value"));
  });
}

ratingBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (rating !== 0) {
    card1.style.display = "none";
    card2.style.display = "grid";
    ratingSpan.textContent = rating;
  } else {
    alert("Please Select a Rating");
  }
});
