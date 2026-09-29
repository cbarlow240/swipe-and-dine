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
  estimatedServingWeight: 350,

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
  calories: {
    value: 650,
    unit: "kcal"
  },

  fat: {
    value: 24,
    unit: "g",
    per100g: 6.86,
    status: "high"
  },

  saturates: {
    value: 9,
    unit: "g",
    per100g: 2.57,
    status: "high"
  },

  sugars: {
    value: 3,
    unit: "g",
    per100g: 0.86,
    status: "low"
  },

  salt: {
    value: 1.8,
    unit: "g",
    per100g: 0.51,
    status: "medium"
  },

  protein: 31,
  carbs: 76,
  fibre: 4
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
},
  {
  id: "italian-chicken-parmigiana",

  name: "Chicken Parmigiana",

  cuisine: "Italian",

  tags: [
    "Family Friendly",
    "Comfort Food"
  ],

  description:
    "Crispy breaded chicken topped with rich tomato sauce, melted mozzarella and Parmesan.",

  servings: 4,

  estimatedServingWeight: 400,

  prepTime: 20,
  cookTime: 30,
  totalTime: 50,

  difficulty: "Medium",

  cost: "££",

  ingredients: [
    {
      id: "chicken_breast",
      name: "Chicken breasts",
      quantity: 4,
      unit: "whole",
      category: "Meat",
      optional: false
    },

    {
      id: "plain_flour",
      name: "Plain flour",
      quantity: 50,
      unit: "g",
      category: "Baking",
      optional: false
    },

    {
      id: "eggs",
      name: "Large eggs",
      quantity: 2,
      unit: "whole",
      category: "Dairy & Eggs",
      optional: false
    },

    {
      id: "breadcrumbs",
      name: "Breadcrumbs",
      quantity: 120,
      unit: "g",
      category: "Bakery",
      optional: false
    },

    {
      id: "parmesan",
      name: "Parmesan",
      quantity: 60,
      unit: "g",
      category: "Dairy & Eggs",
      optional: false
    },

    {
      id: "passata",
      name: "Passata",
      quantity: 400,
      unit: "g",
      category: "Tins, Jars & Sauces",
      optional: false
    },

    {
      id: "mozzarella",
      name: "Mozzarella",
      quantity: 125,
      unit: "g",
      category: "Dairy & Eggs",
      optional: false
    },

    {
      id: "garlic",
      name: "Garlic cloves",
      quantity: 2,
      unit: "whole",
      category: "Fruit & Vegetables",
      optional: false
    },

    {
      id: "olive_oil",
      name: "Olive oil",
      quantity: 2,
      unit: "tbsp",
      category: "Oils & Condiments",
      optional: false
    },

    {
      id: "dried_oregano",
      name: "Dried oregano",
      quantity: 1,
      unit: "tsp",
      category: "Herbs & Spices",
      optional: false
    }
  ],

  instructions: [
    "Heat the oven to 200°C fan.",
    "Place the chicken breasts between sheets of baking paper and gently flatten them to an even thickness.",
    "Put the flour, beaten eggs and breadcrumbs into three separate shallow dishes.",
    "Mix half of the grated Parmesan into the breadcrumbs.",
    "Coat each chicken breast first in flour, then egg, then the Parmesan breadcrumbs.",
    "Heat the olive oil in a large frying pan and cook the chicken for 3 to 4 minutes on each side until golden.",
    "Add the garlic to a small saucepan and cook briefly, then add the passata and oregano and simmer for 10 minutes.",
    "Place the chicken in an ovenproof dish and spoon the tomato sauce over each piece.",
    "Top with mozzarella and the remaining Parmesan.",
    "Bake for 15 to 20 minutes until the chicken is cooked through and the cheese is bubbling and golden."
  ],

  nutrition: {
    calories: {
      value: 610,
      unit: "kcal"
    },

    fat: {
      value: 25,
      unit: "g",
      per100g: 6.25,
      status: "high"
    },

    saturates: {
      value: 9,
      unit: "g",
      per100g: 2.25,
      status: "high"
    },

    sugars: {
      value: 7,
      unit: "g",
      per100g: 1.75,
      status: "low"
    },

    salt: {
      value: 1.6,
      unit: "g",
      per100g: 0.4,
      status: "medium"
    },

    protein: 61,
    carbs: 35,
    fibre: 3
  },

  allergens: [
    "Gluten",
    "Egg",
    "Milk"
  ],

  dietary: [],

  equipment: [
    "Large frying pan",
    "Small saucepan",
    "Ovenproof dish",
    "Three shallow dishes",
    "Baking paper"
  ],

  image: "images/meals/italian-chicken-parmigiana.webp"
}
];
