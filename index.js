// create variables
const mainRating = document.querySelector(".rating");
const thankYou = document.querySelector(".thank-you");
const submit = document.querySelector(".btn_submit");
const selectedRate = document.querySelector(".selected");
const rates = document.querySelectorAll(".btn_number");

// hide/unhide elements

submit.addEventListener("click", () => {
  thankYou.classList.remove("hidden");
  mainRating.classList.add("hidden");
});

// select rate function
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    selectedRate.innerHTML = rate.innerHTML;
  });
});
