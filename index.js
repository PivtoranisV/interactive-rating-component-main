// create variables
const mainRating = document.querySelector(".rating");
const thankYou = document.querySelector(".thank-you");
const submit = document.querySelector(".btn_submit");

// hide/unhide elements

submit.addEventListener("click", () => {
  thankYou.classList.remove("hidden");
  mainRating.classList.add("hidden");
});
