// ========================================
// SWIPE & DINE - RECIPE CATALOGUE
// ========================================

const recipes = [
  {
    id: "italian-spaghetti-carbonara",
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    tags: ["Comfort Food", "Family Friendly"],
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
      { id: "spaghetti", name: "Spaghetti", quantity: 400, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "pancetta", name: "Pancetta", quantity: 150, unit: "g", category: "Meat", optional: false },
      { id: "eggs", name: "Large eggs", quantity: 4, unit: "whole", category: "Dairy & Eggs", optional: false },
      { id: "pecorino_romano", name: "Pecorino Romano", quantity: 80, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "black_pepper", name: "Black pepper", quantity: 2, unit: "tsp", category: "Herbs & Spices", optional: false }
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
      calories: { value: 650, unit: "kcal" },
      fat: { value: 24, unit: "g", per100g: 6.86, status: "high" },
      saturates: { value: 9, unit: "g", per100g: 2.57, status: "high" },
      sugars: { value: 3, unit: "g", per100g: 0.86, status: "low" },
      salt: { value: 1.8, unit: "g", per100g: 0.51, status: "medium" },
      protein: 31,
      carbs: 76,
      fibre: 4
    },
    allergens: ["Gluten", "Egg", "Milk"],
    dietary: [],
    equipment: ["Large saucepan", "Large frying pan", "Mixing bowl", "Cheese grater"],
    image: "images/meals/italian-spaghetti-carbonara.webp"
  },

  {
    id: "italian-chicken-parmigiana",
    name: "Chicken Parmigiana",
    cuisine: "Italian",
    tags: ["Family Friendly", "Comfort Food"],
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
      { id: "chicken_breast", name: "Chicken breasts", quantity: 4, unit: "whole", category: "Meat", optional: false },
      { id: "plain_flour", name: "Plain flour", quantity: 50, unit: "g", category: "Baking", optional: false },
      { id: "eggs", name: "Large eggs", quantity: 2, unit: "whole", category: "Dairy & Eggs", optional: false },
      { id: "breadcrumbs", name: "Breadcrumbs", quantity: 120, unit: "g", category: "Bakery", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 60, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "passata", name: "Passata", quantity: 400, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "mozzarella", name: "Mozzarella", quantity: 125, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 2, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 2, unit: "tbsp", category: "Oils & Condiments", optional: false },
      { id: "dried_oregano", name: "Dried oregano", quantity: 1, unit: "tsp", category: "Herbs & Spices", optional: false }
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
      calories: { value: 610, unit: "kcal" },
      fat: { value: 25, unit: "g", per100g: 6.25, status: "high" },
      saturates: { value: 9, unit: "g", per100g: 2.25, status: "high" },
      sugars: { value: 7, unit: "g", per100g: 1.75, status: "low" },
      salt: { value: 1.6, unit: "g", per100g: 0.4, status: "medium" },
      protein: 61,
      carbs: 35,
      fibre: 3
    },
    allergens: ["Gluten", "Egg", "Milk"],
    dietary: [],
    equipment: ["Large frying pan", "Small saucepan", "Ovenproof dish", "Three shallow dishes", "Baking paper"],
    image: "images/meals/italian-chicken-parmigiana.webp"
  },

  {
    id: "italian-lasagne-bolognese",
    name: "Lasagne Bolognese",
    cuisine: "Italian",
    tags: ["Comfort Food", "Family Friendly"],
    description:
      "Layers of pasta, rich beef and tomato ragù, creamy béchamel and bubbling golden cheese.",
    servings: 4,
    estimatedServingWeight: 450,
    prepTime: 25,
    cookTime: 60,
    totalTime: 85,
    difficulty: "Medium",
    cost: "££",
    ingredients: [
      { id: "beef_mince", name: "Beef mince", quantity: 500, unit: "g", category: "Meat", optional: false },
      { id: "lasagne_sheets", name: "Lasagne sheets", quantity: 250, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "chopped_tomatoes", name: "Chopped tomatoes", quantity: 400, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "onion", name: "Onion", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "carrot", name: "Carrot", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 2, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "tomato_puree", name: "Tomato purée", quantity: 2, unit: "tbsp", category: "Tins, Jars & Sauces", optional: false },
      { id: "bechamel_sauce", name: "Béchamel sauce", quantity: 500, unit: "ml", category: "Tins, Jars & Sauces", optional: false },
      { id: "mozzarella", name: "Mozzarella", quantity: 125, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 50, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 1, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Heat the olive oil in a large pan and soften the finely chopped onion and carrot for 5 minutes.",
      "Add the garlic and beef mince and cook until the beef is well browned.",
      "Stir in the tomato purée and chopped tomatoes and simmer for 25 minutes until thick and rich.",
      "Heat the oven to 190°C fan.",
      "Spoon a layer of beef ragù into an ovenproof dish, cover with lasagne sheets and then a layer of béchamel.",
      "Repeat the layers until the ingredients are used, finishing with béchamel.",
      "Top with torn mozzarella and grated Parmesan.",
      "Bake for 30 to 35 minutes until bubbling and golden, then rest for 10 minutes before serving."
    ],
    nutrition: {
      calories: { value: 720, unit: "kcal" },
      fat: { value: 32, unit: "g", per100g: 7.11, status: "high" },
      saturates: { value: 15, unit: "g", per100g: 3.33, status: "high" },
      sugars: { value: 11, unit: "g", per100g: 2.44, status: "low" },
      salt: { value: 1.8, unit: "g", per100g: 0.4, status: "medium" },
      protein: 45,
      carbs: 62,
      fibre: 6
    },
    allergens: ["Gluten", "Milk"],
    dietary: [],
    equipment: ["Large frying pan", "Ovenproof dish", "Wooden spoon", "Cheese grater"],
    image: "images/meals/italian-lasagne-bolognese.webp"
  },

  {
    id: "italian-margherita-pizza",
    name: "Margherita Pizza",
    cuisine: "Italian",
    tags: ["Vegetarian", "Family Friendly"],
    description:
      "Classic thin-crust pizza topped simply with tomato, mozzarella and fresh basil.",
    servings: 4,
    estimatedServingWeight: 300,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    difficulty: "Medium",
    cost: "£",
    ingredients: [
      { id: "pizza_dough", name: "Pizza dough", quantity: 500, unit: "g", category: "Bakery", optional: false },
      { id: "passata", name: "Passata", quantity: 200, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "mozzarella", name: "Mozzarella", quantity: 250, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "fresh_basil", name: "Fresh basil", quantity: 15, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 1, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Heat the oven as hot as it will go, ideally 240°C fan, with a baking tray or pizza stone inside.",
      "Divide the dough and stretch it into thin pizza bases.",
      "Spread each base lightly with passata, leaving a border around the edge.",
      "Tear over the mozzarella and drizzle lightly with olive oil.",
      "Bake until the crust is puffed and lightly charred and the mozzarella is bubbling.",
      "Scatter with fresh basil immediately before serving."
    ],
    nutrition: {
      calories: { value: 560, unit: "kcal" },
      fat: { value: 20, unit: "g", per100g: 6.67, status: "high" },
      saturates: { value: 10, unit: "g", per100g: 3.33, status: "high" },
      sugars: { value: 5, unit: "g", per100g: 1.67, status: "low" },
      salt: { value: 1.5, unit: "g", per100g: 0.5, status: "medium" },
      protein: 24,
      carbs: 70,
      fibre: 4
    },
    allergens: ["Gluten", "Milk"],
    dietary: ["Vegetarian"],
    equipment: ["Baking tray or pizza stone", "Rolling pin", "Mixing bowl"],
    image: "images/meals/italian-margherita-pizza.webp"
  },

  {
    id: "italian-spaghetti-bolognese",
    name: "Spaghetti Bolognese",
    cuisine: "Italian",
    tags: ["Family Friendly", "Comfort Food"],
    description:
      "Spaghetti served with a rich slow-simmered beef, tomato, onion and carrot Bolognese sauce.",
    servings: 4,
    estimatedServingWeight: 400,
    prepTime: 15,
    cookTime: 40,
    totalTime: 55,
    difficulty: "Easy",
    cost: "££",
    ingredients: [
      { id: "spaghetti", name: "Spaghetti", quantity: 400, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "beef_mince", name: "Beef mince", quantity: 500, unit: "g", category: "Meat", optional: false },
      { id: "chopped_tomatoes", name: "Chopped tomatoes", quantity: 400, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "onion", name: "Onion", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "carrot", name: "Carrot", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 2, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "tomato_puree", name: "Tomato purée", quantity: 2, unit: "tbsp", category: "Tins, Jars & Sauces", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 50, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 1, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Heat the olive oil in a large frying pan and soften the finely chopped onion and carrot.",
      "Add the garlic and beef mince and fry until thoroughly browned.",
      "Stir in the tomato purée and chopped tomatoes.",
      "Simmer gently for 30 minutes until the sauce is rich and thick.",
      "Cook the spaghetti in salted boiling water until al dente.",
      "Drain the spaghetti and divide between plates.",
      "Spoon over the Bolognese sauce and finish with grated Parmesan."
    ],
    nutrition: {
      calories: { value: 690, unit: "kcal" },
      fat: { value: 22, unit: "g", per100g: 5.5, status: "medium" },
      saturates: { value: 8, unit: "g", per100g: 2, status: "high" },
      sugars: { value: 10, unit: "g", per100g: 2.5, status: "low" },
      salt: { value: 1.2, unit: "g", per100g: 0.3, status: "medium" },
      protein: 42,
      carbs: 80,
      fibre: 7
    },
    allergens: ["Gluten", "Milk"],
    dietary: [],
    equipment: ["Large frying pan", "Large saucepan", "Wooden spoon", "Cheese grater"],
    image: "images/meals/italian-spaghetti-bolognese.webp"
  },

  {
    id: "italian-creamy-tuscan-chicken",
    name: "Creamy Tuscan Chicken",
    cuisine: "Italian",
    tags: ["Comfort Food", "High Protein"],
    description:
      "Golden chicken breasts in a creamy Parmesan sauce with sun-dried tomatoes and wilted spinach.",
    servings: 4,
    estimatedServingWeight: 350,
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    difficulty: "Easy",
    cost: "££",
    ingredients: [
      { id: "chicken_breast", name: "Chicken breasts", quantity: 4, unit: "whole", category: "Meat", optional: false },
      { id: "double_cream", name: "Double cream", quantity: 250, unit: "ml", category: "Dairy & Eggs", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 60, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "sun_dried_tomatoes", name: "Sun-dried tomatoes", quantity: 100, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "spinach", name: "Baby spinach", quantity: 120, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 3, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "chicken_stock", name: "Chicken stock", quantity: 150, unit: "ml", category: "Tins, Jars & Sauces", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 1, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Heat the olive oil in a large frying pan and season the chicken breasts.",
      "Cook the chicken until golden on both sides and cooked through, then set aside.",
      "Add the garlic to the same pan and cook for 30 seconds.",
      "Pour in the chicken stock and cream, then stir in the Parmesan.",
      "Add the sun-dried tomatoes and simmer gently until the sauce begins to thicken.",
      "Stir in the spinach until just wilted.",
      "Return the chicken to the pan and spoon the creamy sauce over it before serving."
    ],
    nutrition: {
      calories: { value: 620, unit: "kcal" },
      fat: { value: 40, unit: "g", per100g: 11.43, status: "high" },
      saturates: { value: 20, unit: "g", per100g: 5.71, status: "high" },
      sugars: { value: 6, unit: "g", per100g: 1.71, status: "low" },
      salt: { value: 1.5, unit: "g", per100g: 0.43, status: "medium" },
      protein: 55,
      carbs: 10,
      fibre: 3
    },
    allergens: ["Milk"],
    dietary: [],
    equipment: ["Large frying pan", "Tongs", "Cheese grater"],
    image: "images/meals/italian-creamy-tuscan-chicken.webp"
  },

  {
    id: "italian-penne-arrabbiata",
    name: "Penne Arrabbiata",
    cuisine: "Italian",
    tags: ["Vegetarian", "Spicy", "Quick"],
    description:
      "Penne tossed through a punchy tomato sauce with garlic, chilli and fresh parsley.",
    servings: 4,
    estimatedServingWeight: 350,
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    difficulty: "Easy",
    cost: "£",
    ingredients: [
      { id: "penne", name: "Penne", quantity: 400, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "chopped_tomatoes", name: "Chopped tomatoes", quantity: 800, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 3, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "chilli_flakes", name: "Chilli flakes", quantity: 1, unit: "tsp", category: "Herbs & Spices", optional: false },
      { id: "fresh_parsley", name: "Fresh parsley", quantity: 15, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 2, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Cook the penne in a large saucepan of salted boiling water until al dente.",
      "Meanwhile, heat the olive oil in a frying pan and gently cook the sliced garlic.",
      "Add the chilli flakes and chopped tomatoes.",
      "Simmer for 15 minutes until the tomato sauce has reduced and thickened.",
      "Drain the pasta, reserving a splash of pasta water.",
      "Toss the penne through the sauce, loosening with pasta water if needed.",
      "Finish with chopped fresh parsley and serve."
    ],
    nutrition: {
      calories: { value: 510, unit: "kcal" },
      fat: { value: 10, unit: "g", per100g: 2.86, status: "medium" },
      saturates: { value: 1.5, unit: "g", per100g: 0.43, status: "low" },
      sugars: { value: 10, unit: "g", per100g: 2.86, status: "low" },
      salt: { value: 0.8, unit: "g", per100g: 0.23, status: "medium" },
      protein: 16,
      carbs: 87,
      fibre: 8
    },
    allergens: ["Gluten"],
    dietary: ["Vegetarian", "Vegan"],
    equipment: ["Large saucepan", "Large frying pan", "Colander"],
    image: "images/meals/italian-penne-arrabbiata.webp"
  },

  {
    id: "italian-chicken-alfredo",
    name: "Chicken Alfredo",
    cuisine: "Italian",
    tags: ["Comfort Food", "Family Friendly"],
    description:
      "Tender golden chicken and pasta coated in a smooth, creamy Parmesan sauce with black pepper.",
    servings: 4,
    estimatedServingWeight: 400,
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    difficulty: "Easy",
    cost: "££",
    ingredients: [
      { id: "fettuccine", name: "Fettuccine", quantity: 400, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "chicken_breast", name: "Chicken breasts", quantity: 3, unit: "whole", category: "Meat", optional: false },
      { id: "double_cream", name: "Double cream", quantity: 300, unit: "ml", category: "Dairy & Eggs", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 100, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "butter", name: "Butter", quantity: 30, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 2, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "black_pepper", name: "Black pepper", quantity: 1, unit: "tsp", category: "Herbs & Spices", optional: false }
    ],
    instructions: [
      "Cook the fettuccine in salted boiling water until al dente.",
      "Slice the chicken and season with black pepper.",
      "Melt half the butter in a large frying pan and cook the chicken until golden and cooked through.",
      "Remove the chicken, then add the remaining butter and garlic to the pan.",
      "Pour in the cream and gently simmer for 2 to 3 minutes.",
      "Stir in the Parmesan until the sauce is smooth.",
      "Add the drained pasta and chicken and toss until thoroughly coated.",
      "Finish with extra black pepper before serving."
    ],
    nutrition: {
      calories: { value: 830, unit: "kcal" },
      fat: { value: 44, unit: "g", per100g: 11, status: "high" },
      saturates: { value: 25, unit: "g", per100g: 6.25, status: "high" },
      sugars: { value: 4, unit: "g", per100g: 1, status: "low" },
      salt: { value: 1.4, unit: "g", per100g: 0.35, status: "medium" },
      protein: 53,
      carbs: 65,
      fibre: 3
    },
    allergens: ["Gluten", "Milk"],
    dietary: [],
    equipment: ["Large saucepan", "Large frying pan", "Colander", "Cheese grater"],
    image: "images/meals/italian-chicken-alfredo.webp"
  },

  {
    id: "italian-mushroom-risotto",
    name: "Mushroom Risotto",
    cuisine: "Italian",
    tags: ["Vegetarian", "Comfort Food"],
    description:
      "Creamy Arborio rice cooked slowly with golden mushrooms and finished with Parmesan and parsley.",
    servings: 4,
    estimatedServingWeight: 350,
    prepTime: 10,
    cookTime: 35,
    totalTime: 45,
    difficulty: "Medium",
    cost: "£",
    ingredients: [
      { id: "arborio_rice", name: "Arborio rice", quantity: 320, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "mushrooms", name: "Chestnut mushrooms", quantity: 400, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "onion", name: "Onion", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 2, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "vegetable_stock", name: "Vegetable stock", quantity: 1, unit: "litre", category: "Tins, Jars & Sauces", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 80, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "butter", name: "Butter", quantity: 30, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "fresh_parsley", name: "Fresh parsley", quantity: 15, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 1, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Keep the vegetable stock hot in a saucepan over a low heat.",
      "Heat the olive oil in a large pan and fry the sliced mushrooms until golden, then set half aside.",
      "Add the onion to the pan and cook until soft, then stir in the garlic.",
      "Add the Arborio rice and stir for 1 minute.",
      "Add the hot stock one ladle at a time, stirring regularly and allowing each addition to absorb before adding more.",
      "After about 20 minutes, stir in the mushrooms and continue cooking until the rice is creamy but still has a slight bite.",
      "Remove from the heat and stir in the butter, Parmesan and parsley.",
      "Top with the reserved golden mushrooms and serve."
    ],
    nutrition: {
      calories: { value: 570, unit: "kcal" },
      fat: { value: 20, unit: "g", per100g: 5.71, status: "medium" },
      saturates: { value: 10, unit: "g", per100g: 2.86, status: "high" },
      sugars: { value: 5, unit: "g", per100g: 1.43, status: "low" },
      salt: { value: 1.5, unit: "g", per100g: 0.43, status: "medium" },
      protein: 17,
      carbs: 76,
      fibre: 5
    },
    allergens: ["Milk"],
    dietary: ["Vegetarian"],
    equipment: ["Large saucepan", "Large frying pan or sauté pan", "Ladle", "Cheese grater"],
    image: "images/meals/italian-mushroom-risotto.webp"
  },

  {
    id: "italian-meatballs-spaghetti",
    name: "Italian Meatballs & Spaghetti",
    cuisine: "Italian",
    tags: ["Family Friendly", "Comfort Food"],
    description:
      "Juicy beef meatballs simmered in tomato sauce and served over spaghetti with Parmesan.",
    servings: 4,
    estimatedServingWeight: 450,
    prepTime: 20,
    cookTime: 35,
    totalTime: 55,
    difficulty: "Medium",
    cost: "££",
    ingredients: [
      { id: "spaghetti", name: "Spaghetti", quantity: 400, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "beef_mince", name: "Beef mince", quantity: 500, unit: "g", category: "Meat", optional: false },
      { id: "breadcrumbs", name: "Breadcrumbs", quantity: 60, unit: "g", category: "Bakery", optional: false },
      { id: "eggs", name: "Large egg", quantity: 1, unit: "whole", category: "Dairy & Eggs", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 70, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "passata", name: "Passata", quantity: 700, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 3, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "fresh_basil", name: "Fresh basil", quantity: 15, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 1, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Mix the beef mince with the breadcrumbs, egg and half of the Parmesan.",
      "Shape the mixture into evenly sized meatballs.",
      "Heat the olive oil in a large frying pan and brown the meatballs on all sides.",
      "Add the garlic and cook briefly, then pour in the passata.",
      "Simmer gently for 20 minutes until the meatballs are cooked through and the sauce has thickened.",
      "Meanwhile, cook the spaghetti in salted boiling water until al dente.",
      "Drain the spaghetti and serve with the meatballs and tomato sauce.",
      "Finish with the remaining Parmesan and a little fresh basil."
    ],
    nutrition: {
      calories: { value: 790, unit: "kcal" },
      fat: { value: 27, unit: "g", per100g: 6, status: "high" },
      saturates: { value: 10, unit: "g", per100g: 2.22, status: "high" },
      sugars: { value: 10, unit: "g", per100g: 2.22, status: "low" },
      salt: { value: 1.4, unit: "g", per100g: 0.31, status: "medium" },
      protein: 46,
      carbs: 88,
      fibre: 7
    },
    allergens: ["Gluten", "Egg", "Milk"],
    dietary: [],
    equipment: ["Mixing bowl", "Large frying pan", "Large saucepan", "Colander"],
    image: "images/meals/italian-meatballs-spaghetti.webp"
  },

  {
    id: "italian-pesto-chicken-pasta",
    name: "Pesto Chicken Pasta",
    cuisine: "Italian",
    tags: ["Quick", "Family Friendly"],
    description:
      "Pasta tossed with juicy golden chicken, fragrant basil pesto, Parmesan and toasted pine nuts.",
    servings: 4,
    estimatedServingWeight: 350,
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    difficulty: "Easy",
    cost: "££",
    ingredients: [
      { id: "penne", name: "Penne", quantity: 400, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "chicken_breast", name: "Chicken breasts", quantity: 3, unit: "whole", category: "Meat", optional: false },
      { id: "basil_pesto", name: "Basil pesto", quantity: 150, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 60, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "pine_nuts", name: "Pine nuts", quantity: 30, unit: "g", category: "Baking", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 1, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Cook the penne in salted boiling water until al dente.",
      "Slice the chicken into bite-sized pieces.",
      "Heat the olive oil in a frying pan and cook the chicken until golden and cooked through.",
      "Toast the pine nuts lightly in a dry pan.",
      "Drain the pasta, reserving a small cup of pasta water.",
      "Toss the pasta and chicken with the pesto, adding a splash of pasta water to loosen the sauce.",
      "Finish with grated Parmesan and toasted pine nuts."
    ],
    nutrition: {
      calories: { value: 760, unit: "kcal" },
      fat: { value: 31, unit: "g", per100g: 8.86, status: "high" },
      saturates: { value: 7, unit: "g", per100g: 2, status: "high" },
      sugars: { value: 4, unit: "g", per100g: 1.14, status: "low" },
      salt: { value: 1.5, unit: "g", per100g: 0.43, status: "medium" },
      protein: 50,
      carbs: 68,
      fibre: 4
    },
    allergens: ["Gluten", "Milk", "Nuts"],
    dietary: [],
    equipment: ["Large saucepan", "Large frying pan", "Small frying pan", "Colander"],
    image: "images/meals/italian-pesto-chicken-pasta.webp"
  },

  {
    id: "italian-sausage-tomato-rigatoni",
    name: "Sausage & Tomato Rigatoni",
    cuisine: "Italian",
    tags: ["Comfort Food", "Family Friendly"],
    description:
      "Rigatoni coated in a rich tomato sauce with browned Italian-style sausage, Parmesan and herbs.",
    servings: 4,
    estimatedServingWeight: 400,
    prepTime: 10,
    cookTime: 30,
    totalTime: 40,
    difficulty: "Easy",
    cost: "££",
    ingredients: [
      { id: "rigatoni", name: "Rigatoni", quantity: 400, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "pork_sausages", name: "Pork sausages", quantity: 500, unit: "g", category: "Meat", optional: false },
      { id: "passata", name: "Passata", quantity: 500, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "onion", name: "Onion", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 2, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 60, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "fresh_basil", name: "Fresh basil", quantity: 15, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 1, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Remove the sausage meat from the skins and break it into rough pieces.",
      "Heat the olive oil in a large frying pan and brown the sausage pieces.",
      "Add the chopped onion and cook until softened, then add the garlic.",
      "Pour in the passata and simmer for 20 minutes.",
      "Meanwhile, cook the rigatoni in salted boiling water until al dente.",
      "Drain the pasta and toss it through the sausage and tomato sauce.",
      "Finish with grated Parmesan and torn fresh basil."
    ],
    nutrition: {
      calories: { value: 780, unit: "kcal" },
      fat: { value: 31, unit: "g", per100g: 7.75, status: "high" },
      saturates: { value: 11, unit: "g", per100g: 2.75, status: "high" },
      sugars: { value: 9, unit: "g", per100g: 2.25, status: "low" },
      salt: { value: 2, unit: "g", per100g: 0.5, status: "medium" },
      protein: 37,
      carbs: 82,
      fibre: 7
    },
    allergens: ["Gluten", "Milk"],
    dietary: [],
    equipment: ["Large frying pan", "Large saucepan", "Colander", "Cheese grater"],
    image: "images/meals/italian-sausage-tomato-rigatoni.webp"
  },

  {
    id: "italian-garlic-prawn-linguine",
    name: "Garlic Prawn Linguine",
    cuisine: "Italian",
    tags: ["Seafood", "Quick"],
    description:
      "Linguine with juicy king prawns, garlic, chilli, parsley, olive oil and a fresh squeeze of lemon.",
    servings: 4,
    estimatedServingWeight: 350,
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    difficulty: "Easy",
    cost: "££",
    ingredients: [
      { id: "linguine", name: "Linguine", quantity: 400, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "king_prawns", name: "Raw king prawns", quantity: 400, unit: "g", category: "Fish & Seafood", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 4, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "chilli_flakes", name: "Chilli flakes", quantity: 1, unit: "tsp", category: "Herbs & Spices", optional: false },
      { id: "fresh_parsley", name: "Fresh parsley", quantity: 20, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "lemon", name: "Lemon", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 3, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Cook the linguine in salted boiling water until al dente.",
      "Heat the olive oil in a large frying pan over a medium heat.",
      "Add the sliced garlic and chilli flakes and cook gently without allowing the garlic to burn.",
      "Add the king prawns and cook until pink and opaque.",
      "Drain the linguine, reserving a little pasta water.",
      "Add the pasta to the prawns and toss thoroughly, adding a splash of pasta water if needed.",
      "Finish with chopped parsley, lemon zest and a squeeze of lemon juice."
    ],
    nutrition: {
      calories: { value: 600, unit: "kcal" },
      fat: { value: 16, unit: "g", per100g: 4.57, status: "medium" },
      saturates: { value: 2.5, unit: "g", per100g: 0.71, status: "low" },
      sugars: { value: 3, unit: "g", per100g: 0.86, status: "low" },
      salt: { value: 1.4, unit: "g", per100g: 0.4, status: "medium" },
      protein: 36,
      carbs: 75,
      fibre: 4
    },
    allergens: ["Gluten", "Crustaceans"],
    dietary: [],
    equipment: ["Large saucepan", "Large frying pan", "Colander", "Fine grater"],
    image: "images/meals/italian-garlic-prawn-linguine.webp"
  },

  {
    id: "italian-four-cheese-gnocchi",
    name: "Four Cheese Gnocchi",
    cuisine: "Italian",
    tags: ["Vegetarian", "Comfort Food"],
    description:
      "Soft potato gnocchi coated in a luxurious sauce of mozzarella, Parmesan, Gorgonzola and mascarpone.",
    servings: 4,
    estimatedServingWeight: 350,
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    difficulty: "Easy",
    cost: "££",
    ingredients: [
      { id: "gnocchi", name: "Potato gnocchi", quantity: 800, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "mozzarella", name: "Mozzarella", quantity: 125, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 60, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "gorgonzola", name: "Gorgonzola", quantity: 100, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "mascarpone", name: "Mascarpone", quantity: 150, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "milk", name: "Whole milk", quantity: 100, unit: "ml", category: "Dairy & Eggs", optional: false },
      { id: "black_pepper", name: "Black pepper", quantity: 1, unit: "tsp", category: "Herbs & Spices", optional: false }
    ],
    instructions: [
      "Heat the oven grill to high.",
      "Cook the gnocchi in salted boiling water according to the packet instructions, then drain.",
      "Warm the milk and mascarpone gently in a large ovenproof frying pan.",
      "Add the Gorgonzola, half the mozzarella and half the Parmesan and stir until smooth.",
      "Fold the cooked gnocchi through the cheese sauce and season with black pepper.",
      "Top with the remaining mozzarella and Parmesan.",
      "Grill for 5 to 7 minutes until bubbling and lightly golden."
    ],
    nutrition: {
      calories: { value: 790, unit: "kcal" },
      fat: { value: 39, unit: "g", per100g: 11.14, status: "high" },
      saturates: { value: 24, unit: "g", per100g: 6.86, status: "high" },
      sugars: { value: 6, unit: "g", per100g: 1.71, status: "low" },
      salt: { value: 2.2, unit: "g", per100g: 0.63, status: "medium" },
      protein: 29,
      carbs: 79,
      fibre: 5
    },
    allergens: ["Gluten", "Milk"],
    dietary: ["Vegetarian"],
    equipment: ["Large saucepan", "Ovenproof frying pan", "Colander", "Cheese grater"],
    image: "images/meals/italian-four-cheese-gnocchi.webp"
  },

  {
    id: "italian-chicken-milanese",
    name: "Chicken Milanese",
    cuisine: "Italian",
    tags: ["Family Friendly", "High Protein"],
    description:
      "Thin chicken escalopes coated in crisp golden breadcrumbs and served with a fresh rocket and tomato side salad.",
    servings: 4,
    estimatedServingWeight: 300,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    difficulty: "Medium",
    cost: "££",
    ingredients: [
      { id: "chicken_breast", name: "Chicken breasts", quantity: 4, unit: "whole", category: "Meat", optional: false },
      { id: "plain_flour", name: "Plain flour", quantity: 60, unit: "g", category: "Baking", optional: false },
      { id: "eggs", name: "Large eggs", quantity: 2, unit: "whole", category: "Dairy & Eggs", optional: false },
      { id: "breadcrumbs", name: "Breadcrumbs", quantity: 150, unit: "g", category: "Bakery", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 50, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "rocket", name: "Rocket", quantity: 80, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "cherry_tomatoes", name: "Cherry tomatoes", quantity: 200, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "lemon", name: "Lemon", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 3, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Place each chicken breast between sheets of baking paper and flatten into a thin escalope.",
      "Put the flour, beaten eggs and breadcrumbs into separate shallow dishes.",
      "Mix the Parmesan into the breadcrumbs.",
      "Coat each chicken piece in flour, then egg, then the Parmesan breadcrumbs.",
      "Heat the olive oil in a large frying pan.",
      "Cook the chicken for 3 to 4 minutes on each side until crisp, golden and cooked through.",
      "Toss the rocket and cherry tomatoes with a squeeze of lemon.",
      "Serve the Milanese with the salad and lemon wedges."
    ],
    nutrition: {
      calories: { value: 560, unit: "kcal" },
      fat: { value: 23, unit: "g", per100g: 7.67, status: "high" },
      saturates: { value: 6, unit: "g", per100g: 2, status: "high" },
      sugars: { value: 4, unit: "g", per100g: 1.33, status: "low" },
      salt: { value: 1.2, unit: "g", per100g: 0.4, status: "medium" },
      protein: 58,
      carbs: 30,
      fibre: 3
    },
    allergens: ["Gluten", "Egg", "Milk"],
    dietary: [],
    equipment: ["Large frying pan", "Three shallow dishes", "Baking paper", "Rolling pin"],
    image: "images/meals/italian-chicken-milanese.webp"
  },

  {
    id: "italian-beef-ragu-pappardelle",
    name: "Beef Ragu Pappardelle",
    cuisine: "Italian",
    tags: ["Comfort Food", "Slow Cooked"],
    description:
      "Wide ribbons of pappardelle coated in a rich slow-cooked beef and tomato ragù finished with Parmesan.",
    servings: 4,
    estimatedServingWeight: 450,
    prepTime: 20,
    cookTime: 120,
    totalTime: 140,
    difficulty: "Medium",
    cost: "££",
    ingredients: [
      { id: "pappardelle", name: "Pappardelle", quantity: 400, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "braising_beef", name: "Braising beef", quantity: 700, unit: "g", category: "Meat", optional: false },
      { id: "chopped_tomatoes", name: "Chopped tomatoes", quantity: 400, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "beef_stock", name: "Beef stock", quantity: 400, unit: "ml", category: "Tins, Jars & Sauces", optional: false },
      { id: "onion", name: "Onion", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "carrot", name: "Carrot", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "celery", name: "Celery sticks", quantity: 2, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 3, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "tomato_puree", name: "Tomato purée", quantity: 2, unit: "tbsp", category: "Tins, Jars & Sauces", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 60, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 1, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Cut the beef into large chunks and season well.",
      "Heat the olive oil in a heavy casserole and brown the beef in batches.",
      "Remove the beef, then soften the finely chopped onion, carrot and celery in the same pan.",
      "Add the garlic and tomato purée and cook for 1 minute.",
      "Return the beef and add the chopped tomatoes and beef stock.",
      "Cover and simmer very gently for about 2 hours until the beef is tender enough to shred.",
      "Shred the beef into the sauce and simmer uncovered until the ragù is rich and thick.",
      "Cook the pappardelle until al dente, then toss through the ragù.",
      "Serve with grated Parmesan."
    ],
    nutrition: {
      calories: { value: 790, unit: "kcal" },
      fat: { value: 25, unit: "g", per100g: 5.56, status: "medium" },
      saturates: { value: 9, unit: "g", per100g: 2, status: "high" },
      sugars: { value: 9, unit: "g", per100g: 2, status: "low" },
      salt: { value: 1.6, unit: "g", per100g: 0.36, status: "medium" },
      protein: 55,
      carbs: 78,
      fibre: 7
    },
    allergens: ["Gluten", "Milk", "Celery"],
    dietary: [],
    equipment: ["Large casserole dish", "Large saucepan", "Colander", "Two forks"],
    image: "images/meals/italian-beef-ragu-pappardelle.webp"
  },

  {
    id: "italian-spinach-ricotta-cannelloni",
    name: "Spinach & Ricotta Cannelloni",
    cuisine: "Italian",
    tags: ["Vegetarian", "Comfort Food"],
    description:
      "Cannelloni filled with creamy spinach and ricotta, baked in tomato and béchamel under golden cheese.",
    servings: 4,
    estimatedServingWeight: 450,
    prepTime: 25,
    cookTime: 40,
    totalTime: 65,
    difficulty: "Medium",
    cost: "££",
    ingredients: [
      { id: "cannelloni_tubes", name: "Cannelloni tubes", quantity: 250, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "ricotta", name: "Ricotta", quantity: 500, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "spinach", name: "Baby spinach", quantity: 300, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "passata", name: "Passata", quantity: 500, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "bechamel_sauce", name: "Béchamel sauce", quantity: 400, unit: "ml", category: "Tins, Jars & Sauces", optional: false },
      { id: "mozzarella", name: "Mozzarella", quantity: 125, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 50, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "garlic", name: "Garlic clove", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "nutmeg", name: "Ground nutmeg", quantity: 0.25, unit: "tsp", category: "Herbs & Spices", optional: false }
    ],
    instructions: [
      "Heat the oven to 190°C fan.",
      "Wilt the spinach in a large pan, then allow it to cool and squeeze out excess moisture.",
      "Chop the spinach and mix it with the ricotta, garlic, nutmeg and half the Parmesan.",
      "Fill the cannelloni tubes with the spinach and ricotta mixture.",
      "Spread half the passata over the base of an ovenproof dish and arrange the filled cannelloni on top.",
      "Cover with the remaining passata and then the béchamel sauce.",
      "Top with torn mozzarella and the remaining Parmesan.",
      "Bake for 35 to 40 minutes until the pasta is tender and the top is bubbling and golden."
    ],
    nutrition: {
      calories: { value: 650, unit: "kcal" },
      fat: { value: 29, unit: "g", per100g: 6.44, status: "high" },
      saturates: { value: 17, unit: "g", per100g: 3.78, status: "high" },
      sugars: { value: 11, unit: "g", per100g: 2.44, status: "low" },
      salt: { value: 1.7, unit: "g", per100g: 0.38, status: "medium" },
      protein: 33,
      carbs: 59,
      fibre: 7
    },
    allergens: ["Gluten", "Milk"],
    dietary: ["Vegetarian"],
    equipment: ["Large frying pan", "Mixing bowl", "Ovenproof dish", "Piping bag or teaspoon"],
    image: "images/meals/italian-spinach-ricotta-cannelloni.webp"
  },

  {
    id: "italian-pepperoni-pizza",
    name: "Pepperoni Pizza",
    cuisine: "Italian",
    tags: ["Family Friendly", "Comfort Food"],
    description:
      "Thin-crust pizza with rich tomato sauce, bubbling mozzarella and crisp-edged pepperoni.",
    servings: 4,
    estimatedServingWeight: 325,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    difficulty: "Medium",
    cost: "££",
    ingredients: [
      { id: "pizza_dough", name: "Pizza dough", quantity: 500, unit: "g", category: "Bakery", optional: false },
      { id: "passata", name: "Passata", quantity: 200, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "mozzarella", name: "Mozzarella", quantity: 250, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "pepperoni", name: "Pepperoni", quantity: 150, unit: "g", category: "Meat", optional: false },
      { id: "dried_oregano", name: "Dried oregano", quantity: 1, unit: "tsp", category: "Herbs & Spices", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 1, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Heat the oven as hot as it will go, ideally 240°C fan, with a baking tray or pizza stone inside.",
      "Divide and stretch the pizza dough into thin bases.",
      "Spread the bases with passata, leaving a border around the edge.",
      "Tear over the mozzarella and arrange the pepperoni evenly across the pizzas.",
      "Sprinkle with oregano and drizzle lightly with olive oil.",
      "Bake until the crust is puffed and lightly charred, the cheese is bubbling and the pepperoni edges are crisp."
    ],
    nutrition: {
      calories: { value: 680, unit: "kcal" },
      fat: { value: 30, unit: "g", per100g: 9.23, status: "high" },
      saturates: { value: 14, unit: "g", per100g: 4.31, status: "high" },
      sugars: { value: 5, unit: "g", per100g: 1.54, status: "low" },
      salt: { value: 2.4, unit: "g", per100g: 0.74, status: "medium" },
      protein: 31,
      carbs: 68,
      fibre: 4
    },
    allergens: ["Gluten", "Milk"],
    dietary: [],
    equipment: ["Baking tray or pizza stone", "Rolling pin", "Mixing bowl"],
    image: "images/meals/italian-pepperoni-pizza.webp"
  },

  {
    id: "italian-chicken-chorizo-risotto",
    name: "Chicken & Chorizo Risotto",
    cuisine: "Italian",
    tags: ["Comfort Food", "Family Friendly"],
    description:
      "Creamy Arborio rice with golden chicken, smoky chorizo and Parmesan in a rich paprika-tinted risotto.",
    servings: 4,
    estimatedServingWeight: 400,
    prepTime: 15,
    cookTime: 35,
    totalTime: 50,
    difficulty: "Medium",
    cost: "££",
    ingredients: [
      { id: "arborio_rice", name: "Arborio rice", quantity: 320, unit: "g", category: "Pasta & Rice", optional: false },
      { id: "chicken_breast", name: "Chicken breasts", quantity: 3, unit: "whole", category: "Meat", optional: false },
      { id: "chorizo", name: "Chorizo", quantity: 150, unit: "g", category: "Meat", optional: false },
      { id: "onion", name: "Onion", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "red_pepper", name: "Red pepper", quantity: 1, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 2, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "chicken_stock", name: "Chicken stock", quantity: 1, unit: "litre", category: "Tins, Jars & Sauces", optional: false },
      { id: "smoked_paprika", name: "Smoked paprika", quantity: 1, unit: "tsp", category: "Herbs & Spices", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 70, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "fresh_parsley", name: "Fresh parsley", quantity: 15, unit: "g", category: "Fruit & Vegetables", optional: false }
    ],
    instructions: [
      "Keep the chicken stock hot in a saucepan over a low heat.",
      "Slice the chicken into bite-sized pieces and dice the chorizo.",
      "Cook the chorizo in a large pan until it releases its oils, then add the chicken and cook until lightly golden.",
      "Remove the chicken and chorizo and set aside.",
      "Add the chopped onion and red pepper to the pan and cook until softened, then stir in the garlic and smoked paprika.",
      "Add the Arborio rice and stir for 1 minute until coated.",
      "Add the hot stock one ladle at a time, stirring regularly and allowing it to absorb before adding more.",
      "When the rice is nearly tender, return the chicken and chorizo to the pan.",
      "Cook until the chicken is fully cooked and the rice is creamy with a slight bite.",
      "Remove from the heat and stir in the Parmesan and chopped parsley before serving."
    ],
    nutrition: {
      calories: { value: 720, unit: "kcal" },
      fat: { value: 26, unit: "g", per100g: 6.5, status: "high" },
      saturates: { value: 9, unit: "g", per100g: 2.25, status: "high" },
      sugars: { value: 6, unit: "g", per100g: 1.5, status: "low" },
      salt: { value: 2.1, unit: "g", per100g: 0.53, status: "medium" },
      protein: 48,
      carbs: 70,
      fibre: 4
    },
    allergens: ["Milk"],
    dietary: [],
    equipment: ["Large frying pan or sauté pan", "Saucepan", "Ladle", "Cheese grater"],
    image: "images/meals/italian-chicken-chorizo-risotto.webp"
  },

  {
    id: "italian-aubergine-parmigiana",
    name: "Aubergine Parmigiana",
    cuisine: "Italian",
    tags: ["Vegetarian", "Comfort Food"],
    description:
      "Layers of tender aubergine, rich tomato sauce, mozzarella and Parmesan baked until bubbling and golden.",
    servings: 4,
    estimatedServingWeight: 400,
    prepTime: 20,
    cookTime: 50,
    totalTime: 70,
    difficulty: "Medium",
    cost: "££",
    ingredients: [
      { id: "aubergine", name: "Aubergines", quantity: 3, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "passata", name: "Passata", quantity: 700, unit: "g", category: "Tins, Jars & Sauces", optional: false },
      { id: "mozzarella", name: "Mozzarella", quantity: 250, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "parmesan", name: "Parmesan", quantity: 80, unit: "g", category: "Dairy & Eggs", optional: false },
      { id: "garlic", name: "Garlic cloves", quantity: 2, unit: "whole", category: "Fruit & Vegetables", optional: false },
      { id: "fresh_basil", name: "Fresh basil", quantity: 20, unit: "g", category: "Fruit & Vegetables", optional: false },
      { id: "olive_oil", name: "Olive oil", quantity: 3, unit: "tbsp", category: "Oils & Condiments", optional: false }
    ],
    instructions: [
      "Heat the oven to 200°C fan.",
      "Slice the aubergines lengthways into roughly 1cm slices.",
      "Brush the slices lightly with olive oil and roast on baking trays for about 20 minutes until tender and lightly browned.",
      "Meanwhile, gently cook the garlic in a little olive oil, add the passata and simmer for 15 minutes.",
      "Spread a thin layer of tomato sauce over the base of an ovenproof dish.",
      "Add a layer of aubergine, followed by tomato sauce, torn mozzarella, Parmesan and a few basil leaves.",
      "Repeat the layers until all the ingredients are used, finishing with mozzarella and Parmesan.",
      "Bake for 25 to 30 minutes until bubbling and deeply golden on top.",
      "Rest for 5 to 10 minutes before serving."
    ],
    nutrition: {
      calories: { value: 480, unit: "kcal" },
      fat: { value: 29, unit: "g", per100g: 7.25, status: "high" },
      saturates: { value: 13, unit: "g", per100g: 3.25, status: "high" },
      sugars: { value: 13, unit: "g", per100g: 3.25, status: "low" },
      salt: { value: 1.6, unit: "g", per100g: 0.4, status: "medium" },
      protein: 24,
      carbs: 25,
      fibre: 10
    },
    allergens: ["Milk"],
    dietary: ["Vegetarian"],
    equipment: ["Baking trays", "Small saucepan", "Ovenproof dish", "Pastry brush", "Cheese grater"],
    image: "images/meals/italian-aubergine-parmigiana.webp"
  }
];
