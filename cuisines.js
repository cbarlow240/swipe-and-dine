const cuisineButtons = document.querySelectorAll(".cuisine-option");
const selectionCount = document.getElementById("selectionCount");
const startSwipingButton = document.getElementById("startSwipingButton");
const backButton = document.getElementById("backButton");

let selectedCuisines = [];


// SELECT / DESELECT CUISINES

cuisineButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const cuisine = button.dataset.cuisine;

    if (cuisine === "Surprise Me") {

      cuisineButtons.forEach(function (item) {
        item.classList.remove("selected");
      });

      selectedCuisines = ["Surprise Me"];
      button.classList.add("selected");

    } else {

      const surpriseButton =
        document.querySelector('[data-cuisine="Surprise Me"]');

      surpriseButton.classList.remove("selected");

      selectedCuisines =
        selectedCuisines.filter(function (item) {
          return item !== "Surprise Me";
        });


      if (selectedCuisines.includes(cuisine)) {

        selectedCuisines =
          selectedCuisines.filter(function (item) {
            return item !== cuisine;
          });

        button.classList.remove("selected");

      } else {

        selectedCuisines.push(cuisine);
        button.classList.add("selected");

      }

    }

    updateSelection();

  });

});


// UPDATE BOTTOM OF SCREEN

function updateSelection() {

  const amount = selectedCuisines.length;

  if (amount === 0) {

    selectionCount.textContent = "Choose at least one";
    startSwipingButton.disabled = true;

  } else if (
    amount === 1 &&
    selectedCuisines[0] === "Surprise Me"
  ) {

    selectionCount.textContent = "We'll choose for you";
    startSwipingButton.disabled = false;

  } else {

    selectionCount.textContent =
      `${amount} ${
        amount === 1 ? "style" : "styles"
      } selected`;

    startSwipingButton.disabled = false;

  }

}


// BACK BUTTON

backButton.addEventListener("click", function () {
  window.location.href = "index.html";
});


// START SWIPING

startSwipingButton.addEventListener("click", function () {

  const savedPlan =
    JSON.parse(
      localStorage.getItem("swipeAndDinePlan")
    ) || {};

  savedPlan.cuisines = selectedCuisines;

  localStorage.setItem(
    "swipeAndDinePlan",
    JSON.stringify(savedPlan)
  );

  alert(
    `Selected: ${selectedCuisines.join(", ")}`
  );

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


// INITIAL STATE

updateSelection();
// SURPRISE ME FOOD ROULETTE

const rouletteFood = document.querySelector(".roulette-food");

const rouletteFoods = ["🍕", "🌮", "🍜", "🍔"];

let rouletteFoodIndex = 0;

setInterval(function () {

  rouletteFoodIndex =
    (rouletteFoodIndex + 1) % rouletteFoods.length;

  rouletteFood.textContent =
    rouletteFoods[rouletteFoodIndex];

}, 800);
