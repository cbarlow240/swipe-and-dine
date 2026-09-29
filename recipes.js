// ========================================
// SWIPE & DINE - RECIPE CATALOGUE
// ========================================

const recipes = [
{
  id: "italian-spaghetti-carbonara",

  name: "Spaghetti Carbonara",

  cuisine: "Italian",

  tags: [
    "Comfort Food",
    "Family Friendly"
  ],

  description:
    "Classic Italian spaghetti tossed with crispy pancetta, egg, Pecorino and black pepper for a rich, silky sauce.",

  servings: 4,

  prepTime: 10,
  cookTime: 20,
  totalTime: 30,

  difficulty: "Easy",

  cost: "££",

  ingredients: [
    {
      id: "spaghetti",
      name: "Spaghetti",
      quantity: 400,
      unit: "g",
      category: "Pasta & Rice",
      optional: false
    },

    {
      id: "pancetta",
      name: "Pancetta",
      quantity: 150,
      unit: "g",
      category: "Meat",
      optional: false
    },

    {
      id: "eggs",
      name: "Large eggs",
      quantity: 4,
      unit: "whole",
      category: "Dairy & Eggs",
      optional: false
    },

    {
      id: "pecorino_romano",
      name: "Pecorino Romano",
      quantity: 80,
      unit: "g",
      category: "Dairy & Eggs",
      optional: false
    },

    {
      id: "black_pepper",
      name: "Black pepper",
      quantity: 2,
      unit: "tsp",
      category: "Herbs & Spices",
      optional: false
    }
  ],

  instructions: [
    "Bring a large saucepan of salted water to the boil and cook the spaghetti until al dente.",
    "Meanwhile, fry the pancetta in a large frying pan until golden and crisp.",
    "Whisk the eggs with the finely grated Pecorino and black pepper.",
    "Reserve some pasta water, then drain the spaghetti.",
    "Remove the pancetta pan from the heat and add the hot spaghetti.",
    "Pour in the egg mixture and toss quickly, adding a little pasta water until the sauce is glossy and creamy.",
    "Serve immediately with extra Pecorino and black pepper."
  ],

  nutrition: {
    calories: 650,
    protein: 31,
    carbs: 76,
    fat: 24,
    saturatedFat: 9,
    fibre: 4,
    sugar: 3,
    salt: 1.8
  },

  allergens: [
    "Gluten",
    "Egg",
    "Milk"
  ],

  dietary: [],

  equipment: [
    "Large saucepan",
    "Large frying pan",
    "Mixing bowl",
    "Cheese grater"
  ],

  image: "images/meals/italian-spaghetti-carbonara.webp"
}
];
