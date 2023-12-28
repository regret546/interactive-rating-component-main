const ratingBtn = document.querySelector("#ratingBtn");
const selectedRating = document.querySelectorAll("#ratingList button");

let rating = 0;

for (let rate of selectedRating) {
  rate.addEventListener("click", function (e) {
    e.preventDefault();
    rating = parseInt(rate.getAttribute("value"));
  });
}

ratingBtn.addEventListener("click", function (e) {
  e.preventDefault();
  alert("You selected" + " " + rating);
});
