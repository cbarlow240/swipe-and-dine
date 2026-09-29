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
const currentRecipe = recipes[0];
// DISPLAY CURRENT RECIPE

function displayRecipe() {

  const cuisine =
    mealCard.querySelector(".meal-cuisine");

  const title =
    mealCard.querySelector("h2");

  const description =
    mealCard.querySelector(".meal-details p");

  cuisine.textContent =
    currentRecipe.cuisine.toUpperCase();

  title.textContent =
    currentRecipe.name;

  description.textContent =
    currentRecipe.description;
const time =
  mealCard.querySelector(".meal-meta span");

time.textContent =
  `⏱️ ${currentRecipe.totalTime} mins`;
  const metaItems =
  mealCard.querySelectorAll(".meal-meta span");

metaItems[1].textContent =
  `🌍 ${currentRecipe.cuisine}`;

const difficultyBadge =
  document.createElement("span");
difficultyBadge.className = "difficulty-badge";
difficultyBadge.textContent =
  `⭐ ${currentRecipe.difficulty}`;

mealCard
  .querySelector(".meal-meta")
  .appendChild(difficultyBadge);
}
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


// ========================================
// TOUCH + MOUSE SWIPE GESTURES
// ========================================

let isDragging = false;
let startX = 0;
let currentX = 0;

const swipeThreshold = 90;


// START DRAG

mealCard.addEventListener("pointerdown", function (event) {

  isDragging = true;

  startX = event.clientX;
  currentX = 0;

  mealCard.setPointerCapture(event.pointerId);

  mealCard.style.transition = "none";

});

// MOVE CARD

mealCard.addEventListener("pointermove", function (event) {

  if (!isDragging) {
    return;
  }

  currentX = event.clientX - startX;

  const rotation = currentX / 18;

  mealCard.style.transform =
    `translateX(${currentX}px) rotate(${rotation}deg)`;
const passFeedback =
  mealCard.querySelector(".pass-feedback");

const addFeedback =
  mealCard.querySelector(".add-feedback");

if (currentX < 0) {

  passFeedback.style.opacity =
    Math.min(Math.abs(currentX) / 90, 1);

  addFeedback.style.opacity = 0;

} else {

  addFeedback.style.opacity =
    Math.min(currentX / 90, 1);

  passFeedback.style.opacity = 0;

}

});

// FINISH DRAG

mealCard.addEventListener("pointerup", function (event) {

  if (!isDragging) {
    return;
  }

  isDragging = false;

  mealCard.releasePointerCapture(event.pointerId);

  mealCard.style.transition =
    "transform 0.35s ease, opacity 0.35s ease";

  // SWIPE LEFT = PASS

if (currentX <= -swipeThreshold) {

  mealCard.style.transform = "";
  mealCard.style.opacity = "";

  passButton.click();

  return;
}

// SWIPE RIGHT = ADD

if (currentX >= swipeThreshold) {

  mealCard.style.transform = "";
  mealCard.style.opacity = "";

  addButton.click();

  return;
}

// NOT FAR ENOUGH - SNAP BACK

mealCard.style.transform =
  "translateX(0) rotate(0deg)";

const passFeedback =
  mealCard.querySelector(".pass-feedback");

const addFeedback =
  mealCard.querySelector(".add-feedback");

passFeedback.style.opacity = "";
addFeedback.style.opacity = "";

});

// CANCELLED DRAG

mealCard.addEventListener("pointercancel", function () {

  isDragging = false;

  mealCard.style.transition =
    "transform 0.35s ease";

  mealCard.style.transform =
    "translateX(0) rotate(0deg)";

  const passFeedback =
    mealCard.querySelector(".pass-feedback");

  const addFeedback =
    mealCard.querySelector(".add-feedback");

  passFeedback.style.opacity = "";
  addFeedback.style.opacity = "";

});


// INITIAL SCREEN

displayRecipe();
updateProgress();
