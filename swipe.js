// ========================================
// SWIPE & DINE - MEAL SWIPE PAGE
// ========================================


// LOAD SAVED PLAN

const savedPlan =
  JSON.parse(
    localStorage.getItem("swipeAndDinePlan")
  ) || {};

const mealsNeeded = savedPlan.days || 1;


// PAGE ELEMENTS

const mealCard =
  document.getElementById("mealCard");

const mealProgress =
  document.getElementById("mealProgress");

const passButton =
  document.getElementById("passButton");

const addButton =
  document.getElementById("addButton");

const backButton =
  document.getElementById("swipeBackButton");


// MEAL SELECTION

let chosenMeals = 0;


// UPDATE PROGRESS

function updateProgress() {

  mealProgress.textContent =
    `${chosenMeals} of ${mealsNeeded} meals chosen`;

}


// PASS MEAL

passButton.addEventListener("click", function () {

  mealCard.classList.add("card-pass");

  setTimeout(function () {

    mealCard.classList.remove("card-pass");

  }, 350);

});


// ADD MEAL

addButton.addEventListener("click", function () {

  if (chosenMeals >= mealsNeeded) {
    return;
  }

  chosenMeals++;

  updateProgress();

  mealCard.classList.add("card-add");

  setTimeout(function () {

    mealCard.classList.remove("card-add");

  }, 350);

});


// BACK BUTTON

backButton.addEventListener("click", function () {

  window.location.href = "cuisines.html";

});


// PREVENT IPHONE RAPID-TAP ZOOM

let lastTouchEnd = 0;

document.addEventListener(
  "touchend",
  function (event) {

    const now = Date.now();

    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }

    lastTouchEnd = now;

  },
  { passive: false }
);


// INITIAL SCREEN

updateProgress();
