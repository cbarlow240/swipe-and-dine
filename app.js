let people = 4;
let days = 7;


// GET PAGE ELEMENTS

const peopleCount = document.getElementById("peopleCount");
const daysCount = document.getElementById("daysCount");

const summaryMeals = document.getElementById("summaryMeals");
const summaryPeople = document.getElementById("summaryPeople");

const peopleMinus = document.getElementById("peopleMinus");
const peoplePlus = document.getElementById("peoplePlus");

const daysMinus = document.getElementById("daysMinus");
const daysPlus = document.getElementById("daysPlus");

const continueButton = document.getElementById("continueButton");


// UPDATE EVERYTHING ON SCREEN

function updateScreen() {

  peopleCount.textContent = people;
  daysCount.textContent = days;

  summaryMeals.textContent =
    `${days} ${days === 1 ? "meal" : "meals"}`;

  summaryPeople.textContent =
    `${people} ${people === 1 ? "person" : "people"}`;

}


// PEOPLE BUTTONS

peopleMinus.addEventListener("click", function () {

  if (people > 1) {
    people--;
    updateScreen();
  }

});


peoplePlus.addEventListener("click", function () {

  if (people < 12) {
    people++;
    updateScreen();
  }

});


// DAYS BUTTONS

daysMinus.addEventListener("click", function () {

  if (days > 1) {
    days--;
    updateScreen();
  }

});


daysPlus.addEventListener("click", function () {

  if (days < 14) {
    days++;
    updateScreen();
  }

});


// CONTINUE BUTTON

continueButton.addEventListener("click", function () {

  const plan = {
    people: people,
    days: days
  };

  // Save the choices for the next page
  localStorage.setItem(
    "swipeAndDinePlan",
    JSON.stringify(plan)
  );

  // Temporary message until we build page 2
  alert(
    `Perfect! We'll find ${days} ${
      days === 1 ? "meal" : "meals"
    } for ${people} ${
      people === 1 ? "person" : "people"
    }.`
  );

});


// LOAD PAGE

updateScreen();
