import { Recipe } from "../types";

export const mockRecipes = Object.freeze([
  {
    name: "Green Power Smoothie",
    ingredients: [
      {
        name: "spinach",
        quantity: "2 cups",
      },
      {
        name: "banana",
        quantity: "1",
      },
      {
        name: "kiwi",
        quantity: "1",
      },
      {
        name: "almond milk",
        quantity: "1 cup",
      },
      {
        name: "chia seeds",
        quantity: "1 tbsp",
      },
      {
        name: "honey",
        quantity: "1 tbsp",
      },
    ],
    instructions: [
      "In a blender, add the spinach, banana, kiwi, almond milk, chia seeds, and honey.",
      "Blend on high speed until smooth and creamy.",
      "Pour into a glass and enjoy immediately.",
    ],
    cooking_time_minutes: 5,
    complexity: "Easy",
    cuisines: ["International"],
    meal_time: ["Breakfast"],
    calories_estimate: 250,
    tags: ["healthy", "weight loss", "green smoothie"],
    image_caption_prompt:
      "Generate an image featuring a refreshing Green Power Smoothie made with vibrant spinach, ripe banana, tangy kiwi, and creamy almond milk. Include a sprinkle of chia seeds on top. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "dd86bf3d-7f09-4690-ba42-fbb5e405b894",
    image: require("../../assets/recipe-images/Green-Power-Smoothie-dd86bf3d-7f09-4690-ba42-fbb5e405b894.png"),
  },
  {
    name: "Classic Lasagna",
    ingredients: [
      {
        name: "lasagna noodles",
        quantity: "12",
      },
      {
        name: "ground beef",
        quantity: "1 lb",
      },
      {
        name: "onion",
        quantity: "1 large",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "canned tomatoes",
        quantity: "28 oz",
      },
      {
        name: "tomato paste",
        quantity: "6 oz",
      },
      {
        name: "water",
        quantity: "2 cups",
      },
      {
        name: "eggs",
        quantity: "2",
      },
      {
        name: "ricotta cheese",
        quantity: "2 cups",
      },
      {
        name: "mozzarella cheese",
        quantity: "2 cups",
      },
      {
        name: "Parmesan cheese",
        quantity: "1 cup",
      },
      {
        name: "dried basil",
        quantity: "1 tbsp",
      },
      {
        name: "dried oregano",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat the oven to 375\u00b0F.",
      "Cook the lasagna noodles according to package directions. Drain and set aside.",
      "In a large skillet, cook the ground beef over medium heat until browned. Drain the excess fat.",
      "Add the onion and garlic to the skillet and cook until soft.",
      "Add the canned tomatoes, tomato paste, water, basil, oregano, salt, and pepper. Simmer for 15 minutes.",
      "In a mixing bowl, beat the eggs. Stir in the ricotta cheese, 1 cup of mozzarella cheese, and 1/2 cup of Parmesan cheese.",
      "To assemble the lasagna, spread a layer of the meat sauce in the bottom of a 9x13 inch baking dish.",
      "Arrange a single layer of lasagna noodles over the meat sauce. Spread a layer of the cheese mixture over the noodles.",
      "Repeat the layers of meat sauce, noodles, and cheese until the ingredients are used up.",
      "Top with remaining mozzarella and Parmesan cheese.",
      "Cover with foil and bake for 25 minutes.",
      "Remove the foil and bake for an additional 25 minutes.",
      "Let the lasagna cool for a few minutes before serving.",
    ],
    cooking_time_minutes: 90,
    complexity: "Medium",
    cuisines: ["Italian"],
    meal_time: ["Dinner"],
    calories_estimate: 600,
    tags: ["comfort food", "family dinner", "italian cuisine"],
    image_caption_prompt:
      "Generate an image of a comforting Classic Lasagna, with layers of tender lasagna noodles, savory meat sauce, and creamy cheese, topped with a sprinkle of Parmesan cheese. Serve with a side of garlic bread for a cozy Italian dinner night. Ensure that the lasagna and garlic bread are clearly visible and nothing important is cut or cropped.",
    id: "19224492-5a66-4005-9d2f-172085115f00",
    image: require("../../assets/recipe-images/Classic-Lasagna-19224492-5a66-4005-9d2f-172085115f00.png"),
  },
  {
    name: "Tofu and Vegetable Stir-Fry",
    ingredients: [
      {
        name: "tofu",
        quantity: "1 block",
      },
      {
        name: "broccoli",
        quantity: "1 head",
      },
      {
        name: "carrots",
        quantity: "2",
      },
      {
        name: "red bell pepper",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "ginger",
        quantity: "1 tbsp",
      },
      {
        name: "soy sauce",
        quantity: "1/4 cup",
      },
      {
        name: "cornstarch",
        quantity: "1 tbsp",
      },
      {
        name: "vegetable oil",
        quantity: "2 tbsp",
      },
      {
        name: "rice",
        quantity: "2 cups cooked",
      },
    ],
    instructions: [
      "Drain the tofu and cut it into small cubes.",
      "Wash and chop the broccoli into bite-sized pieces.",
      "Peel and slice the carrots into thin strips.",
      "Remove the seeds and chop the red bell pepper into small pieces.",
      "Peel and mince the garlic.",
      "Peel and grate the ginger.",
      "In a small bowl, whisk together the soy sauce, cornstarch, and 1/4 cup of water.",
      "Heat the vegetable oil in a large skillet over medium-high heat.",
      "Add the tofu and stir-fry for 3-5 minutes until golden brown.",
      "Add the garlic and ginger and stir-fry for 1 minute.",
      "Add the vegetables and stir-fry for 3-5 minutes until tender-crisp.",
      "Pour the soy sauce mixture over the vegetables and tofu and stir-fry for 1-2 minutes until the sauce thickens.",
      "Serve over cooked rice.",
    ],
    cooking_time_minutes: 20,
    complexity: "Easy",
    cuisines: ["Chinese"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["vegetarian", "vegan", "gluten-free", "tofu", "stir-fry"],
    image_caption_prompt:
      "Generate an image featuring a colorful and nutritious Tofu and Vegetable Stir-Fry filled with tender-crisp broccoli, carrots, and red bell pepper, all tossed in a savory soy sauce and served over fluffy rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "4c8ccaaa-5ddd-4359-9707-bf4b0410caea",
    image: require("../../assets/recipe-images/Tofu-and-Vegetable-Stir-Fry-4c8ccaaa-5ddd-4359-9707-bf4b0410caea.png"),
  },
  {
    name: "Eggs and Greens Breakfast Sandwich",
    ingredients: [
      {
        name: "whole grain bread",
        quantity: "2 slices",
      },
      {
        name: "egg",
        quantity: "1",
      },
      {
        name: "spinach",
        quantity: "1 cup",
      },
      {
        name: "avocado",
        quantity: "1/2",
      },
      {
        name: "tomato",
        quantity: "1",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Toast the bread slices in a toaster or on a pan until they are crispy.",
      "In a small non-stick pan over medium heat, add the egg and cook until the desired doneness is achieved. Season with salt and pepper.",
      "Wash and dry the spinach leaves and slice the tomato.",
      "Slice the avocado and mash it with a fork.",
      "To assemble the sandwich, spread the mashed avocado on one slice of bread and place the spinach leaves and tomato slices on top.",
      "Place the cooked egg on top of the vegetables and season with salt and pepper if desired.",
      "Cover with the other slice of bread and enjoy immediately.",
    ],
    cooking_time_minutes: 10,
    complexity: "Easy",
    cuisines: ["International"],
    meal_time: ["Breakfast"],
    calories_estimate: 350,
    tags: ["healthy", "weight loss", "greens", "breakfast sandwich"],
    image_caption_prompt:
      "Generate an image centered around a delicious Eggs and Greens Breakfast Sandwich made with whole grain bread, a perfectly cooked egg, fresh spinach, ripe tomato, and creamy avocado. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "b00c36cb-a61f-4399-a765-718ad3bffcaa",
    image: require("../../assets/recipe-images/Eggs-and-Greens-Breakfast-Sandwich-b00c36cb-a61f-4399-a765-718ad3bffcaa.png"),
  },
  {
    name: "Spicy Garlic Tofu and Vegetable Stir-Fry",
    ingredients: [
      {
        name: "tofu",
        quantity: "1 block",
      },
      {
        name: "mushrooms",
        quantity: "1 cup",
      },
      {
        name: "broccoli",
        quantity: "1 head",
      },
      {
        name: "asparagus",
        quantity: "1 bunch",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "ginger",
        quantity: "1 tbsp",
      },
      {
        name: "soy sauce",
        quantity: "1/4 cup",
      },
      {
        name: "rice vinegar",
        quantity: "2 tbsp",
      },
      {
        name: "honey",
        quantity: "1 tbsp",
      },
      {
        name: "sriracha",
        quantity: "1 tbsp",
      },
      {
        name: "vegetable oil",
        quantity: "2 tbsp",
      },
      {
        name: "rice",
        quantity: "2 cups cooked",
      },
    ],
    instructions: [
      "Drain the tofu and cut it into small cubes.",
      "Wash and chop the mushrooms into bite-sized pieces.",
      "Wash and chop the broccoli into bite-sized pieces.",
      "Wash and trim the asparagus and cut into bite-sized pieces.",
      "Peel and mince the garlic.",
      "Peel and grate the ginger.",
      "In a small bowl, whisk together the soy sauce, rice vinegar, honey, and sriracha.",
      "Heat the vegetable oil in a large skillet over medium-high heat.",
      "Add the tofu and stir-fry for 3-5 minutes until golden brown.",
      "Add the garlic and ginger and stir-fry for 1 minute.",
      "Add the mushrooms, broccoli, and asparagus and stir-fry for 3-5 minutes until tender-crisp.",
      "Pour the soy sauce mixture over the vegetables and tofu and stir-fry for 1-2 minutes until the sauce thickens.",
      "Serve over cooked rice.",
    ],
    cooking_time_minutes: 25,
    complexity: "Easy",
    cuisines: ["Chinese"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["vegetarian", "vegan", "gluten-free", "tofu", "stir-fry", "spicy"],
    image_caption_prompt:
      "Generate an image featuring a spicy and flavorful Garlic Tofu and Vegetable Stir-Fry filled with tender-crisp broccoli, asparagus, and mushrooms, all tossed in a savory soy sauce and sriracha sauce and served over fluffy rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "8919a6ee-50ef-4e60-ad5a-c5e0f5bf99e4",
    image: require("../../assets/recipe-images/Spicy-Garlic-Tofu-and-Vegetable-Stir-Fry-8919a6ee-50ef-4e60-ad5a-c5e0f5bf99e4.png"),
  },
  {
    name: "South Indian Thali",
    ingredients: [
      {
        name: "Sona Masuri rice",
        quantity: "1 cup",
      },
      {
        name: "Sambar",
        quantity: "2 cups",
      },
      {
        name: "Rasam",
        quantity: "2 cups",
      },
      {
        name: "Coconut chutney",
        quantity: "1 cup",
      },
      {
        name: "Papad",
        quantity: "4 pieces",
      },
      {
        name: "Cucumber raita",
        quantity: "1 cup",
      },
      {
        name: "Lemon pickle",
        quantity: "1/2 cup",
      },
      {
        name: "Payasam",
        quantity: "4 servings",
      },
    ],
    instructions: [
      "Cook the Sona Masuri rice according to package instructions.",
      "Heat the sambar and rasam in separate pots.",
      "Fry the papad in a small skillet.",
      "Serve the rice, sambar, and rasam on a large platter.",
      "Add the coconut chutney, cucumber raita, and lemon pickle on the side.",
      "Finish the meal with a sweet serving of payasam.",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["South Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 800,
    tags: ["festive", "traditional", "spicy"],
    image_caption_prompt:
      "Generate an image featuring a South Indian thali with fragrant Sona Masuri rice, tangy sambar, spicy rasam, creamy coconut chutney, crispy papad, refreshing cucumber raita, zesty lemon pickle, and a sweet serving of payasam. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "3acd54b3-a493-4e9f-b2a0-25f47e2c3a11",
    image: require("../../assets/recipe-images/South-Indian-Thali-3acd54b3-a493-4e9f-b2a0-25f47e2c3a11.png"),
  },
  {
    name: "Easy Greek Salad",
    ingredients: [
      {
        name: "romaine lettuce",
        quantity: "1 head",
      },
      {
        name: "cucumber",
        quantity: "1",
      },
      {
        name: "tomatoes",
        quantity: "2",
      },
      {
        name: "red onion",
        quantity: "1/2",
      },
      {
        name: "feta cheese",
        quantity: "1/2 cup",
      },
      {
        name: "kalamata olives",
        quantity: "1/4 cup",
      },
      {
        name: "extra-virgin olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "red wine vinegar",
        quantity: "2 tbsp",
      },
      {
        name: "dried oregano",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Tear the romaine lettuce into bite-sized pieces.",
      "Cut the cucumber and tomatoes into bite-sized pieces.",
      "Thinly slice the red onion.",
      "In a large bowl, mix the romaine lettuce, cucumber, tomatoes, and red onion.",
      "Add the feta cheese and kalamata olives and gently toss.",
      "In a small bowl, whisk together the extra-virgin olive oil, red wine vinegar, dried oregano, salt, and black pepper.",
      "Pour the dressing over the salad and toss to combine.",
      "Serve immediately or refrigerate until ready to serve.",
    ],
    cooking_time_minutes: 15,
    complexity: "Easy",
    cuisines: ["Mediterranean"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 250,
    tags: ["vegetarian", "gluten-free", "light", "quick"],
    image_caption_prompt:
      "Generate an image featuring an Easy Greek Salad filled with fresh romaine lettuce, juicy tomatoes, crisp cucumber, tangy feta cheese, and salty kalamata olives, all tossed in a zesty red wine vinaigrette. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "3640b25c-1460-4f0b-9acc-352d8c06162e",
    image: require("../../assets/recipe-images/Easy-Greek-Salad-3640b25c-1460-4f0b-9acc-352d8c06162e.png"),
  },
  {
    name: "Coq au Vin",
    ingredients: [
      {
        name: "chicken thighs",
        quantity: "6",
      },
      {
        name: "bacon",
        quantity: "4 slices",
      },
      {
        name: "carrots",
        quantity: "3",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic cloves",
        quantity: "4",
      },
      {
        name: "button mushrooms",
        quantity: "8 oz",
      },
      {
        name: "red wine",
        quantity: "2 cups",
      },
      {
        name: "chicken broth",
        quantity: "1 cup",
      },
      {
        name: "tomato paste",
        quantity: "2 tbsp",
      },
      {
        name: "bay leaves",
        quantity: "2",
      },
      {
        name: "thyme",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
      {
        name: "flour",
        quantity: "2 tbsp",
      },
      {
        name: "butter",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Preheat oven to 350\u00b0F (175\u00b0C).",
      "In a large Dutch oven, cook bacon over medium heat until crispy. Transfer to a plate and set aside.",
      "Season chicken with salt and pepper, and coat in flour.",
      "In the same Dutch oven, brown the chicken in bacon fat over medium-high heat.",
      "Transfer chicken to a plate and set aside.",
      "Add onions, carrots, and garlic to the Dutch oven and cook until the onions are translucent, about 5-7 minutes.",
      "Add mushrooms and cook until they are tender, about 5-7 minutes.",
      "Add tomato paste and cook for 1 minute, stirring constantly.",
      "Add red wine, chicken broth, bay leaves, and thyme. Bring to a boil and reduce to a simmer.",
      "Add the chicken and bacon to the Dutch oven.",
      "Cover and place in the oven for 1 hour.",
      "Remove from oven and serve hot!",
    ],
    cooking_time_minutes: 90,
    complexity: "Intermediate",
    cuisines: ["French"],
    meal_time: ["Main Course"],
    calories_estimate: 600,
    tags: ["coq au vin", "French cuisine", "romantic dinner"],
    image_caption_prompt:
      "Generate an image featuring a plate of Coq au Vin, with tender chicken thighs, carrots, mushrooms, and bacon in a rich red wine sauce. Ensure that the dish is the focus of the image, and that all ingredients are clearly visible and nothing important is cut or cropped.",
    id: "70f43963-8600-4089-8574-fd9f3d121cae",
    image: require("../../assets/recipe-images/Coq-au-Vin-70f43963-8600-4089-8574-fd9f3d121cae.png"),
  },
  {
    name: "Spicy Thai Green Curry with Chicken",
    ingredients: [
      {
        name: "boneless chicken breast",
        quantity: "1 lb",
      },
      {
        name: "Thai green curry paste",
        quantity: "2 tbsp",
      },
      {
        name: "coconut milk",
        quantity: "1 can",
      },
      {
        name: "jasmine rice",
        quantity: "1 cup",
      },
      {
        name: "green beans",
        quantity: "1 cup",
      },
      {
        name: "red bell pepper",
        quantity: "1",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "ginger",
        quantity: "1 inch",
      },
      {
        name: "vegetable oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "fresh cilantro",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Wash the rice and cook it according to the package instructions.",
      "In a large pot, heat the vegetable oil over medium-high heat.",
      "Add the onion and saut\u00e9 until translucent, about 2-3 minutes.",
      "Add the garlic and ginger and saut\u00e9 for another minute.",
      "Add the chicken and cook until browned on all sides, about 3-4 minutes.",
      "Add the Thai green curry paste and saut\u00e9 for another minute.",
      "Add the coconut milk, salt, and vegetables. Bring to a boil.",
      "Reduce heat to low and simmer for 10-15 minutes or until the chicken is cooked through and the vegetables are tender.",
      "Serve the curry over the jasmine rice and garnish with fresh cilantro.",
    ],
    cooking_time_minutes: 40,
    complexity: "Medium",
    cuisines: ["Thai"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["spicy", "adventurous", "Thai cuisine"],
    image_caption_prompt:
      "Generate an image featuring a fragrant bowl of Spicy Thai Green Curry with Chicken, served over fluffy jasmine rice and topped with fresh cilantro. Make sure all the ingredients are visible, and nothing important is cut or cropped.",
    id: "ce84b20c-6b3e-4fc3-be24-1c72484a70bb",
    image: require("../../assets/recipe-images/Spicy-Thai-Green-Curry-with-Chicken-ce84b20c-6b3e-4fc3-be24-1c72484a70bb.png"),
  },
  {
    name: "Black Bean and Avocado Taco Salad",
    ingredients: [
      {
        name: "black beans",
        quantity: "1 can",
      },
      {
        name: "romaine lettuce",
        quantity: "1 head",
      },
      {
        name: "avocado",
        quantity: "1",
      },
      {
        name: "cherry tomatoes",
        quantity: "1 cup",
      },
      {
        name: "red onion",
        quantity: "1/2",
      },
      {
        name: "corn",
        quantity: "1 cup",
      },
      {
        name: "taco seasoning",
        quantity: "2 tsp",
      },
      {
        name: "salsa",
        quantity: "1/2 cup",
      },
      {
        name: "lime juice",
        quantity: "1/4 cup",
      },
      {
        name: "cilantro",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "Rinse and drain the black beans.",
      "Chop the lettuce into bite-sized pieces and place in a large bowl.",
      "Cut the avocado into cubes and add to the bowl with the lettuce.",
      "Slice the cherry tomatoes in half and add to the bowl with the lettuce and avocado.",
      "Finely chop the red onion and add to the bowl with the lettuce, avocado, and cherry tomatoes.",
      "Add the corn and black beans to the bowl and toss everything together.",
      "In a small bowl, mix together the taco seasoning, salsa, lime juice, and cilantro.",
      "Pour the dressing over the salad and toss everything together to combine.",
      "Serve immediately.",
    ],
    cooking_time_minutes: 15,
    complexity: "Easy",
    cuisines: ["Mexican"],
    meal_time: ["Lunch"],
    calories_estimate: 350,
    tags: ["vegetarian", "gluten-free", "taco salad"],
    image_caption_prompt:
      "Generate an image featuring a colorful Black Bean and Avocado Taco Salad filled with fresh lettuce, creamy avocado, juicy cherry tomatoes, and black beans. Top with a tangy salsa dressing and sprinkle with cilantro. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "78cd37ee-69e4-4263-b890-9906275c67ed",
    image: require("../../assets/recipe-images/Black-Bean-and-Avocado-Taco-Salad-78cd37ee-69e4-4263-b890-9906275c67ed.png"),
  },
  {
    name: "Assorted Sushi Platter",
    ingredients: [
      {
        name: "sushi rice",
        quantity: "2 cups",
      },
      {
        name: "water",
        quantity: "2 cups",
      },
      {
        name: "rice vinegar",
        quantity: "1/4 cup",
      },
      {
        name: "sugar",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "1 tsp",
      },
      {
        name: "nori sheets",
        quantity: "5",
      },
      {
        name: "sashimi grade tuna",
        quantity: "1/2 lb",
      },
      {
        name: "salmon",
        quantity: "1/2 lb",
      },
      {
        name: "avocado",
        quantity: "1",
      },
      {
        name: "cucumber",
        quantity: "1",
      },
      {
        name: "wasabi",
        quantity: "1 tbsp",
      },
      {
        name: "pickled ginger",
        quantity: "1/4 cup",
      },
      {
        name: "soy sauce",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "Rinse the sushi rice in cold water until the water runs clear.",
      "In a medium saucepan, combine the rice and water. Bring to a boil over high heat, then reduce heat to low and cover. Cook for 18 minutes.",
      "Remove the rice from heat and let it sit for 10 minutes.",
      "In a small saucepan, combine the rice vinegar, sugar, and salt. Heat over low heat until the sugar dissolves.",
      "Transfer the cooked rice to a large bowl. Add the vinegar mixture and stir gently to combine.",
      "Cut the sashimi grade tuna and salmon into bite-sized pieces.",
      "Slice the avocado and cucumber thin.",
      "Place a nori sheet on a sushi mat. Spread a thin layer of rice over the nori, leaving a 1-inch border at the top.",
      "Add the fillings on top of the rice. Roll the sushi tightly, using the mat to help shape it. Repeat with the remaining ingredients.",
      "Slice the sushi rolls into bite-sized pieces.",
      "Serve with wasabi, pickled ginger, and soy sauce.",
    ],
    cooking_time_minutes: 45,
    complexity: "Intermediate",
    cuisines: ["Japanese"],
    meal_time: ["Dinner"],
    calories_estimate: 450,
    tags: ["sushi", "seafood", "Japanese cuisine", "exotic"],
    image_caption_prompt:
      "Generate an image of a traditional Japanese sushi platter with a variety of fresh, colorful rolls, including tuna, salmon, avocado, and cucumber. Serve with wasabi, pickled ginger, and soy sauce on the side. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "e5c7e3f6-22ed-4ee3-be87-15e168b05e89",
    image: require("../../assets/recipe-images/Assorted-Sushi-Platter-e5c7e3f6-22ed-4ee3-be87-15e168b05e89.png"),
  },
  {
    name: "Classic Falafel Wrap",
    ingredients: [
      {
        name: "dried chickpeas",
        quantity: "1 cup",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic cloves",
        quantity: "2",
      },
      {
        name: "parsley",
        quantity: "1/2 cup",
      },
      {
        name: "cilantro",
        quantity: "1/2 cup",
      },
      {
        name: "ground cumin",
        quantity: "1 tsp",
      },
      {
        name: "ground coriander",
        quantity: "1 tsp",
      },
      {
        name: "baking powder",
        quantity: "1 tsp",
      },
      {
        name: "all-purpose flour",
        quantity: "1/2 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
      {
        name: "tahini",
        quantity: "1/2 cup",
      },
      {
        name: "lemon juice",
        quantity: "2 tbsp",
      },
      {
        name: "water",
        quantity: "1/4 cup",
      },
      {
        name: "whole wheat wrap",
        quantity: "1",
      },
      {
        name: "lettuce",
        quantity: "1 cup",
      },
      {
        name: "tomato",
        quantity: "1",
      },
    ],
    instructions: [
      "Soak the chickpeas overnight in water.",
      "Drain the chickpeas and place them in a food processor.",
      "Add onion, garlic, parsley, cilantro, cumin, coriander, baking powder, flour, salt, and pepper to the food processor.",
      "Process the mixture until it is smooth and uniform.",
      "Form the mixture into small balls and flatten them slightly.",
      "Heat oil in a frying pan over medium heat.",
      "Fry the falafel until they are golden brown on each side.",
      "Mix tahini, lemon juice, and water in a bowl. Add salt to taste.",
      "Warm the whole wheat wrap in the microwave for 10 seconds.",
      "Spread the tahini sauce on the wrap.",
      "Add lettuce, tomato, and falafel to the wrap.",
      "Roll the wrap tightly and serve immediately.",
    ],
    cooking_time_minutes: 30,
    complexity: "Moderate",
    cuisines: ["Middle Eastern"],
    meal_time: ["Lunch"],
    calories_estimate: 500,
    tags: ["vegetarian", "wholesome", "tahini sauce", "wrap", "falafel"],
    image_caption_prompt:
      "Generate an image of a delicious Classic Falafel Wrap with a creamy tahini sauce, fresh lettuce, and juicy tomatoes, all wrapped in a warm whole wheat wrap. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "ccc59fe9-1d1e-4e6a-9c07-4e1446dff4ff",
    image: require("../../assets/recipe-images/Classic-Falafel-Wrap-ccc59fe9-1d1e-4e6a-9c07-4e1446dff4ff.png"),
  },
  {
    name: "Slow-Cooked BBQ Ribs",
    ingredients: [
      {
        name: "pork ribs",
        quantity: "4 lbs",
      },
      {
        name: "brown sugar",
        quantity: "1 cup",
      },
      {
        name: "paprika",
        quantity: "1 tbsp",
      },
      {
        name: "garlic powder",
        quantity: "1 tbsp",
      },
      {
        name: "onion powder",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "1 tbsp",
      },
      {
        name: "black pepper",
        quantity: "1 tbsp",
      },
      {
        name: "BBQ sauce",
        quantity: "2 cups",
      },
    ],
    instructions: [
      "Preheat oven to 250 degrees F.",
      "In a small bowl, mix together brown sugar, paprika, garlic powder, onion powder, salt, and black pepper.",
      "Rub the spice mixture all over the ribs.",
      "Wrap the ribs tightly in aluminum foil.",
      "Place the ribs on a baking sheet and bake for 4-5 hours.",
      "Remove the foil and brush the BBQ sauce all over the ribs.",
      "Bake for another 30 minutes, until the ribs are glazed and sticky.",
      "Serve hot with cornbread and coleslaw.",
    ],
    cooking_time_minutes: 330,
    complexity: "Medium",
    cuisines: ["Southern American"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 600,
    tags: ["BBQ", "ribs", "weekend feast"],
    image_caption_prompt:
      "Generate an image of juicy Slow-Cooked BBQ Ribs, coated in a sweet and smoky BBQ sauce, and cooked to perfection. Accompany the ribs with buttery cornbread and crunchy coleslaw. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "bc367de4-159d-4904-b125-faae2f252439",
    image: require("../../assets/recipe-images/Slow-Cooked-BBQ-Ribs-bc367de4-159d-4904-b125-faae2f252439.png"),
  },
  {
    name: "Spicy Buddha Bowl",
    ingredients: [
      {
        name: "quinoa",
        quantity: "1 cup",
      },
      {
        name: "chickpeas",
        quantity: "1 can",
      },
      {
        name: "sweet potato",
        quantity: "1",
      },
      {
        name: "broccoli",
        quantity: "2 cups",
      },
      {
        name: "red onion",
        quantity: "1/2",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "smoked paprika",
        quantity: "1 tsp",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "garlic powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat the oven to 400\u00b0F.",
      "Wash and chop the sweet potato and broccoli into bite-sized pieces.",
      "Slice the red onion into wedges.",
      "In a large bowl, mix the sweet potato, broccoli, and red onion with olive oil, smoked paprika, cumin, garlic powder, salt, and pepper.",
      "Spread the vegetables in a single layer on a baking sheet.",
      "Roast in the oven for 25-30 minutes, or until tender and crispy.",
      "While the vegetables are roasting, rinse the quinoa under cold water.",
      "In a medium saucepan, bring 2 cups of water to a boil. Add quinoa and a pinch of salt. Reduce heat to low, cover, and simmer for 15 minutes.",
      "Rinse and drain the chickpeas.",
      "When the vegetables and quinoa are done, assemble the bowl by dividing the quinoa, chickpeas, and roasted vegetables into four bowls.",
      "Serve immediately.",
    ],
    cooking_time_minutes: 40,
    complexity: "Easy",
    cuisines: ["International"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 450,
    tags: ["vegan", "gluten-free", "healthy", "nutritious"],
    image_caption_prompt:
      "Generate an image featuring a colorful Spicy Buddha Bowl filled with fluffy quinoa, crispy roasted sweet potatoes, tender broccoli, and smoky chickpeas, all seasoned with a blend of smoked paprika, cumin, and garlic powder. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "cf343698-dd8a-48d3-a461-a5c1d5c9bf6d",
    image: require("../../assets/recipe-images/Spicy-Buddha-Bowl-cf343698-dd8a-48d3-a461-a5c1d5c9bf6d.png"),
  },
  {
    name: "Caribbean Jerk Chicken with Rice and Peas",
    ingredients: [
      {
        name: "chicken thighs",
        quantity: "6",
      },
      {
        name: "Jamaican jerk seasoning",
        quantity: "2 tbsp",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "ginger",
        quantity: "1 tbsp",
      },
      {
        name: "soy sauce",
        quantity: "2 tbsp",
      },
      {
        name: "lime juice",
        quantity: "1/4 cup",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "long-grain rice",
        quantity: "1 cup",
      },
      {
        name: "coconut milk",
        quantity: "1 can",
      },
      {
        name: "kidney beans",
        quantity: "1 can",
      },
      {
        name: "scallions",
        quantity: "1/2 cup chopped",
      },
      {
        name: "thyme",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat oven to 400\u00b0F (200\u00b0C).",
      "In a small bowl, mix together Jamaican jerk seasoning, garlic, ginger, soy sauce, lime juice, and olive oil.",
      "Place chicken thighs in a large bowl and pour the marinade over them. Toss the chicken until it is well coated.",
      "Place the chicken thighs in a baking dish and bake for 30-35 minutes or until they are cooked through.",
      "While the chicken is cooking, rinse the rice in cold water until the water runs clear. In a medium pot, bring 2 cups of water to a boil.",
      "Add the rice, coconut milk, kidney beans, scallions, thyme, salt, and pepper to the pot. Stir well.",
      "Bring the mixture to a boil, then reduce the heat to low and cover the pot. Simmer for 18-20 minutes or until the rice is tender and the liquid is absorbed.",
      "Serve the chicken with the rice and peas immediately.",
    ],
    cooking_time_minutes: 60,
    complexity: "Medium",
    cuisines: ["Caribbean"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["jerk chicken", "rice and peas", "Caribbean cuisine"],
    image_caption_prompt:
      "Generate an image featuring a plate of Caribbean Jerk Chicken with Rice and Peas. The chicken should be well-seasoned and cooked to perfection, with a side of fluffy rice and kidney beans. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "3f260ad4-248a-4b32-b13e-48156746f7ea",
    image: require("../../assets/recipe-images/Caribbean-Jerk-Chicken-with-Rice-and-Peas-3f260ad4-248a-4b32-b13e-48156746f7ea.png"),
  },
  {
    name: "Patatas Bravas",
    ingredients: [
      {
        name: "potatoes",
        quantity: "4 medium",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "smoked paprika",
        quantity: "1 tsp",
      },
      {
        name: "tomato sauce",
        quantity: "1/2 cup",
      },
      {
        name: "garlic",
        quantity: "2 cloves",
      },
      {
        name: "red pepper flakes",
        quantity: "1/4 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "parsley",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Preheat the oven to 400\u00b0F.",
      "Cut the potatoes into bite-sized pieces.",
      "In a large bowl, toss the potatoes with olive oil, smoked paprika, and salt.",
      "Arrange the potatoes in a single layer on a baking sheet and bake for 25-30 minutes, or until golden brown.",
      "While the potatoes are baking, make the sauce. In a small saucepan, heat the tomato sauce, garlic, red pepper flakes, and salt over medium heat.",
      "Simmer for 5-10 minutes, or until the sauce has thickened.",
      "Drizzle the sauce over the potatoes and garnish with parsley.",
      "Serve hot.",
    ],
    cooking_time_minutes: 40,
    complexity: "Easy",
    cuisines: ["Spanish"],
    meal_time: ["Appetizer"],
    calories_estimate: 250,
    tags: ["vegetarian", "gluten-free", "tapas"],
    image_caption_prompt:
      "Generate an image centered around crispy Patatas Bravas, Spanish-style fried potatoes, drizzled with a spicy tomato sauce and garnished with fresh parsley. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "12fa6dc7-6439-4930-a652-4bc469c46df5",
    image: require("../../assets/recipe-images/Patatas-Bravas-12fa6dc7-6439-4930-a652-4bc469c46df5.png"),
  },
  {
    name: "Churros with Chocolate Sauce",
    ingredients: [
      {
        name: "water",
        quantity: "1 cup",
      },
      {
        name: "salt",
        quantity: "1/4 tsp",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "all-purpose flour",
        quantity: "1 cup",
      },
      {
        name: "vegetable oil",
        quantity: "2 cups",
      },
      {
        name: "cinnamon",
        quantity: "1 tsp",
      },
      {
        name: "chocolate chips",
        quantity: "1/2 cup",
      },
      {
        name: "heavy cream",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "In a small saucepan, bring the water, salt, and sugar to a boil over medium heat.",
      "Remove from heat and stir in the flour until a smooth dough forms.",
      "Heat the vegetable oil in a large pot over medium-high heat.",
      "Spoon the dough into a piping bag fitted with a star tip.",
      "When the oil is hot, pipe the dough into the oil, using scissors or a knife to cut the dough as it comes out of the piping bag.",
      "Fry until golden brown, about 2-3 minutes per side.",
      "Combine the cinnamon and sugar in a small bowl.",
      "Remove the churros from the oil and immediately roll them in the cinnamon sugar mixture.",
      "In a small saucepan, heat the chocolate chips and heavy cream over low heat, stirring constantly, until the chocolate is melted and smooth.",
      "Serve the warm churros with the chocolate sauce for dipping.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Spanish"],
    meal_time: ["Dessert"],
    calories_estimate: 400,
    tags: ["vegetarian", "dessert", "tapas"],
    image_caption_prompt:
      "Generate an image centered around a plate of freshly fried churros, crispy on the outside and soft on the inside, rolled in a cinnamon sugar mixture. Serve with a bowl of warm chocolate sauce for dipping. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "ca34e264-7b7d-419a-b996-b1cd5f2b80f8",
    image: require("../../assets/recipe-images/Churros-with-Chocolate-Sauce-ca34e264-7b7d-419a-b996-b1cd5f2b80f8.png"),
  },
  {
    name: "Bavarian Sausage and Sauerkraut Soup",
    ingredients: [
      {
        name: "bratwurst",
        quantity: "1 lb",
      },
      {
        name: "sauerkraut",
        quantity: "1 lb",
      },
      {
        name: "potatoes",
        quantity: "1 lb",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "carrot",
        quantity: "1",
      },
      {
        name: "celery",
        quantity: "1 stalk",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "chicken broth",
        quantity: "4 cups",
      },
      {
        name: "bay leaf",
        quantity: "1",
      },
      {
        name: "thyme",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Slice the bratwurst into 1/2 inch pieces. Peel and dice the potatoes into small cubes. Finely chop the onion, carrot, celery, and garlic.",
      "In a large pot, heat olive oil over medium heat. Add onion, carrot, celery, and garlic and saut\u00e9 until softened.",
      "Add the sliced bratwurst to the pot and cook until browned on both sides.",
      "Add the diced potatoes, sauerkraut, chicken broth, bay leaf, thyme, salt, and pepper to the pot. Stir to combine.",
      "Bring the soup to a simmer and cook for 20-25 minutes, or until the potatoes are tender.",
      "Serve hot with a cold beer.",
    ],
    cooking_time_minutes: 40,
    complexity: "Medium",
    cuisines: ["German"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 600,
    tags: ["Oktoberfest", "sausage", "sauerkraut", "soup"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of Bavarian Sausage and Sauerkraut Soup, filled with meaty bratwurst, tender potatoes, tangy sauerkraut, and fragrant thyme. Make sure to include a cold beer in the image to complete the Oktoberfest experience.",
    id: "cd48ef4c-c22f-459a-8742-ff5030855af9",
    image: require("../../assets/recipe-images/Bavarian-Sausage-and-Sauerkraut-Soup-cd48ef4c-c22f-459a-8742-ff5030855af9.png"),
  },
  {
    name: "Vegan Bibimbap",
    ingredients: [
      {
        name: "short-grain rice",
        quantity: "1 cup",
      },
      {
        name: "crispy tofu",
        quantity: "1 cup",
      },
      {
        name: "zucchini",
        quantity: "1",
      },
      {
        name: "carrot",
        quantity: "1",
      },
      {
        name: "spinach",
        quantity: "2 cups",
      },
      {
        name: "bean sprouts",
        quantity: "1 cup",
      },
      {
        name: "shiitake mushrooms",
        quantity: "1 cup",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "soy sauce",
        quantity: "3 tbsp",
      },
      {
        name: "sesame oil",
        quantity: "1 tbsp",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "vegetable oil",
        quantity: "2 tbsp",
      },
      {
        name: "eggs",
        quantity: "4",
      },
      {
        name: "gochujang sauce",
        quantity: "4 tbsp",
      },
    ],
    instructions: [
      "Cook the rice according to package instructions.",
      "Thinly slice the zucchini and carrot into matchsticks. Saut\u00e9 in vegetable oil until tender. Set aside.",
      "Saut\u00e9 the spinach in vegetable oil until wilted. Set aside.",
      "Blanch the bean sprouts in boiling water for 2 minutes. Drain and rinse with cold water. Set aside.",
      "Saut\u00e9 the shiitake mushrooms and garlic in vegetable oil until tender. Set aside.",
      "In a bowl, mix soy sauce, sesame oil, and sugar. Add the crispy tofu and mix well.",
      "To assemble, divide the cooked rice among four bowls. Top with the saut\u00e9ed vegetables, mushrooms, and tofu. Add a spoonful of gochujang sauce on top.",
      "Mix everything together before eating.",
    ],
    cooking_time_minutes: 45,
    complexity: "Intermediate",
    cuisines: ["Korean", "Vegan"],
    meal_time: ["Dinner"],
    calories_estimate: 450,
    tags: ["bibimbap", "mixed vegetables", "tofu", "gochujang sauce"],
    image_caption_prompt:
      "Generate an image showcasing a vegan Bibimbap filled with fluffy short-grain rice, crispy tofu, colorful mixed vegetables, and a spoonful of gochujang sauce. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "f1be87a0-5b67-4260-ba48-a9c25e48bdf2",
    image: require("../../assets/recipe-images/Vegan-Bibimbap-f1be87a0-5b67-4260-ba48-a9c25e48bdf2.png"),
  },
  {
    name: "Vegetarian Feijoada with Black Beans and Rice",
    ingredients: [
      {
        name: "black beans",
        quantity: "1 pound",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "carrots",
        quantity: "2",
      },
      {
        name: "celery",
        quantity: "2 stalks",
      },
      {
        name: "red bell pepper",
        quantity: "1",
      },
      {
        name: "tomatoes",
        quantity: "2",
      },
      {
        name: "bay leaves",
        quantity: "2",
      },
      {
        name: "smoked paprika",
        quantity: "1 tsp",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Soak the black beans overnight in water.",
      "In a large pot, saut\u00e9 the chopped onion and garlic until soft.",
      "Add the chopped carrots, celery, red bell pepper, and tomatoes to the pot.",
      "Add the black beans and enough water to cover them.",
      "Add the bay leaves, smoked paprika, and cumin to the pot.",
      "Simmer for 1-2 hours until the beans are tender.",
      "Season with salt and pepper to taste.",
      "Serve with rice.",
    ],
    cooking_time_minutes: 240,
    complexity: "Intermediate",
    cuisines: ["Brazilian", "Vegetarian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["hearty", "comfort food", "vegetarian", "black beans"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of Vegetarian Feijoada with Black Beans and Rice, topped with chopped vegetables and a sprinkle of smoked paprika. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "f8eef115-7485-47a7-9f59-64bfafa71226",
    image: require("../../assets/recipe-images/Vegetarian-Feijoada-with-Black-Beans-and-Rice-f8eef115-7485-47a7-9f59-64bfafa71226.png"),
  },
  {
    name: "Vegetarian Moroccan Tagine with Apricots and Couscous",
    ingredients: [
      {
        name: "couscous",
        quantity: "1 cup",
      },
      {
        name: "onion",
        quantity: "1 large",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "ginger",
        quantity: "1 inch",
      },
      {
        name: "cinnamon stick",
        quantity: "1",
      },
      {
        name: "ground coriander",
        quantity: "1 tsp",
      },
      {
        name: "ground cumin",
        quantity: "1 tsp",
      },
      {
        name: "turmeric",
        quantity: "1 tsp",
      },
      {
        name: "vegetable broth",
        quantity: "2 cups",
      },
      {
        name: "dried apricots",
        quantity: "1 cup",
      },
      {
        name: "carrots",
        quantity: "4",
      },
      {
        name: "sweet potato",
        quantity: "1 large",
      },
      {
        name: "zucchini",
        quantity: "1",
      },
      {
        name: "chickpeas",
        quantity: "1 can",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Heat 2 tbsp of olive oil in a heavy-bottomed pot over medium-high heat.",
      "Saut\u00e9 the onion, garlic, and ginger until the onion is translucent.",
      "Add the cinnamon stick, coriander, cumin, and turmeric to the pot and cook for a minute or two.",
      "Add the vegetable broth to the pot and bring it to a boil.",
      "Add the carrots, sweet potato, zucchini, chickpeas, and dried apricots to the pot. Cover it and simmer for about 30 minutes or until the vegetables are tender.",
      "While the tagine is cooking, cook the couscous according to the package instructions.",
      "When the tagine is ready, remove the cinnamon stick and serve the vegetables and apricots over the couscous.",
    ],
    cooking_time_minutes: 45,
    complexity: "Easy",
    cuisines: ["Moroccan"],
    meal_time: ["Dinner"],
    calories_estimate: 400,
    tags: [
      "vegetarian",
      "apricots",
      "couscous",
      "Moroccan",
      "exotic",
      "fragrant",
    ],
    image_caption_prompt:
      "Generate an image featuring a delicious Vegetarian Moroccan Tagine with Apricots and Couscous. The aromatic vegetables and apricots are served over fluffy couscous, and the dish is topped with fresh parsley. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "0009270c-1ae8-48fd-bdb8-95b3557f1fef",
    image: require("../../assets/recipe-images/Vegetarian-Moroccan-Tagine-with-Apricots-and-Couscous-0009270c-1ae8-48fd-bdb8-95b3557f1fef.png"),
  },
  {
    name: "Quick and Easy Pho",
    ingredients: [
      {
        name: "beef broth",
        quantity: "8 cups",
      },
      {
        name: "beef sirloin",
        quantity: "1 lb",
      },
      {
        name: "rice noodles",
        quantity: "8 oz",
      },
      {
        name: "onion",
        quantity: "1 medium",
      },
      {
        name: "ginger",
        quantity: "2-inch piece",
      },
      {
        name: "cinnamon stick",
        quantity: "1",
      },
      {
        name: "star anise",
        quantity: "2",
      },
      {
        name: "cloves",
        quantity: "2",
      },
      {
        name: "fish sauce",
        quantity: "3 tbsp",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "bean sprouts",
        quantity: "2 cups",
      },
      {
        name: "fresh basil leaves",
        quantity: "1 cup",
      },
      {
        name: "fresh cilantro leaves",
        quantity: "1 cup",
      },
      {
        name: "fresh mint leaves",
        quantity: "1 cup",
      },
      {
        name: "lime wedges",
        quantity: "4",
      },
    ],
    instructions: [
      "In a large pot, add the beef broth, onion, ginger, cinnamon stick, star anise, and cloves.",
      "Bring the pot to a boil, then reduce heat and let simmer for 1-2 hours.",
      "While the broth is simmering, thinly slice the beef sirloin against the grain.",
      "Cook the rice noodles according to package instructions.",
      "When the broth is done, strain through a fine mesh sieve and discard the solids.",
      "Rinse the pot and return the strained broth to the pot. Add fish sauce and sugar and bring to a simmer.",
      "Assemble the pho bowls. Divide the cooked noodles among 4 bowls. Top with sliced beef sirloin and bean sprouts. Ladle hot broth over the top.",
      "Serve with fresh herbs and lime wedges on the side.",
    ],
    cooking_time_minutes: 120,
    complexity: "Intermediate",
    cuisines: ["Vietnamese"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["beef", "noodles", "soup"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of quick and easy beef pho, filled with aromatic broth, tender slices of beef sirloin, and silky rice noodles. Top with bean sprouts and fresh herbs such as basil, cilantro, and mint. Include a lime wedge on the side. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "f91761af-8fc8-4bcf-ad90-bb3fde3bd0ad",
    image: require("../../assets/recipe-images/Quick-and-Easy-Pho-f91761af-8fc8-4bcf-ad90-bb3fde3bd0ad.png"),
  },
  {
    name: "Vegetarian Poutine",
    ingredients: [
      {
        name: "sweet potatoes",
        quantity: "4 large",
      },
      {
        name: "cheese curds",
        quantity: "2 cups",
      },
      {
        name: "vegetable broth",
        quantity: "2 cups",
      },
      {
        name: "cornstarch",
        quantity: "2 tbsp",
      },
      {
        name: "butter",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat the oven to 450\u00b0F.",
      "Peel and cut the sweet potatoes into fries. Rinse under cold water and pat dry with a paper towel.",
      "Arrange the fries on a baking sheet in a single layer. Drizzle with olive oil and season with salt and pepper. Bake for 20-25 minutes, or until crispy and golden brown.",
      "While the fries are baking, prepare the gravy. Melt the butter in a saucepan over medium heat. Add the cornstarch and whisk until smooth. Cook for 1-2 minutes, stirring constantly.",
      "Gradually add the vegetable broth, whisking constantly to prevent lumps. Bring to a boil, then reduce heat and simmer for 10-15 minutes, or until the gravy has thickened.",
      "When the fries are done, remove from the oven and transfer to a serving dish. Top with cheese curds and pour the hot gravy over the top.",
      "Serve immediately and enjoy!",
    ],
    cooking_time_minutes: 40,
    complexity: "Medium",
    cuisines: ["Canadian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["vegetarian", "comfort food", "weekend treat"],
    image_caption_prompt:
      "Generate an image centered around a delicious plate of Vegetarian Poutine made with crispy sweet potato fries, squeaky cheese curds, and savory vegetable gravy. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "6e6946d9-b545-4cc2-b327-e5b81d76ad51",
    image: require("../../assets/recipe-images/Vegetarian-Poutine-6e6946d9-b545-4cc2-b327-e5b81d76ad51.png"),
  },
  {
    name: "Healthy African Jollof Rice with Chicken and Vegetables",
    ingredients: [
      {
        name: "chicken breasts",
        quantity: "4",
      },
      {
        name: "brown rice",
        quantity: "2 cups",
      },
      {
        name: "tomatoes",
        quantity: "3",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "bell pepper",
        quantity: "1",
      },
      {
        name: "scotch bonnet pepper",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "ginger",
        quantity: "1 inch",
      },
      {
        name: "turmeric",
        quantity: "1 tbsp",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "chicken stock",
        quantity: "3 cups",
      },
      {
        name: "olive oil",
        quantity: "1/4 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat the oven to 375\u00b0F.",
      "Season the chicken breasts with salt, black pepper, turmeric, cumin, and paprika. Place in a baking dish and bake for 25-30 minutes, or until cooked through.",
      "While the chicken is cooking, blend the tomatoes, onion, bell pepper, scotch bonnet pepper, garlic, and ginger in a food processor or blender until smooth.",
      "Heat the olive oil in a large pot over medium heat. Add the blended tomato mixture and cook for 10-15 minutes, stirring occasionally.",
      "Add the brown rice to the pot and stir to coat in the tomato mixture.",
      "Pour in the chicken stock and bring to a boil. Reduce heat to low, cover, and simmer for 35-40 minutes, or until the rice is cooked through and the liquid has been absorbed.",
      "Add the cooked chicken to the pot and stir.",
      "Serve hot and enjoy!",
    ],
    cooking_time_minutes: 70,
    complexity: "Intermediate",
    cuisines: ["African"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["healthy", "savory", "rice", "chicken", "vegetables"],
    image_caption_prompt:
      "Generate an image featuring a healthy African Jollof Rice with Chicken and Vegetables. The dish is filled with nutty brown rice, juicy chicken breast, and colorful vegetables such as tomatoes, bell pepper, and onion. The turmeric and cumin add a nice touch of spiciness. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "5ad88b06-58ac-4a10-8624-d8e8e1f16d6f",
    image: require("../../assets/recipe-images/Healthy-African-Jollof-Rice-with-Chicken-and-Vegetables-5ad88b06-58ac-4a10-8624-d8e8e1f16d6f.png"),
  },
  {
    name: "Baba Ganoush",
    ingredients: [
      {
        name: "eggplant",
        quantity: "1",
      },
      {
        name: "tahini",
        quantity: "2 tbsp",
      },
      {
        name: "garlic",
        quantity: "2 cloves",
      },
      {
        name: "lemon juice",
        quantity: "1 tbsp",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pomegranate seeds",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Preheat the oven to 400\u00b0F (200\u00b0C).",
      "Prick the eggplant with a fork and place it on a baking sheet.",
      "Bake the eggplant for 30-40 minutes, or until it is soft and the skin is charred.",
      "Remove the eggplant from the oven and let it cool for a few minutes.",
      "Peel the skin off the eggplant and discard.",
      "In a food processor, add the eggplant, tahini, garlic, lemon juice, olive oil, and salt.",
      "Blend until smooth and creamy.",
      "Transfer to a serving bowl, drizzle with olive oil and sprinkle with pomegranate seeds.",
      "Serve with pita bread or vegetables.",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["Turkish"],
    meal_time: ["Appetizer"],
    calories_estimate: 200,
    tags: ["vegetarian", "gluten-free", "mezze"],
    image_caption_prompt:
      "Generate an image featuring a delicious Baba Ganoush served in a bowl, garnished with a sprinkle of pomegranate seeds and a drizzle of olive oil. Include some pita bread and vegetables in the image. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "c67d9bd5-695a-4a6e-8813-4206fd92b62d",
    image: require("../../assets/recipe-images/Baba-Ganoush-c67d9bd5-695a-4a6e-8813-4206fd92b62d.png"),
  },
  {
    name: "Swedish Meatballs with Lingonberry Sauce",
    ingredients: [
      {
        name: "ground beef",
        quantity: "1 lb",
      },
      {
        name: "ground pork",
        quantity: "1 lb",
      },
      {
        name: "breadcrumbs",
        quantity: "1/2 cup",
      },
      {
        name: "onion",
        quantity: "1, finely chopped",
      },
      {
        name: "egg",
        quantity: "1",
      },
      {
        name: "milk",
        quantity: "1/4 cup",
      },
      {
        name: "butter",
        quantity: "4 tbsp",
      },
      {
        name: "flour",
        quantity: "4 tbsp",
      },
      {
        name: "beef broth",
        quantity: "2 cups",
      },
      {
        name: "heavy cream",
        quantity: "1 cup",
      },
      {
        name: "lingonberry jam",
        quantity: "3 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "In a large bowl, mix the beef, pork, breadcrumbs, onion, egg, milk, salt, and pepper.",
      "Form the mixture into small meatballs.",
      "In a large skillet over medium heat, melt 2 tablespoons of butter. Add the meatballs and cook until browned on all sides. Transfer the meatballs to a plate.",
      "In the same skillet, melt the remaining butter over medium-high heat. Add the flour and whisk to combine. Gradually add the beef broth, whisking constantly.",
      "Add the heavy cream and lingonberry jam. Reduce heat to low and let the sauce simmer for 5 minutes.",
      "Add the meatballs back to the skillet and spoon the sauce over them. Let them cook in the sauce for 5 minutes.",
      "Serve hot with lingonberry jam and mashed potatoes.",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["Swedish"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 450,
    tags: ["meatballs", "lingonberry", "Swedish cuisine"],
    image_caption_prompt:
      "Generate an image of a Swedish smorgasbord featuring delicious meatballs smothered in a creamy lingonberry sauce. Include a side of mashed potatoes and other traditional Swedish dishes, such as herring and crispbread. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "0951b483-3d48-451f-9379-1650804716c2",
    image: require("../../assets/recipe-images/Swedish-Meatballs-with-Lingonberry-Sauce-0951b483-3d48-451f-9379-1650804716c2.png"),
  },
  {
    name: "Classic Chicken Adobo",
    ingredients: [
      {
        name: "chicken thighs",
        quantity: "6",
      },
      {
        name: "garlic",
        quantity: "1 head",
      },
      {
        name: "soy sauce",
        quantity: "1/2 cup",
      },
      {
        name: "vinegar",
        quantity: "1/2 cup",
      },
      {
        name: "bay leaves",
        quantity: "3",
      },
      {
        name: "peppercorns",
        quantity: "1 tsp",
      },
      {
        name: "cooked rice",
        quantity: "4 cups",
      },
    ],
    instructions: [
      "In a large pot or Dutch oven, heat some oil over medium-high heat. Add the chicken and brown on all sides.",
      "Add the garlic and cook for a minute or until fragrant.",
      "Add the soy sauce, vinegar, bay leaves, and peppercorns. Bring to a boil.",
      "Lower the heat to medium-low and simmer for 30-40 minutes or until the chicken is cooked through and tender.",
      "Serve hot over cooked rice.",
    ],
    cooking_time_minutes: 50,
    complexity: "Intermediate",
    cuisines: ["Filipino"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["gluten-free", "dairy-free"],
    image_caption_prompt:
      "Generate an image featuring a hearty plate of classic Chicken Adobo with tender chicken thighs, tangy vinegar sauce, and aromatic garlic, served over a bed of fluffy white rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "a53c8c76-8b5c-4297-800b-164000d38867",
    image: require("../../assets/recipe-images/Classic-Chicken-Adobo-a53c8c76-8b5c-4297-800b-164000d38867.png"),
  },
  {
    name: "Classic Russian Borscht",
    ingredients: [
      {
        name: "beets",
        quantity: "3 medium",
      },
      {
        name: "cabbage",
        quantity: "1/2 head",
      },
      {
        name: "onion",
        quantity: "1 large",
      },
      {
        name: "carrots",
        quantity: "2 medium",
      },
      {
        name: "potatoes",
        quantity: "2 medium",
      },
      {
        name: "tomatoes",
        quantity: "2 medium",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "beef broth",
        quantity: "4 cups",
      },
      {
        name: "sour cream",
        quantity: "1/2 cup",
      },
      {
        name: "dill",
        quantity: "1/4 cup, chopped",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Peel and chop the beets, onion, carrots, potatoes, and tomatoes into small pieces.",
      "In a large pot, saut\u00e9 the onion and garlic in olive oil until translucent.",
      "Add the beets, carrots, and potatoes, and saut\u00e9 for a few minutes.",
      "Add the beef broth and bring to a boil. Reduce heat and let simmer for 30 minutes.",
      "Add the cabbage and tomatoes, and let simmer for another 30 minutes.",
      "Season with salt and pepper to taste.",
      "Serve hot with a dollop of sour cream and chopped dill.",
    ],
    cooking_time_minutes: 90,
    complexity: "Medium",
    cuisines: ["Russian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["winter", "comfort food", "hearty"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of the classic Russian Borscht, filled with tender beets, potatoes, and cabbage, in a rich beef broth. Add a dollop of sour cream and a sprinkle of fresh dill on top. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "9b44fc88-da67-4260-9c7a-f0ffc84664c4",
    image: require("../../assets/recipe-images/Classic-Russian-Borscht-9b44fc88-da67-4260-9c7a-f0ffc84664c4.png"),
  },
  {
    name: "Injera",
    ingredients: [
      {
        name: "teff flour",
        quantity: "2 cups",
      },
      {
        name: "water",
        quantity: "2 cups",
      },
      {
        name: "salt",
        quantity: "1 tsp",
      },
    ],
    instructions: [
      "In a large mixing bowl, whisk together the teff flour, water, and salt until well combined.",
      "Cover the bowl with a towel and let the batter rest for at least 12 hours, or overnight.",
      "When ready to cook, heat a non-stick skillet over medium-high heat.",
      "Pour a ladleful of the batter onto the skillet and swirl it around to form a thin, crepe-like pancake.",
      "Cover the skillet with a lid and let the injera cook for about 2-3 minutes, until the edges start to lift up.",
      "Remove from heat and repeat with the remaining batter.",
      "Serve the injera with doro wat (spicy chicken stew) on top.",
    ],
    cooking_time_minutes: 20,
    complexity: "Moderate",
    cuisines: ["Ethiopian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 150,
    tags: ["vegan", "gluten-free", "bread"],
    image_caption_prompt:
      "Generate an image featuring a stack of authentic Ethiopian injera, made with teff flour and served with spicy doro wat chicken stew. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "a60bf353-5b1f-47ab-974c-0a9e2470dafd",
    image: require("../../assets/recipe-images/Injera-a60bf353-5b1f-47ab-974c-0a9e2470dafd.png"),
  },
  {
    name: "Aussie Surf and Turf",
    ingredients: [
      {
        name: "shrimp",
        quantity: "1 lb",
      },
      {
        name: "beef sirloin",
        quantity: "2 lbs",
      },
      {
        name: "lamb chops",
        quantity: "1 lb",
      },
      {
        name: "olive oil",
        quantity: "1/4 cup",
      },
      {
        name: "lemon juice",
        quantity: "1/4 cup",
      },
      {
        name: "garlic",
        quantity: "3 cloves, minced",
      },
      {
        name: "rosemary",
        quantity: "2 tbsp, chopped",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat grill to medium-high heat.",
      "In a small bowl, whisk together olive oil, lemon juice, garlic, rosemary, salt, and pepper.",
      "Brush the marinade over the beef, lamb, and shrimp.",
      "Grill the beef and lamb for 4-5 minutes per side for medium-rare, or until desired doneness is reached.",
      "Grill the shrimp for 2-3 minutes per side, or until pink and opaque.",
      "Remove from grill and let rest for a few minutes before slicing and serving.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Australian"],
    meal_time: ["Dinner"],
    calories_estimate: 750,
    tags: ["grill", "surf and turf", "outdoor cooking"],
    image_caption_prompt:
      "Generate an image featuring a delicious Aussie Surf and Turf meal, with juicy grilled shrimp, tender beef sirloin, and succulent lamb chops, all marinated in a flavorful mixture of olive oil, lemon juice, garlic, and rosemary. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "01097614-2160-4f4d-b957-5092522b582d",
    image: require("../../assets/recipe-images/Aussie-Surf-and-Turf-01097614-2160-4f4d-b957-5092522b582d.png"),
  },
  {
    name: "Classic Peruvian Ceviche",
    ingredients: [
      {
        name: "white fish",
        quantity: "1 lb",
      },
      {
        name: "red onion",
        quantity: "1",
      },
      {
        name: "rocoto chili pepper",
        quantity: "1",
      },
      {
        name: "lime juice",
        quantity: "1 cup",
      },
      {
        name: "cilantro",
        quantity: "1/2 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "sweet potato",
        quantity: "1",
      },
      {
        name: "corn",
        quantity: "1/2 cup",
      },
    ],
    instructions: [
      "Cut the fish into bite-sized pieces and place in a bowl.",
      "Thinly slice the red onion and add to the bowl with the fish.",
      "Slice the rocoto chili pepper and remove the seeds. Mince the pepper and add to the bowl.",
      "Add the lime juice, cilantro, and salt to the bowl and mix well.",
      "Cover the bowl with plastic wrap and refrigerate for at least 30 minutes to marinate the fish.",
      "Peel and dice the sweet potato. Boil in salted water for about 10 minutes or until tender. Drain and set aside.",
      "Boil the corn for 5-7 minutes or until tender. Drain and set aside.",
      "Serve the ceviche cold with the sweet potato and corn on the side.",
    ],
    cooking_time_minutes: 40,
    complexity: "Medium",
    cuisines: ["Peruvian"],
    meal_time: ["Appetizer"],
    calories_estimate: 300,
    tags: ["seafood", "healthy", "gluten-free", "spicy"],
    image_caption_prompt:
      "Generate an image featuring a zesty and light Classic Peruvian Ceviche made with fresh white fish marinated in lime juice and chili peppers, then garnished with red onion and cilantro. Include a side of boiled sweet potato and corn. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "78f3bd30-9fb0-4089-bff1-9cc0ecf49d58",
    image: require("../../assets/recipe-images/Classic-Peruvian-Ceviche-78f3bd30-9fb0-4089-bff1-9cc0ecf49d58.png"),
  },
  {
    name: "Tropical Tuna Poke Bowl",
    ingredients: [
      {
        name: "sushi grade tuna",
        quantity: "1 lb",
      },
      {
        name: "avocado",
        quantity: "1",
      },
      {
        name: "pineapple",
        quantity: "1/2",
      },
      {
        name: "mango",
        quantity: "1/2",
      },
      {
        name: "rice",
        quantity: "2 cups",
      },
      {
        name: "soy sauce",
        quantity: "1/4 cup",
      },
      {
        name: "sesame oil",
        quantity: "1 tbsp",
      },
      {
        name: "sriracha",
        quantity: "1 tbsp",
      },
      {
        name: "lime juice",
        quantity: "1 tbsp",
      },
      {
        name: "sesame seeds",
        quantity: "1 tbsp",
      },
      {
        name: "green onions",
        quantity: "2",
      },
    ],
    instructions: [
      "Cook the rice according to package instructions and let cool.",
      "Cut the tuna into bite-sized pieces.",
      "In a small bowl, whisk together the soy sauce, sesame oil, sriracha, and lime juice.",
      "In a large bowl, combine the cooked rice, tuna, diced avocado, diced pineapple, and diced mango.",
      "Pour the soy sauce mixture over the bowl and toss to combine.",
      "Garnish with sesame seeds and sliced green onions.",
      "Serve immediately.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Hawaiian", "Japanese"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["tuna", "poke bowl", "tropical", "summer"],
    image_caption_prompt:
      "Generate an image featuring a Tropical Tuna Poke Bowl with bright yellow pineapple, juicy mango, creamy avocado, and fresh sushi-grade tuna, all tossed with a flavorful soy sauce dressing. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "4a8bc593-34fc-4262-8fe1-a8f2fd2972fa",
    image: require("../../assets/recipe-images/Tropical-Tuna-Poke-Bowl-4a8bc593-34fc-4262-8fe1-a8f2fd2972fa.png"),
  },
  {
    name: "Belgian Style Moules-Frites",
    ingredients: [
      {
        name: "mussels",
        quantity: "2 lbs",
      },
      {
        name: "unsalted butter",
        quantity: "4 tbsp",
      },
      {
        name: "shallot",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "white wine",
        quantity: "1 cup",
      },
      {
        name: "heavy cream",
        quantity: "1/2 cup",
      },
      {
        name: "parsley",
        quantity: "1/4 cup",
      },
      {
        name: "french fries",
        quantity: "1 lb",
      },
      {
        name: "vegetable oil",
        quantity: "4 cups",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "In a large pot, melt the butter over medium heat.",
      "Add the shallot and garlic and cook until soft, about 3 minutes.",
      "Add the mussels and white wine. Cover and cook for about 5 minutes, or until the mussels have opened up.",
      "Remove the mussels from the pot and set aside.",
      "Add the heavy cream to the pot and simmer for about 5 minutes, or until the sauce has thickened.",
      "Add the parsley and stir to combine.",
      "Season the sauce with salt and pepper to taste.",
      "In a separate pot, heat the vegetable oil over medium-high heat.",
      "Add the french fries and cook until golden brown and crispy, about 5-7 minutes.",
      "Remove the fries from the pot and drain on a paper towel.",
      "Serve the mussels with the sauce and fries on the side.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Belgian"],
    meal_time: ["Dinner"],
    calories_estimate: 800,
    tags: ["seafood", "french fries", "dinner", "Belgian cuisine"],
    image_caption_prompt:
      "Generate an image featuring a classic Belgian dish of Moules-Frites with fresh mussels in a creamy white wine sauce and a side of crispy french fries. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "aac32224-9b4f-4fa2-ad06-b0438e3742ec",
    image: require("../../assets/recipe-images/Belgian-Style-Moules-Frites-aac32224-9b4f-4fa2-ad06-b0438e3742ec.png"),
  },
  {
    name: "Classic Dutch Pancakes",
    ingredients: [
      {
        name: "all-purpose flour",
        quantity: "1 1/2 cups",
      },
      {
        name: "eggs",
        quantity: "3",
      },
      {
        name: "milk",
        quantity: "1 1/2 cups",
      },
      {
        name: "salt",
        quantity: "1/4 tsp",
      },
      {
        name: "butter",
        quantity: "3 tbsp",
      },
      {
        name: "syrup",
        quantity: "1/2 cup",
      },
      {
        name: "powdered sugar",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "In a large mixing bowl, whisk together the flour, eggs, milk, and salt until smooth.",
      "In a large frying pan, melt the butter over medium heat.",
      "Pour 1/4 cup of the batter into the frying pan and swirl it around to create a thin layer.",
      "Cook for 1-2 minutes on each side until golden brown.",
      "Repeat with the remaining batter.",
      "Serve hot with syrup and powdered sugar.",
    ],
    cooking_time_minutes: 30,
    complexity: "Easy",
    cuisines: ["Dutch"],
    meal_time: ["Breakfast", "Dessert"],
    calories_estimate: 300,
    tags: ["pancakes", "syrup", "powdered sugar", "Dutch cuisine"],
    image_caption_prompt:
      "Generate an image featuring a stack of golden-brown Classic Dutch Pancakes, drizzled with syrup and dusted with powdered sugar. Ensure that all the pancakes and toppings are clearly visible and nothing important is cut or cropped.",
    id: "34205be1-fa1b-4e64-ae39-edbd58d1924c",
    image: require("../../assets/recipe-images/Classic-Dutch-Pancakes-34205be1-fa1b-4e64-ae39-edbd58d1924c.png"),
  },
  {
    name: "Classic Shakshuka",
    ingredients: [
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "onion",
        quantity: "1, chopped",
      },
      {
        name: "garlic",
        quantity: "3 cloves, minced",
      },
      {
        name: "red bell pepper",
        quantity: "1, chopped",
      },
      {
        name: "tomatoes",
        quantity: "4, chopped",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "cayenne pepper",
        quantity: "1/4 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
      {
        name: "eggs",
        quantity: "4",
      },
      {
        name: "fresh parsley",
        quantity: "1/4 cup, chopped",
      },
    ],
    instructions: [
      "In a large skillet, heat the olive oil over medium heat.",
      "Add the onion and garlic, and cook until the onion is translucent.",
      "Add the red bell pepper, and cook for another 5 minutes.",
      "Add the chopped tomatoes, paprika, cumin, cayenne pepper, salt, and black pepper. Stir to combine.",
      "Simmer the tomato sauce for about 10 minutes, until it thickens.",
      "Crack the eggs into the skillet, one at a time, on top of the tomato sauce.",
      "Cover the skillet, and let the eggs cook until the whites are set and the yolks are still runny, about 5-7 minutes.",
      "Garnish with chopped fresh parsley before serving.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Middle Eastern"],
    meal_time: ["Breakfast"],
    calories_estimate: 300,
    tags: [
      "vegetarian",
      "gluten-free",
      "shakshuka",
      "Middle Eastern breakfast",
    ],
    image_caption_prompt:
      "Generate an image featuring a classic Shakshuka made with a flavorful tomato sauce, topped with perfectly cooked eggs, and garnished with fresh parsley. Include a side of olives and a dollop of labneh. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "47006881-92b0-4924-91db-a0f7d2e4cabb",
    image: require("../../assets/recipe-images/Classic-Shakshuka-47006881-92b0-4924-91db-a0f7d2e4cabb.png"),
  },
  {
    name: "Bacalhau \u00e0 Br\u00e1s with Salted Cod, Potatoes, and Eggs",
    ingredients: [
      {
        name: "salted cod",
        quantity: "1 lb",
      },
      {
        name: "potatoes",
        quantity: "4",
      },
      {
        name: "eggs",
        quantity: "4",
      },
      {
        name: "olive oil",
        quantity: "1/4 cup",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "bay leaves",
        quantity: "2",
      },
      {
        name: "black olives",
        quantity: "1/2 cup",
      },
      {
        name: "parsley",
        quantity: "1/2 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Soak the salted cod overnight in water to remove excess salt. Drain and rinse the cod.",
      "Cut the potatoes into thin strips and fry them in olive oil until golden brown. Remove and drain on paper towels.",
      "In the same pan, saut\u00e9 the onion and garlic until fragrant. Add the bay leaves and cod, and cook for 5 minutes.",
      "Add the fried potatoes to the pan and mix well.",
      "Beat the eggs in a separate bowl. Add the eggs to the pan and mix well until the eggs are fully cooked.",
      "Add the black olives and parsley to the pan. Season with salt and black pepper to taste.",
      "Serve hot.",
    ],
    cooking_time_minutes: 60,
    complexity: "Medium",
    cuisines: ["Portuguese"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["traditional", "salted cod", "eggs", "potatoes"],
    image_caption_prompt:
      "Generate an image centered around a steaming hot and hearty plate of Bacalhau \u00e0 Br\u00e1s. The dish should feature flaky salted cod, crispy fried potatoes, and creamy scrambled eggs, all mixed together with fragrant onions and garlic. Add a sprinkle of black olives and parsley on top. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "b68804bc-9084-4359-935a-b7b42dfb0851",
    image: require("../../assets/recipe-images/Bacalhau-Br-s-with-Salted-Cod-Potatoes-and-Eggs-b68804bc-9084-4359-935a-b7b42dfb0851.png"),
  },
  {
    name: "Jamaican Ackee and Saltfish with Fried Dumplings",
    ingredients: [
      {
        name: "ackee",
        quantity: "1 can",
      },
      {
        name: "cod fish",
        quantity: "1 lb",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "scallion",
        quantity: "1/2 cup",
      },
      {
        name: "tomato",
        quantity: "1",
      },
      {
        name: "scotch bonnet pepper",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "2 cloves",
      },
      {
        name: "thyme",
        quantity: "1 tbsp",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "flour",
        quantity: "1 cup",
      },
      {
        name: "cornmeal",
        quantity: "1/4 cup",
      },
      {
        name: "baking powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "1/2 tsp",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "water",
        quantity: "1/2 cup",
      },
    ],
    instructions: [
      "Drain the ackee and rinse with water. Set aside.",
      "Soak the cod fish in water overnight to remove excess salt.",
      "Boil the cod fish for 10 minutes, then drain and flake it.",
      "Heat oil in a large skillet over medium heat. Add onion, scallion, garlic, thyme, and scotch bonnet pepper. Cook until the onion is translucent.",
      "Add the tomato and cook for another 2 minutes.",
      "Add the ackee and cod fish. Stir gently to combine. Cook for 5 minutes.",
      "Season with black pepper to taste.",
      "To make the dumplings, mix flour, cornmeal, baking powder, salt, and sugar in a bowl.",
      "Add water gradually to form a smooth dough. Knead the dough for 5 minutes.",
      "Divide the dough into 6-8 pieces. Roll each piece into a ball and flatten into a disc.",
      "Heat oil in a frying pan over medium heat. Fry the dumplings until golden brown, about 5 minutes on each side.",
      "Serve the ackee and saltfish with fried dumplings.",
    ],
    cooking_time_minutes: 45,
    complexity: "Intermediate",
    cuisines: ["Jamaican"],
    meal_time: ["Breakfast", "Lunch"],
    calories_estimate: 600,
    tags: ["Caribbean", "fish", "dumplings"],
    image_caption_prompt:
      "Generate an image featuring a mouth-watering plate of Jamaican Ackee and Saltfish with Fried Dumplings. The plate should be centered, and the dish should be garnished with scallions and tomatoes. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "b94a09e3-1bde-4b1f-9046-70ddb52d4719",
    image: require("../../assets/recipe-images/Jamaican-Ackee-and-Saltfish-with-Fried-Dumplings-b94a09e3-1bde-4b1f-9046-70ddb52d4719.png"),
  },
  {
    name: "Argentinian Asado: Mixed Grill",
    ingredients: [
      {
        name: "beef flank steak",
        quantity: "1 lb",
      },
      {
        name: "chicken thighs",
        quantity: "1 lb",
      },
      {
        name: "chorizo sausages",
        quantity: "4",
      },
      {
        name: "sweet potatoes",
        quantity: "2 large",
      },
      {
        name: "red bell pepper",
        quantity: "1",
      },
      {
        name: "green bell pepper",
        quantity: "1",
      },
      {
        name: "olive oil",
        quantity: "1/4 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat grill to high heat.",
      "Slice the sweet potatoes into 1/4-inch rounds.",
      "Cut the bell peppers into 1-inch pieces.",
      "In a large bowl, toss the sweet potatoes and bell peppers with olive oil, salt, and black pepper.",
      "Grill the flank steak, chicken thighs, and chorizo sausages until cooked to your desired level of doneness.",
      "Grill the sweet potatoes and bell peppers until lightly charred and cooked through.",
      "Serve the grilled meats and vegetables hot with chimichurri sauce.",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["Argentinian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 800,
    tags: ["meat lover's delight", "grilling", "chimichurri sauce"],
    image_caption_prompt:
      "Generate an image featuring sizzling Argentinian Asado mixed grill with juicy beef flank steak, succulent chicken thighs, and flavorful chorizo sausages alongside charred sweet potatoes and bell peppers, all drizzled with tangy chimichurri sauce. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "6f9e1961-9f17-4746-a87f-45b5ac5bd2ce",
    image: require("../../assets/recipe-images/Argentinian-Asado-Mixed-Grill-6f9e1961-9f17-4746-a87f-45b5ac5bd2ce.png"),
  },
  {
    name: "Classic Hainanese Chicken Rice",
    ingredients: [
      {
        name: "chicken",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "6 cloves",
      },
      {
        name: "ginger",
        quantity: "2 inches",
      },
      {
        name: "rice",
        quantity: "2 cups",
      },
      {
        name: "chicken broth",
        quantity: "2 cups",
      },
      {
        name: "soy sauce",
        quantity: "2 tbsp",
      },
      {
        name: "sesame oil",
        quantity: "1 tbsp",
      },
      {
        name: "scallions",
        quantity: "2",
      },
      {
        name: "cilantro",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "Wash the rice and soak it in water for 20 minutes.",
      "In a pot, heat 2 tbsp of oil over medium heat. Add garlic and ginger and cook until fragrant.",
      "Add the rice and stir for 1-2 minutes.",
      "Add chicken broth and bring to a boil. Reduce heat to low, cover, and cook for 20 minutes.",
      "While the rice is cooking, place the chicken in a pot and add enough water to cover. Bring to a boil and then reduce heat to low. Cover and cook for 30 minutes or until cooked through.",
      "Remove the chicken from the pot and let it cool. Save the broth for later.",
      "Mix soy sauce and sesame oil in a small bowl.",
      "Chop scallions and cilantro.",
      "When the rice is done, fluff it with a fork. Add scallions and cilantro and mix well.",
      "Serve the chicken with rice and soy sauce mixture.",
    ],
    cooking_time_minutes: 70,
    complexity: "Intermediate",
    cuisines: ["Singaporean"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 600,
    tags: ["comfort food", "healthy", "gluten-free"],
    image_caption_prompt:
      "Generate an image featuring a classic Hainanese chicken rice dish, with a whole poached chicken, fluffy rice, and a small bowl of soy sauce mixture. Include chopped scallions and cilantro as garnish. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "f62fd7b5-3571-4c83-9e72-4c36e6c1d03b",
    image: require("../../assets/recipe-images/Classic-Hainanese-Chicken-Rice-f62fd7b5-3571-4c83-9e72-4c36e6c1d03b.png"),
  },
  {
    name: "Classic Hungarian Goulash",
    ingredients: [
      {
        name: "beef stew meat",
        quantity: "2 lbs",
      },
      {
        name: "onion",
        quantity: "2 medium",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "tomato paste",
        quantity: "2 tbsp",
      },
      {
        name: "paprika",
        quantity: "3 tbsp",
      },
      {
        name: "carrots",
        quantity: "2 medium",
      },
      {
        name: "potatoes",
        quantity: "2 medium",
      },
      {
        name: "beef broth",
        quantity: "4 cups",
      },
      {
        name: "bay leaves",
        quantity: "2",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
      {
        name: "flour",
        quantity: "2 tbsp",
      },
      {
        name: "water",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "In a large pot or Dutch oven, brown the beef in some oil over medium-high heat. Remove from the pot and set aside.",
      "Add the onions and garlic to the same pot and cook until soft.",
      "Add the tomato paste and paprika and cook for another minute.",
      "Add the carrots, potatoes, beef broth, bay leaves, and beef. Bring to a boil, then reduce heat to low and simmer for 2-3 hours, or until the beef is tender.",
      "In a small bowl, mix the flour and water to make a slurry. Add this to the pot and stir well. Simmer for another 10-15 minutes until the sauce has thickened.",
      "Season with salt and pepper to taste.",
      "Serve with dumplings or crusty bread.",
    ],
    cooking_time_minutes: 180,
    complexity: "Intermediate",
    cuisines: ["Hungarian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["beef", "paprika", "hearty", "stew"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of Classic Hungarian Goulash, filled with tender beef, potatoes, and carrots in a rich paprika sauce. Include a side of dumplings or crusty bread. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "343d27c8-bfa9-410f-8183-305ab1ea2ad6",
    image: require("../../assets/recipe-images/Classic-Hungarian-Goulash-343d27c8-bfa9-410f-8183-305ab1ea2ad6.png"),
  },
  {
    name: "Vegetarian Nasi Goreng",
    ingredients: [
      {
        name: "cooked rice",
        quantity: "2 cups",
      },
      {
        name: "tofu",
        quantity: "1 cup, cubed",
      },
      {
        name: "carrots",
        quantity: "1, sliced",
      },
      {
        name: "peas",
        quantity: "1 cup",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "shallots",
        quantity: "2",
      },
      {
        name: "bird's eye chili",
        quantity: "3",
      },
      {
        name: "kecap manis",
        quantity: "2 tbsp",
      },
      {
        name: "soy sauce",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Heat the oil in a wok or large skillet over high heat.",
      "Add the garlic, shallots, and bird's eye chili. Stir-fry until fragrant.",
      "Add the tofu and cook until brown, then remove from the wok and set aside.",
      "Add the carrots and peas to the wok and stir-fry for a few minutes.",
      "Add the cooked rice to the wok and stir-fry for another few minutes.",
      "Add the kecap manis, soy sauce, salt, and pepper. Stir-fry for another minute.",
      "Add the tofu back to the wok and stir-fry to combine.",
      "Serve hot with sambal and garnish with kaffir lime leaves.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Indonesian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["vegetarian", "fried rice", "sambal"],
    image_caption_prompt:
      "Generate an image featuring a delicious Vegetarian Nasi Goreng with fluffy fried rice, golden-brown tofu, sweet carrots, and fresh peas. Ensure that the sambal is visible in the corner of the image.",
    id: "2fa20d0f-58e2-4879-b68e-ac0569336ed4",
    image: require("../../assets/recipe-images/Vegetarian-Nasi-Goreng-2fa20d0f-58e2-4879-b68e-ac0569336ed4.png"),
  },
  {
    name: "Soda Bread Breakfast Sandwich",
    ingredients: [
      {
        name: "soda bread",
        quantity: "2 slices",
      },
      {
        name: "sausage patty",
        quantity: "1",
      },
      {
        name: "black pudding",
        quantity: "1 slice",
      },
      {
        name: "eggs",
        quantity: "2",
      },
      {
        name: "cheddar cheese",
        quantity: "2 slices",
      },
      {
        name: "butter",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat the oven to 375\u00b0F.",
      "Heat a skillet over medium heat. Add the sausage patty and cook until browned and cooked through. Remove from the skillet and set aside.",
      "In the same skillet, add the black pudding and cook until crispy and browned. Remove from the skillet and set aside.",
      "In a separate skillet, melt the butter over medium heat. Crack the eggs into the skillet and cook until the whites are set and the yolks are still runny. Season with salt and pepper.",
      "Place the soda bread slices on a baking sheet and heat in the preheated oven for 5 minutes.",
      "Assemble the sandwich by placing one slice of cheddar cheese on each slice of soda bread. Add the sausage patty, black pudding, and fried eggs on top.",
      "Cover with the second slice of cheddar cheese and the other slice of soda bread.",
      "Place the sandwich in the preheated oven and bake until the cheese is melted and bubbly, about 5-7 minutes.",
      "Serve hot and enjoy!",
    ],
    cooking_time_minutes: 25,
    complexity: "Intermediate",
    cuisines: ["Irish"],
    meal_time: ["Breakfast"],
    calories_estimate: 700,
    tags: ["hearty", "meat", "sandwich"],
    image_caption_prompt:
      "Create an image featuring a delicious Soda Bread Breakfast Sandwich with a sausage patty, black pudding, fried eggs, and melted cheddar cheese, sandwiched between two slices of warm soda bread. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "a59d2450-b602-4346-a122-815520f5146e",
    image: require("../../assets/recipe-images/Soda-Bread-Breakfast-Sandwich-a59d2450-b602-4346-a122-815520f5146e.png"),
  },
  {
    name: "Ropa Vieja Bowl",
    ingredients: [
      {
        name: "flank steak",
        quantity: "1 lb",
      },
      {
        name: "onion",
        quantity: "1 medium",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "dried oregano",
        quantity: "1 tsp",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "canned diced tomatoes",
        quantity: "14.5 oz",
      },
      {
        name: "red bell pepper",
        quantity: "1",
      },
      {
        name: "green bell pepper",
        quantity: "1",
      },
      {
        name: "beef broth",
        quantity: "1/2 cup",
      },
      {
        name: "cooked white rice",
        quantity: "2 cups",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Season the flank steak with salt, pepper, cumin, oregano, and paprika.",
      "In a large skillet, heat the olive oil over medium-high heat.",
      "Add the flank steak and sear on both sides until browned. Remove from the skillet and set aside.",
      "Add the onion, garlic, red and green bell peppers to the skillet. Cook until softened, about 5 minutes.",
      "Add the canned tomatoes, beef broth, salt, and pepper to taste. Stir to combine.",
      "Return the flank steak to the skillet and spoon the tomato mixture over it. Cover and simmer on low heat for 2-3 hours, or until the beef is tender and shreds easily.",
      "Shred the beef with a fork and serve over cooked white rice.",
    ],
    cooking_time_minutes: 180,
    complexity: "Intermediate",
    cuisines: ["Latin American"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 450,
    tags: ["beef", "tomatoes", "rice", "bowl"],
    image_caption_prompt:
      "Generate an image featuring a colorful Ropa Vieja Bowl filled with tender shredded beef, juicy tomatoes, and flavorful bell peppers, served over a bed of fluffy white rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "ba7bc767-c671-49bf-a062-7c57e73a3ab2",
    image: require("../../assets/recipe-images/Ropa-Vieja-Bowl-ba7bc767-c671-49bf-a062-7c57e73a3ab2.png"),
  },
  {
    name: "Vegetarian Malaysian Laksa",
    ingredients: [
      {
        name: "dried rice noodles",
        quantity: "200g",
      },
      {
        name: "firm tofu",
        quantity: "200g",
      },
      {
        name: "coconut milk",
        quantity: "1 can",
      },
      {
        name: "vegetable stock",
        quantity: "2 cups",
      },
      {
        name: "lemongrass",
        quantity: "2 stalks",
      },
      {
        name: "galangal",
        quantity: "2 inch piece",
      },
      {
        name: "red chili",
        quantity: "2",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "coriander",
        quantity: "1/2 cup",
      },
      {
        name: "lime",
        quantity: "1",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "vegetable oil",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Soak the dried rice noodles in hot water for 10 minutes, then drain and set aside.",
      "Cut the tofu into small cubes and set aside.",
      "In a blender, blend the lemongrass, galangal, red chili, garlic, onion, and coriander to make a paste.",
      "Heat the vegetable oil in a pot over medium heat. Add the paste and cook for 5 minutes, stirring occasionally.",
      "Add the vegetable stock and coconut milk to the pot and bring to a boil. Reduce heat to low and let simmer for 10 minutes.",
      "Add the cubed tofu to the pot and cook for 2-3 minutes until heated through.",
      "Add salt and sugar to taste.",
      "Divide the rice noodles between two bowls. Pour the laksa soup with tofu over the noodles.",
      "Garnish with lime wedges and more fresh coriander.",
      "Serve immediately.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Malaysian", "Vegetarian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 450,
    tags: ["spicy", "vegetarian", "coconut milk"],
    image_caption_prompt:
      "Generate an image centered around a steaming bowl of Vegetarian Malaysian Laksa, featuring a spicy soup with coconut milk, vegetable stock, and fresh herbs, served over a bed of soft rice noodles and topped with cubes of firm tofu. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "f6b912fa-6fa2-4e92-87e6-486d7a00aac6",
    image: require("../../assets/recipe-images/Vegetarian-Malaysian-Laksa-f6b912fa-6fa2-4e92-87e6-486d7a00aac6.png"),
  },
  {
    name: "Herb-Crusted Roast Beef with Root Vegetables",
    ingredients: [
      {
        name: "beef roast",
        quantity: "2 lbs",
      },
      {
        name: "bread crumbs",
        quantity: "1 cup",
      },
      {
        name: "fresh parsley",
        quantity: "1/4 cup",
      },
      {
        name: "fresh thyme",
        quantity: "1/4 cup",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "potatoes",
        quantity: "4",
      },
      {
        name: "carrots",
        quantity: "4",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "beef broth",
        quantity: "1 cup",
      },
      {
        name: "olive oil",
        quantity: "1/4 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat the oven to 375\u00b0F.",
      "In a food processor, pulse together the bread crumbs, parsley, thyme, garlic, and a pinch of salt and pepper, until the mixture is finely chopped.",
      "Season the beef roast with salt and pepper.",
      "In a large skillet, heat the olive oil over high heat. Sear the beef roast on all sides until browned.",
      "Transfer the beef roast to a roasting pan. Rub the herb mixture all over the beef.",
      "Add the potatoes, carrots, and onion to the pan.",
      "Roast in the oven for 1 hour, or until the beef is cooked to your liking.",
      "In a separate baking dish, pour in the beef broth, and place it in the oven for 5 minutes to heat.",
      "Remove the baking dish from the oven and pour the broth into the roasting pan.",
      "Return the pan to the oven and roast for another 15-20 minutes, or until the vegetables are tender and the beef is golden brown.",
      "Remove the beef roast and vegetables from the oven, and let them rest for 10 minutes before carving.",
      "Serve the roast beef and vegetables with the pan juices.",
    ],
    cooking_time_minutes: 120,
    complexity: "Intermediate",
    cuisines: ["British"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 650,
    tags: ["family dinner", "herb-crusted", "roast beef"],
    image_caption_prompt:
      "Generate an image featuring a flavorful roast beef with a crispy herb crust, served with tender roasted root vegetables. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "68e7f497-7473-42bc-9126-a4c99797692d",
    image: require("../../assets/recipe-images/Herb-Crusted-Roast-Beef-with-Root-Vegetables-68e7f497-7473-42bc-9126-a4c99797692d.png"),
  },
  {
    name: "Vegetarian Jambalaya",
    ingredients: [
      {
        name: "vegetarian sausage",
        quantity: "1 lb",
      },
      {
        name: "bell pepper",
        quantity: "1",
      },
      {
        name: "celery",
        quantity: "1 stalk",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic cloves",
        quantity: "3",
      },
      {
        name: "tomato paste",
        quantity: "2 tbsp",
      },
      {
        name: "diced tomatoes",
        quantity: "1 can",
      },
      {
        name: "vegetable broth",
        quantity: "2 cups",
      },
      {
        name: "long grain rice",
        quantity: "1 1/2 cups",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "cayenne pepper",
        quantity: "1/2 tsp",
      },
      {
        name: "dried thyme",
        quantity: "1/2 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Slice the vegetarian sausage into bite-sized pieces.",
      "In a large pot, heat up some oil over medium-high heat. Add the vegetarian sausage, and cook until browned, about 5 minutes. Remove and set aside.",
      "In the same pot, add the onion, bell pepper, celery, and garlic. Cook until softened, about 5 minutes.",
      "Add the tomato paste, diced tomatoes, vegetable broth, rice, paprika, cayenne pepper, dried thyme, salt, and black pepper. Stir to combine.",
      "Bring to a boil, then reduce heat to low. Cover and simmer for 20-25 minutes, or until the rice is cooked and the liquid is absorbed.",
      "Add the cooked vegetarian sausage to the pot, and stir until heated through.",
      "Serve hot and enjoy!",
    ],
    cooking_time_minutes: 60,
    complexity: "Intermediate",
    cuisines: ["American", "Southern"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["jambalaya", "vegetarian", "rice"],
    image_caption_prompt:
      "Generate an image featuring a sizzling skillet of Vegetarian Jambalaya, with fluffy long-grain rice, meaty vegetarian sausage, and colorful bell peppers and celery. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "de9529d4-844b-41fa-a46f-27f5f27e2b5e",
    image: require("../../assets/recipe-images/Vegetarian-Jambalaya-de9529d4-844b-41fa-a46f-27f5f27e2b5e.png"),
  },
  {
    name: "Hearty Meat Pierogi",
    ingredients: [
      {
        name: "all-purpose flour",
        quantity: "2 cups",
      },
      {
        name: "warm water",
        quantity: "1/2 cup",
      },
      {
        name: "salt",
        quantity: "1/2 tsp",
      },
      {
        name: "ground pork",
        quantity: "1 lb",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "2 cloves",
      },
      {
        name: "carrots",
        quantity: "2",
      },
      {
        name: "potatoes",
        quantity: "2",
      },
      {
        name: "butter",
        quantity: "2 tbsp",
      },
      {
        name: "sour cream",
        quantity: "1/4 cup",
      },
      {
        name: "salt and pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "In a large bowl, mix flour and salt. Slowly pour in warm water, stirring constantly until a dough forms.",
      "Knead the dough on a floured surface for 5-7 minutes or until smooth.",
      "Cover the dough with a damp cloth and allow it to rest for at least 30 minutes.",
      "Peel and boil the potatoes and carrots until tender. Mash with butter and sour cream. Season with salt and pepper to taste.",
      "In a separate pan, saut\u00e9 chopped onions and garlic until translucent. Add ground pork and cook until browned.",
      "Mix the meat mixture with the mashed potatoes and carrots.",
      "Roll out the dough on a floured surface and cut into 3-inch circles with a cookie cutter.",
      "Place a spoonful of the meat mixture onto each circle of dough.",
      "Fold the dough over and pinch the edges together to seal.",
      "Bring a pot of salted water to a boil. Add the pierogi and cook for 3-5 minutes or until they float to the surface.",
      "Serve the pierogi with a dollop of sour cream on top.",
    ],
    cooking_time_minutes: 60,
    complexity: "Intermediate",
    cuisines: ["Polish"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 450,
    tags: ["comfort food", "meat", "dumplings"],
    image_caption_prompt:
      "Generate an image featuring a plate of Hearty Meat Pierogi, bursting with a savory pork and vegetable filling. Show the tender dough folded into a half-moon shape with the filling peeking out. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "9375fc11-3f86-4699-a4b2-57aa29b651fa",
    image: require("../../assets/recipe-images/Hearty-Meat-Pierogi-9375fc11-3f86-4699-a4b2-57aa29b651fa.png"),
  },
  {
    name: "Lamb Nihari",
    ingredients: [
      {
        name: "lamb shank",
        quantity: "2 lbs",
      },
      {
        name: "garlic paste",
        quantity: "2 tbsp",
      },
      {
        name: "ginger paste",
        quantity: "2 tbsp",
      },
      {
        name: "onions",
        quantity: "2",
      },
      {
        name: "red chili powder",
        quantity: "2 tbsp",
      },
      {
        name: "coriander powder",
        quantity: "2 tbsp",
      },
      {
        name: "turmeric powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "flour",
        quantity: "3 tbsp",
      },
      {
        name: "oil",
        quantity: "1/2 cup",
      },
      {
        name: "water",
        quantity: "6 cups",
      },
      {
        name: "fresh ginger",
        quantity: "1 inch",
      },
      {
        name: "green chili peppers",
        quantity: "4",
      },
      {
        name: "cilantro",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "In a large pot, heat the oil over medium heat. Add the onions and fry until golden brown.",
      "Add the lamb shank and fry on both sides until browned.",
      "Add the garlic paste, ginger paste, red chili powder, coriander powder, turmeric powder, garam masala powder, and salt. Mix well.",
      "Add enough water to cover the meat and bring to a boil. Reduce heat to low, cover the pot, and let the meat cook for 3-4 hours until it is very tender.",
      "In a separate pan, heat the flour and oil together until the mixture turns brown.",
      "Add the flour and oil mixture to the pot with the meat and mix well.",
      "Add the sliced ginger, green chili peppers, and cilantro. Mix well and let the nihari simmer for another 20-30 minutes.",
      "Serve hot with naan or rice.",
    ],
    cooking_time_minutes: 270,
    complexity: "Difficult",
    cuisines: ["Pakistani", "Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["lamb", "spicy", "slow-cooked", "rich"],
    image_caption_prompt:
      "Generate an image centered around a flavorful Lamb Nihari with tender lamb shank, spicy broth, and aromatic spices like ginger and garam masala. Serve with hot naan or rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "a5033fd5-1402-4ea6-ba9e-1794c40e3449",
    image: require("../../assets/recipe-images/Lamb-Nihari-a5033fd5-1402-4ea6-ba9e-1794c40e3449.png"),
  },
  {
    name: "Vegetarian Sichuan Hot Pot",
    ingredients: [
      {
        name: "tofu",
        quantity: "1 block",
      },
      {
        name: "napa cabbage",
        quantity: "1 head",
      },
      {
        name: "fresh shiitake mushrooms",
        quantity: "1 lb",
      },
      {
        name: "baby bok choy",
        quantity: "1 lb",
      },
      {
        name: "bean sprouts",
        quantity: "1 lb",
      },
      {
        name: "enoki mushrooms",
        quantity: "1 lb",
      },
      {
        name: "Sichuan peppercorns",
        quantity: "2 tbsp",
      },
      {
        name: "dried red chili peppers",
        quantity: "10",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "ginger",
        quantity: "1 inch",
      },
      {
        name: "green onions",
        quantity: "4",
      },
      {
        name: "Sichuan hot pot sauce",
        quantity: "1 cup",
      },
      {
        name: "vegetable broth",
        quantity: "8 cups",
      },
    ],
    instructions: [
      "Fill a large pot with vegetable broth and bring to a boil.",
      "Add Sichuan peppercorns, dried red chili peppers, garlic, ginger, and green onions to the pot. Simmer for 10 minutes.",
      "Cut the tofu into bite-sized pieces. Arrange all the ingredients on a large platter.",
      "Transfer the hot pot sauce to a small bowl.",
      "To serve, bring the pot of broth to the table and place it on a portable stove or hot plate. Each person can add their desired ingredients to the pot and cook them until they are done. Dip the cooked food into the hot pot sauce before eating.",
    ],
    cooking_time_minutes: 30,
    complexity: "Easy",
    cuisines: ["Chinese"],
    meal_time: ["Dinner"],
    calories_estimate: 300,
    tags: ["vegetarian", "communal dining", "hot pot"],
    image_caption_prompt:
      "Generate an image featuring a Vegetarian Sichuan Hot Pot filled with a variety of ingredients such as tofu, napa cabbage, fresh shiitake mushrooms, baby bok choy, bean sprouts, and enoki mushrooms. The pot should be bubbling with the fragrant broth and all the ingredients should be clearly visible. Ensure that nothing important is cut or cropped.",
    id: "d083889e-4b90-46bb-ae8d-e90d2b0f25a7",
    image: require("../../assets/recipe-images/Vegetarian-Sichuan-Hot-Pot-d083889e-4b90-46bb-ae8d-e90d2b0f25a7.png"),
  },
  {
    name: "Smoked Salmon and Cucumber Sm\u00f8rrebr\u00f8d",
    ingredients: [
      {
        name: "rye bread",
        quantity: "2 slices",
      },
      {
        name: "smoked salmon",
        quantity: "2 oz",
      },
      {
        name: "cucumber",
        quantity: "1/2",
      },
      {
        name: "cream cheese",
        quantity: "1 tbsp",
      },
      {
        name: "dill",
        quantity: "1 sprig",
      },
    ],
    instructions: [
      "Toast the rye bread slices.",
      "Spread the cream cheese on top of the bread slices.",
      "Top with smoked salmon and sliced cucumber.",
      "Garnish with fresh dill.",
      "Serve immediately.",
    ],
    cooking_time_minutes: 10,
    complexity: "Easy",
    cuisines: ["Danish"],
    meal_time: ["Lunch"],
    calories_estimate: 250,
    tags: ["pescatarian", "low-carb", "high-protein"],
    image_caption_prompt:
      "Generate an image featuring a delicious Smoked Salmon and Cucumber Sm\u00f8rrebr\u00f8d topped with creamy cream cheese and fresh dill. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "51c97d19-c799-4323-b581-cf96ada26fb2",
    image: require("../../assets/recipe-images/Smoked-Salmon-and-Cucumber-Sm-rrebr-d-51c97d19-c799-4323-b581-cf96ada26fb2.png"),
  },
  {
    name: "Spicy Beef and Olive Empanadas",
    ingredients: [
      {
        name: "ground beef",
        quantity: "1 lb",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "chili powder",
        quantity: "1 tsp",
      },
      {
        name: "olives",
        quantity: "1/2 cup",
      },
      {
        name: "flour",
        quantity: "3 cups",
      },
      {
        name: "butter",
        quantity: "1 stick",
      },
      {
        name: "water",
        quantity: "1 cup",
      },
    ],
    instructions: [
      "Heat a large skillet over medium heat and cook the ground beef until browned.",
      "Add the diced onion, paprika, cumin, and chili powder to the skillet and cook until the onion is translucent.",
      "Add the olives to the skillet and cook for an additional 5 minutes.",
      "In a separate bowl, mix together the flour, butter, and water to form a dough.",
      "Roll out the dough on a floured surface and cut into circles.",
      "Place a spoonful of the beef mixture onto each circle of dough.",
      "Fold the dough over the filling and crimp the edges to seal.",
      "Place the empanadas on a baking sheet and bake in the oven at 375\u00b0F for 30 minutes or until golden brown.",
    ],
    cooking_time_minutes: 60,
    complexity: "Intermediate",
    cuisines: ["Chilean"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["beef", "empanadas", "savory", "spicy", "olives", "pastry"],
    image_caption_prompt:
      "Create an image featuring Spicy Beef and Olive Empanadas. The savory pastry is filled with spiced ground beef, onions, and olives. The pastry is golden brown and crispy, and the filling is oozing out. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "7ef55302-6b85-42ed-9832-0d3222a7d556",
    image: require("../../assets/recipe-images/Spicy-Beef-and-Olive-Empanadas-7ef55302-6b85-42ed-9832-0d3222a7d556.png"),
  },
  {
    name: "Bobotie with Lamb",
    ingredients: [
      {
        name: "minced lamb",
        quantity: "500g",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "2 cloves",
      },
      {
        name: "curry powder",
        quantity: "2 tbsp",
      },
      {
        name: "turmeric",
        quantity: "1 tsp",
      },
      {
        name: "ground cumin",
        quantity: "1 tsp",
      },
      {
        name: "ground coriander",
        quantity: "1 tsp",
      },
      {
        name: "ground ginger",
        quantity: "1 tsp",
      },
      {
        name: "chutney",
        quantity: "2 tbsp",
      },
      {
        name: "white bread",
        quantity: "2 slices",
      },
      {
        name: "milk",
        quantity: "1 cup",
      },
      {
        name: "bay leaves",
        quantity: "2",
      },
      {
        name: "eggs",
        quantity: "3",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Preheat the oven to 180\u00b0C.",
      "In a large pan, heat the oil over medium heat. Add the onion and garlic and saut\u00e9 until soft and fragrant.",
      "Add the minced lamb to the pan and cook until browned.",
      "Add the curry powder, turmeric, cumin, coriander, and ginger to the pan and stir until the spices are well combined with the meat.",
      "Add the chutney to the pan and mix well.",
      "Soak the bread slices in milk and squeeze out the excess. Add the bread to the pan and stir until well combined.",
      "Remove the pan from the heat and transfer the mixture to a baking dish. Smooth the top with a spoon.",
      "In a separate bowl, beat the eggs and season with salt and pepper. Pour the egg mixture over the meat mixture in the baking dish.",
      "Place the bay leaves on top of the egg mixture.",
      "Bake for 30-40 minutes or until the egg custard is golden brown and set.",
      "Serve hot with yellow rice and sambal.",
    ],
    cooking_time_minutes: 60,
    complexity: "Medium",
    cuisines: ["South African"],
    meal_time: ["Dinner"],
    calories_estimate: 550,
    tags: ["minced lamb", "spices", "egg custard"],
    image_caption_prompt:
      "Generate an image featuring a delicious Bobotie with Lamb, a South African classic dish with spicy minced lamb topped with a golden egg custard. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "82dc36a1-8c18-468f-acdc-97028b8918de",
    image: require("../../assets/recipe-images/Bobotie-with-Lamb-82dc36a1-8c18-468f-acdc-97028b8918de.png"),
  },
  {
    name: "Koshari Salad with Lemon Vinaigrette",
    ingredients: [
      {
        name: "rice",
        quantity: "1 cup",
      },
      {
        name: "brown lentils",
        quantity: "1 cup",
      },
      {
        name: "elbow macaroni",
        quantity: "1 cup",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "coriander",
        quantity: "1 tsp",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "cayenne pepper",
        quantity: "1/4 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
      {
        name: "romaine lettuce",
        quantity: "2 cups",
      },
      {
        name: "cherry tomatoes",
        quantity: "1 cup",
      },
      {
        name: "cucumber",
        quantity: "1",
      },
      {
        name: "red onion",
        quantity: "1/2",
      },
      {
        name: "lemon",
        quantity: "1",
      },
      {
        name: "dijon mustard",
        quantity: "1 tbsp",
      },
      {
        name: "honey",
        quantity: "1 tbsp",
      },
    ],
    instructions: [
      "Cook the rice and lentils separately according to package instructions.",
      "Cook the elbow macaroni according to package instructions.",
      "In a large saucepan, heat the olive oil over medium heat.",
      "Add the garlic, cumin, coriander, paprika, cayenne pepper, salt, and black pepper.",
      "Cook for 1-2 minutes until fragrant.",
      "Add the cooked rice, lentils, and elbow macaroni to the saucepan. Stir to combine and cook until heated through.",
      "In a large bowl, mix together the romaine lettuce, cherry tomatoes, cucumber, and red onion.",
      "In a small bowl, whisk together the lemon juice, dijon mustard, honey, salt, and black pepper.",
      "Pour the lemon vinaigrette over the salad and toss to combine.",
      "Add the koshari mixture to the salad and toss to combine.",
      "Serve immediately.",
    ],
    cooking_time_minutes: 45,
    complexity: "Moderate",
    cuisines: ["Egyptian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 450,
    tags: ["vegetarian", "salad", "healthy"],
    image_caption_prompt:
      "Generate an image featuring a colorful Koshari Salad with Lemon Vinaigrette, filled with fluffy rice, savory brown lentils, and al dente elbow macaroni, all tossed with crisp romaine lettuce, juicy cherry tomatoes, crunchy cucumber, and tangy red onion. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "491b361f-720e-41c8-95d8-cbf4137ee8e8",
    image: require("../../assets/recipe-images/Koshari-Salad-with-Lemon-Vinaigrette-491b361f-720e-41c8-95d8-cbf4137ee8e8.png"),
  },
  {
    name: "Creamy Nordic Salmon Soup",
    ingredients: [
      {
        name: "salmon fillets",
        quantity: "4",
      },
      {
        name: "potatoes",
        quantity: "4",
      },
      {
        name: "carrots",
        quantity: "3",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "butter",
        quantity: "2 tbsp",
      },
      {
        name: "vegetable broth",
        quantity: "4 cups",
      },
      {
        name: "heavy cream",
        quantity: "1/2 cup",
      },
      {
        name: "dill",
        quantity: "1/4 cup",
      },
      {
        name: "lemon",
        quantity: "1",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Peel and chop the potatoes, carrots, and onion into bite-sized pieces.",
      "In a large pot, melt the butter over medium heat.",
      "Add the onion and saut\u00e9 until translucent.",
      "Add the chopped potatoes and carrots to the pot and saut\u00e9 for 5 minutes.",
      "Add the vegetable broth to the pot and bring to a boil.",
      "Reduce heat to medium-low and simmer for 15 minutes, or until the vegetables are tender.",
      "Cut the salmon into bite-sized pieces and add to the pot. Simmer for 5 minutes, or until the salmon is cooked through.",
      "Add the heavy cream and dill to the pot and stir to combine.",
      "Squeeze the juice of the lemon into the soup and stir.",
      "Season with salt and pepper to taste.",
      "Serve hot and enjoy!",
    ],
    cooking_time_minutes: 35,
    complexity: "Easy",
    cuisines: ["Nordic"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["comfort food", "soup", "salmon", "potatoes", "carrots"],
    image_caption_prompt:
      "Generate an image featuring a bowl of hot and Creamy Nordic Salmon Soup, filled with bites of tender salmon, chunks of potatoes and carrots, all in a creamy broth. The soup should be the focus, with a touch of dill and lemon to accent the dish. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "c478f511-04e5-441a-896d-d57e1b5eef93",
    image: require("../../assets/recipe-images/Creamy-Nordic-Salmon-Soup-c478f511-04e5-441a-896d-d57e1b5eef93.png"),
  },
  {
    name: "Healthy Butter Chicken",
    ingredients: [
      {
        name: "chicken breasts",
        quantity: "1 lb",
      },
      {
        name: "Greek yogurt",
        quantity: "1/2 cup",
      },
      {
        name: "lemon juice",
        quantity: "1 tbsp",
      },
      {
        name: "coconut oil",
        quantity: "2 tbsp",
      },
      {
        name: "onion",
        quantity: "1, chopped",
      },
      {
        name: "garlic",
        quantity: "2 cloves, minced",
      },
      {
        name: "ginger",
        quantity: "1 inch, grated",
      },
      {
        name: "tomatoes",
        quantity: "2, chopped",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "coriander",
        quantity: "1 tsp",
      },
      {
        name: "garam masala",
        quantity: "1 tsp",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "turmeric",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "coconut milk",
        quantity: "1/2 cup",
      },
    ],
    instructions: [
      "In a bowl, combine the Greek yogurt and lemon juice. Add chicken breasts and marinate for at least 30 minutes.",
      "In a pan, melt coconut oil. Add onions, garlic, and ginger. Saut\u00e9 until onions are translucent.",
      "Add chopped tomatoes and cook until they are soft.",
      "Add cumin, coriander, garam masala, paprika, turmeric, and salt. Mix well.",
      "Remove from heat and let the mixture cool down a bit.",
      "In a blender, blend the onion-tomato mixture until smooth.",
      "In a pan, heat coconut oil. Add chicken and cook until browned on all sides.",
      "Add the blended mixture to the pan. Mix well and cook for 10-15 minutes until chicken is cooked through.",
      "Add coconut milk and mix well. Simmer for 5-10 minutes until the sauce thickens.",
      "Serve hot with naan and jeera rice.",
    ],
    cooking_time_minutes: 60,
    complexity: "Intermediate",
    cuisines: ["North Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["healthy", "low-fat", "low-calorie"],
    image_caption_prompt:
      "Generate an image showcasing the Healthy Butter Chicken, a nutritious and low-fat version of the classic dish. Serve it with freshly baked Naan and fragrant Jeera Rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "672fed35-c296-4533-85d6-08c717e15ed1",
    image: require("../../assets/recipe-images/Healthy-Butter-Chicken-672fed35-c296-4533-85d6-08c717e15ed1.png"),
  },
  {
    name: "Bengali Prawn Mustard Curry",
    ingredients: [
      {
        name: "prawns",
        quantity: "500g",
      },
      {
        name: "mustard oil",
        quantity: "3 tbsp",
      },
      {
        name: "mustard seeds",
        quantity: "2 tbsp",
      },
      {
        name: "turmeric",
        quantity: "1 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1 tsp",
      },
      {
        name: "green chili",
        quantity: "2",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "2 cups",
      },
      {
        name: "coriander leaves",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Clean and wash the prawns. Marinate the prawns with salt and turmeric for 10 minutes.",
      "Heat mustard oil in a pan. Add mustard seeds and let them crackle.",
      "Add the marinated prawns and fry until golden brown. Remove the prawns from the pan.",
      "In the same pan, add green chilies, turmeric, red chili powder, and salt. Mix well.",
      "Add water and bring it to a boil. Add the fried prawns to the pan.",
      "Cover the pan and let it simmer for 10 minutes.",
      "Garnish with coriander leaves and serve hot with steamed rice.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Bengali", "Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 300,
    tags: ["prawns", "curry", "mustard", "traditional"],
    image_caption_prompt:
      "Generate an image featuring a mouth-watering Bengali Prawn Mustard Curry with juicy prawns coated in a tangy mustard sauce. Serve with steaming hot rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "565b0a67-ba45-4681-9dba-b0780ee634de",
    image: require("../../assets/recipe-images/Bengali-Prawn-Mustard-Curry-565b0a67-ba45-4681-9dba-b0780ee634de.png"),
  },
  {
    name: "Spicy Goan Prawn Curry",
    ingredients: [
      {
        name: "prawns",
        quantity: "500g",
      },
      {
        name: "coconut milk",
        quantity: "1 can",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "tomato",
        quantity: "1",
      },
      {
        name: "ginger",
        quantity: "1 tsp",
      },
      {
        name: "garlic",
        quantity: "1 tsp",
      },
      {
        name: "green chillies",
        quantity: "4",
      },
      {
        name: "turmeric powder",
        quantity: "1 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "cumin powder",
        quantity: "1 tsp",
      },
      {
        name: "red chilli powder",
        quantity: "2 tsp",
      },
      {
        name: "garam masala powder",
        quantity: "1 tsp",
      },
      {
        name: "tamarind paste",
        quantity: "1 tsp",
      },
      {
        name: "curry leaves",
        quantity: "10",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "1/2 cup",
      },
    ],
    instructions: [
      "Clean and devein the prawns.",
      "Finely chop the onion, tomato, ginger and garlic. Slit the green chillies.",
      "Heat oil in a pan and add onion. Saute till translucent.",
      "Add ginger, garlic and green chillies. Fry for a minute.",
      "Add the chopped tomato and saute till it turns mushy.",
      "Add turmeric powder, coriander powder, cumin powder, red chilli powder, garam masala powder and salt. Fry for a minute.",
      "Add the prawns and saute for 2-3 minutes until they start to turn pink.",
      "Add the tamarind paste and curry leaves. Fry for a minute.",
      "Pour in the coconut milk and water. Bring it to a boil.",
      "Simmer for 5-7 minutes until the prawns are cooked through.",
      "Serve hot with steamed rice.",
    ],
    cooking_time_minutes: 35,
    complexity: "Medium",
    cuisines: ["Indian", "Goan"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["prawns", "curry", "spicy", "coconut milk"],
    image_caption_prompt:
      "Generate an image showcasing a Spicy Goan Prawn Curry with Coconut Milk served with steamed rice. Ensure that the prawns are visible and the curry is topped with fresh coriander leaves and curry leaves.",
    id: "ff1ad783-4c5b-45b0-bc48-f4efe8eb694b",
    image: require("../../assets/recipe-images/Spicy-Goan-Prawn-Curry-ff1ad783-4c5b-45b0-bc48-f4efe8eb694b.png"),
  },
  {
    name: "Hyderabadi Vegetable Biryani",
    ingredients: [
      {
        name: "mixed vegetables (carrots, beans, peas, cauliflower, potatoes, etc.)",
        quantity: "2 cups",
      },
      {
        name: "basmati rice",
        quantity: "2 cups",
      },
      {
        name: "onion",
        quantity: "2 large",
      },
      {
        name: "tomatoes",
        quantity: "2 medium",
      },
      {
        name: "yogurt",
        quantity: "1 cup",
      },
      {
        name: "ginger garlic paste",
        quantity: "2 tbsp",
      },
      {
        name: "green chillies",
        quantity: "4-5",
      },
      {
        name: "mint leaves",
        quantity: "1/2 cup",
      },
      {
        name: "coriander leaves",
        quantity: "1/2 cup",
      },
      {
        name: "ghee",
        quantity: "1/2 cup",
      },
      {
        name: "cloves",
        quantity: "6",
      },
      {
        name: "cardamom",
        quantity: "6",
      },
      {
        name: "cinnamon",
        quantity: "1 inch stick",
      },
      {
        name: "bay leaves",
        quantity: "2",
      },
      {
        name: "saffron",
        quantity: "a pinch",
      },
      {
        name: "milk",
        quantity: "1/4 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "red chilli powder",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/4 tsp",
      },
      {
        name: "cumin powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala powder",
        quantity: "1 tsp",
      },
    ],
    instructions: [
      "Soak the rice in water for 30 minutes.",
      "Heat ghee in a heavy-bottomed pan.",
      "Add cloves, cardamom, cinnamon, and bay leaves. Fry for a few seconds.",
      "Add sliced onions and fry until golden brown.",
      "Add ginger garlic paste and fry for a minute.",
      "Add chopped tomatoes and green chillies. Cook until they turn mushy.",
      "Add mixed vegetables and fry for a few minutes.",
      "Add yogurt, salt, red chilli powder, turmeric powder, cumin powder, and garam masala powder. Mix well and cook until the vegetables are done.",
      "In a separate pot, bring water to boil. Add soaked rice, salt, and a pinch of saffron. Cook until the rice is 80% done. Drain the excess water.",
      "In the same pan used for vegetables, add a layer of rice. Add a layer of vegetables on top of the rice. Repeat the layers until all the rice and vegetables is used up. Top with fried onions, mint leaves, and coriander leaves.",
      "Pour in the milk on the sides of the pan. Cover with a lid and cook on low flame for 20-25 minutes.",
      "Serve hot with raita and salan.",
    ],
    cooking_time_minutes: 90,
    complexity: "Difficult",
    cuisines: ["Hyderabadi", "Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["biryani", "vegetable", "rice", "Hyderabadi"],
    image_caption_prompt:
      "Generate an image of a delicious Hyderabadi Vegetable Biryani with layers of fluffy basmati rice and colorful mixed vegetables, topped with fried onions and garnished with fresh mint and coriander leaves. Include a generous amount of saffron strands for an authentic look. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "87f4baa3-5f41-4cb6-ade9-8b9cb8cba259",
    image: require("../../assets/recipe-images/Hyderabadi-Vegetable-Biryani-87f4baa3-5f41-4cb6-ade9-8b9cb8cba259.png"),
  },
  {
    name: "Bati",
    ingredients: [
      {
        name: "wheat flour",
        quantity: "2 cups",
      },
      {
        name: "semolina",
        quantity: "1/2 cup",
      },
      {
        name: "ghee",
        quantity: "1/2 cup",
      },
      {
        name: "yogurt",
        quantity: "1/2 cup",
      },
      {
        name: "baking powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "1/2 cup",
      },
    ],
    instructions: [
      "In a large mixing bowl, add wheat flour, semolina, baking powder, and salt. Mix well.",
      "Add ghee and mix until the mixture resembles breadcrumbs.",
      "Add yogurt and mix well.",
      "Add water little by little and knead into a stiff dough.",
      "Divide the dough into equal sized balls.",
      "Preheat the oven at 350\u00b0F and grease a baking tray.",
      "Place the balls on the tray and bake for 30-35 minutes or until the batis are golden brown and crisp on the outside.",
      "Serve hot with dal and churma.",
    ],
    cooking_time_minutes: 60,
    complexity: "Medium",
    cuisines: ["Rajasthani"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 200,
    tags: ["vegetarian", "baked", "traditional"],
    image_caption_prompt:
      "Generate an image of Rajasthani bati featuring golden brown wheat balls that are crispy on the outside and soft on the inside, perfect to be paired with dal and churma. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "9b0503ee-bce4-4d69-bf78-acb46a753f19",
    image: require("../../assets/recipe-images/Bati-9b0503ee-bce4-4d69-bf78-acb46a753f19.png"),
  },
  {
    name: "Malabar Parotta",
    ingredients: [
      {
        name: "all-purpose flour",
        quantity: "2 cups",
      },
      {
        name: "egg",
        quantity: "1",
      },
      {
        name: "sugar",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "1 tsp",
      },
      {
        name: "water",
        quantity: "1/2 cup",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "butter",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "In a large mixing bowl, combine all-purpose flour, egg, sugar, and salt. Mix well.",
      "Add water and knead the dough until it is smooth and elastic.",
      "Cover the dough and let it rest for 30 minutes.",
      "After 30 minutes, divide the dough into equal-sized balls.",
      "Roll each ball into a thin disk.",
      "Brush the disk with oil and sprinkle some flour on top.",
      "Fold the disk into a square and roll it into a thin square parotta.",
      "Heat a griddle or a tawa and cook the parotta on both sides until golden brown.",
      "Brush the parotta with butter and serve hot with Kerala-style beef fry.",
    ],
    cooking_time_minutes: 60,
    complexity: "Medium",
    cuisines: ["South Indian"],
    meal_time: ["Dinner"],
    calories_estimate: 300,
    tags: ["flaky", "layered", "South Indian", "Malabar parotta"],
    image_caption_prompt:
      "Generate an image featuring fluffy and flaky Malabar parotta served with spicy Kerala-style beef fry. Ensure that the parotta is layered and golden brown, with some melted butter on top. Include some curry leaves and sliced onion on the side. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "360cc3b9-8592-4dcd-9a3c-61bd8e002401",
    image: require("../../assets/recipe-images/Malabar-Parotta-360cc3b9-8592-4dcd-9a3c-61bd8e002401.png"),
  },
  {
    name: "Bhature",
    ingredients: [
      {
        name: "all-purpose flour",
        quantity: "2 cups",
      },
      {
        name: "semolina",
        quantity: "1/2 cup",
      },
      {
        name: "yogurt",
        quantity: "1/2 cup",
      },
      {
        name: "sugar",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "1 tsp",
      },
      {
        name: "baking powder",
        quantity: "1/2 tsp",
      },
      {
        name: "baking soda",
        quantity: "1/4 tsp",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "water",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "In a mixing bowl, add all-purpose flour, semolina, salt, sugar, baking powder, and baking soda. Mix well.",
      "Add yogurt and oil to the bowl and mix well.",
      "Knead the dough well for 10-15 minutes until it becomes smooth and elastic.",
      "Cover the dough and let it rest for 2-3 hours.",
      "After 2-3 hours, divide the dough into equal portions and roll them into balls.",
      "Flatten each ball with a rolling pin to form a circular shape.",
      "Heat oil in a deep frying pan.",
      "Once the oil is hot, add a flattened dough circle and fry until it turns golden brown on both sides.",
      "Serve hot with Punjabi Chole.",
    ],
    cooking_time_minutes: 180,
    complexity: "Medium",
    cuisines: ["North Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["vegetarian", "fried", "bread", "semolina"],
    image_caption_prompt:
      "Generate an image featuring a plate of crispy and fluffy Bhature, a fried bread that pairs perfectly with spicy Punjabi Chole. Ensure that the bread is golden brown and the texture is clearly visible. Include a side of fresh coriander leaves and a bowl of Punjabi Chole. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "84f361a9-b1db-41ca-bff9-10dc31260729",
    image: require("../../assets/recipe-images/Bhature-84f361a9-b1db-41ca-bff9-10dc31260729.png"),
  },
  {
    name: "Shrikhand Mango Thali",
    ingredients: [
      {
        name: "plain yogurt",
        quantity: "2 cups",
      },
      {
        name: "mango puree",
        quantity: "1 cup",
      },
      {
        name: "powdered sugar",
        quantity: "1/2 cup",
      },
      {
        name: "cardamom powder",
        quantity: "1 tsp",
      },
      {
        name: "saffron strands",
        quantity: "few",
      },
      {
        name: "almonds",
        quantity: "for garnish",
      },
      {
        name: "pistachios",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "In a bowl, mix the plain yogurt, mango puree, powdered sugar, and cardamom powder.",
      "Add saffron strands and mix well.",
      "Refrigerate the mixture for 2-3 hours.",
      "Serve chilled and garnish with almonds and pistachios.",
    ],
    cooking_time_minutes: 15,
    complexity: "Easy",
    cuisines: ["Gujarati"],
    meal_time: ["Dinner"],
    calories_estimate: 200,
    tags: ["vegetarian", "dessert", "mango"],
    image_caption_prompt:
      "Generate an image featuring a sumptuous Shrikhand Mango Thali, a delicious Gujarati dessert. The dish comprises of sweet and creamy shrikhand flavored with tangy mango puree and garnished with crunchy almonds and pistachios. Make sure all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "254ff56f-fad5-4b67-a591-b662c35b1dd8",
    image: require("../../assets/recipe-images/Shrikhand-Mango-Thali-254ff56f-fad5-4b67-a591-b662c35b1dd8.png"),
  },
  {
    name: "Sindhi Kadhi with Bhindi (Okra)",
    ingredients: [
      {
        name: "bhindi (okra)",
        quantity: "1 lb",
      },
      {
        name: "tamarind paste",
        quantity: "2 tbsp",
      },
      {
        name: "besan (gram flour)",
        quantity: "1/2 cup",
      },
      {
        name: "yogurt",
        quantity: "1 cup",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tbsp",
      },
      {
        name: "cumin seeds",
        quantity: "1 tsp",
      },
      {
        name: "mustard seeds",
        quantity: "1 tsp",
      },
      {
        name: "fenugreek seeds",
        quantity: "1/2 tsp",
      },
      {
        name: "curry leaves",
        quantity: "10-12",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "4 cups",
      },
    ],
    instructions: [
      "Wash the bhindi and pat dry with a paper towel. Cut off the ends and slice into small pieces.",
      "In a mixing bowl, whisk together the besan and yogurt until smooth.",
      "Add turmeric powder, red chili powder, coriander powder, and salt to the mixture and whisk again.",
      "Heat oil in a large pot over medium-high heat.",
      "Add cumin seeds, mustard seeds, fenugreek seeds, and curry leaves to the oil and stir until fragrant.",
      "Add the bhindi to the pot and stir-fry for 5 minutes.",
      "Add the tamarind paste and 4 cups of water to the pot. Bring to a boil.",
      "Add the besan-yogurt mixture to the pot and stir until well combined.",
      "Reduce heat to low and simmer for 20 minutes.",
      "Serve hot over steamed rice.",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["Sindhi"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 250,
    tags: ["vegetarian", "gluten-free", "Sindhi cuisine"],
    image_caption_prompt:
      "Generate an image featuring a piping hot bowl of Sindhi Kadhi with Bhindi (Okra), served over steaming rice. Ensure that all the bhindi pieces in the kadhi are clearly visible and nothing important is cut or cropped.",
    id: "c046c692-566b-4fd6-8d64-0d899ea1b915",
    image: require("../../assets/recipe-images/Sindhi-Kadhi-with-Bhindi-Okra-c046c692-566b-4fd6-8d64-0d899ea1b915.png"),
  },
  {
    name: "Saffron Rice",
    ingredients: [
      {
        name: "basmati rice",
        quantity: "1 cup",
      },
      {
        name: "water",
        quantity: "2 cups",
      },
      {
        name: "saffron",
        quantity: "1 tsp",
      },
      {
        name: "ghee",
        quantity: "1 tbsp",
      },
      {
        name: "cardamom pods",
        quantity: "2",
      },
      {
        name: "cinnamon stick",
        quantity: "1",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Wash the rice and soak it in water for 30 minutes.",
      "In a heavy-bottomed pan, heat ghee and add the whole spices.",
      "Add the rice and saute for 2-3 minutes.",
      "Add 2 cups of water, salt, and saffron.",
      "Cover the pan with a tight-fitting lid and let it cook on low heat for 20-25 minutes or until the rice is cooked.",
      "Fluff the rice with a fork and serve hot with Kashmiri Rogan Josh.",
    ],
    cooking_time_minutes: 30,
    complexity: "Easy",
    cuisines: ["Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 200,
    tags: ["saffron", "rice", "aromatic"],
    image_caption_prompt:
      "Generate an image featuring a fragrant bowl of Saffron Rice with long grains of basmati rice infused with the heady aroma of saffron and whole spices. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "5df2b4be-e5e1-4f2f-b78c-38981094e23d",
    image: require("../../assets/recipe-images/Saffron-Rice-5df2b4be-e5e1-4f2f-b78c-38981094e23d.png"),
  },
  {
    name: "Assamese Tenga Fish Curry with Lemon",
    ingredients: [
      {
        name: "fish fillets",
        quantity: "500g",
      },
      {
        name: "mustard oil",
        quantity: "2 tbsp",
      },
      {
        name: "onion",
        quantity: "1 medium",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "ginger",
        quantity: "1 inch piece",
      },
      {
        name: "green chillies",
        quantity: "3-4",
      },
      {
        name: "tomatoes",
        quantity: "2 medium",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chilli powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "1 cup",
      },
      {
        name: "coriander leaves",
        quantity: "for garnish",
      },
      {
        name: "lemon juice",
        quantity: "1 tbsp",
      },
    ],
    instructions: [
      "Clean and wash the fish fillets. Marinate with turmeric powder and salt for 10 minutes.",
      "In a pan, heat mustard oil. Add chopped onions, garlic, ginger, and green chillies. Saute until onions turn soft and translucent.",
      "Add chopped tomatoes and cook until they are soft and mushy.",
      "Add turmeric powder, red chilli powder, and salt. Mix well.",
      "Add 1 cup of water and bring to a boil.",
      "Add the marinated fish fillets and cook for 10-15 minutes or until the fish is cooked through.",
      "Add lemon juice and mix well.",
      "Garnish with coriander leaves and serve hot with rice.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Assamese"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["fish", "spicy", "tangy", "tomato broth", "lemon"],
    image_caption_prompt:
      "Generate an image of a delicious Assamese Tenga Fish Curry with a tangy tomato broth and a twist of lemon. Serve with steamed rice for a complete North Eastern meal. Ensure that the fish and rice are clearly visible and nothing important is cut or cropped.",
    id: "2b3748a5-2bda-47d2-944b-e26e2ec5e3bf",
    image: require("../../assets/recipe-images/Assamese-Tenga-Fish-Curry-with-Lemon-2b3748a5-2bda-47d2-944b-e26e2ec5e3bf.png"),
  },
  {
    name: "Veg Kothu Parotta",
    ingredients: [
      {
        name: "parotta",
        quantity: "4",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "tomato",
        quantity: "1",
      },
      {
        name: "carrot",
        quantity: "1",
      },
      {
        name: "beans",
        quantity: "10",
      },
      {
        name: "peas",
        quantity: "1/4 cup",
      },
      {
        name: "turmeric powder",
        quantity: "1/4 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1/2 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala powder",
        quantity: "1/2 tsp",
      },
      {
        name: "curry leaves",
        quantity: "10",
      },
      {
        name: "coriander leaves",
        quantity: "for garnish",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Shred the parotta into small pieces.",
      "In a pan, heat oil and add the onion and curry leaves. Saute until the onion turns translucent.",
      "Add the carrot, beans, and peas. Saute for 2-3 minutes.",
      "Add the tomato and saute until it turns mushy.",
      "Add turmeric powder, red chili powder, coriander powder, and garam masala powder. Mix well.",
      "Add the shredded parotta and salt. Mix well and cook for 2-3 minutes.",
      "Garnish with coriander leaves and serve hot.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["South Indian"],
    meal_time: ["Breakfast", "Dinner"],
    calories_estimate: 400,
    tags: ["vegetarian", "street food", "spicy", "parotta"],
    image_caption_prompt:
      "Generate an image centered around a delicious Veg Kothu Parotta, made with shredded parotta, mixed vegetables, and a variety of spices. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "ab9e7c67-c848-4e3c-b53a-e956934664d2",
    image: require("../../assets/recipe-images/Veg-Kothu-Parotta-ab9e7c67-c848-4e3c-b53a-e956934664d2.png"),
  },
  {
    name: "Shami Kebab",
    ingredients: [
      {
        name: "chana dal",
        quantity: "1 cup",
      },
      {
        name: "lamb mince",
        quantity: "500g",
      },
      {
        name: "ginger-garlic paste",
        quantity: "2 tbsp",
      },
      {
        name: "red chilli powder",
        quantity: "1 tbsp",
      },
      {
        name: "garam masala powder",
        quantity: "1 tbsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tbsp",
      },
      {
        name: "cumin powder",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "ghee",
        quantity: "4 tbsp",
      },
    ],
    instructions: [
      "Wash the chana dal and soak it in water for 4 hours.",
      "After 4 hours, drain the water and grind the chana dal into a fine paste.",
      "In a mixing bowl, combine the chana dal paste, lamb mince, ginger-garlic paste, red chilli powder, garam masala powder, coriander powder, cumin powder, and salt. Mix well and marinate for 2 hours.",
      "After 2 hours, take a small portion of the meat mixture and shape it into a small patty.",
      "Heat a tawa on medium heat.",
      "Grease the tawa with some ghee and place the patty on the tawa.",
      "Cook the kebab on both sides until browned and cooked through.",
      "Serve hot with ulte tawa ke parathe.",
    ],
    cooking_time_minutes: 210,
    complexity: "Medium",
    cuisines: ["Indian"],
    meal_time: ["Dinner"],
    calories_estimate: 400,
    tags: ["kebab", "Lucknowi cuisine", "Nawabi"],
    image_caption_prompt:
      "Generate an image featuring delicious Shami Kebabs, made with a blend of lamb mince and chana dal, served with hot and fluffy ulte tawa ke parathe. Ensure that all the kebabs and parathas are clearly visible and nothing important is cut or cropped.",
    id: "34ed9017-a3b4-4173-8889-c1b7ac3254db",
    image: require("../../assets/recipe-images/Shami-Kebab-34ed9017-a3b4-4173-8889-c1b7ac3254db.png"),
  },
  {
    name: "Vegan Sol Kadi",
    ingredients: [
      {
        name: "kokum",
        quantity: "10-12 pieces",
      },
      {
        name: "coconut cream",
        quantity: "1 cup",
      },
      {
        name: "ginger",
        quantity: "1 inch",
      },
      {
        name: "green chilli",
        quantity: "1",
      },
      {
        name: "mint leaves",
        quantity: "a handful",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "2 cups",
      },
    ],
    instructions: [
      "Soak kokum in 2 cups of water for 2 hours.",
      "Squeeze and extract the juice from the kokum using your hands.",
      "Add ginger, green chilli, mint leaves, and salt to the kokum juice and blend it well.",
      "Add coconut cream to the mixture and blend again.",
      "Strain the mixture through a sieve.",
      "Serve chilled.",
    ],
    cooking_time_minutes: 10,
    complexity: "Easy",
    cuisines: ["Vegan", "Konkan"],
    meal_time: ["Afternoon", "Evening"],
    calories_estimate: 120,
    tags: ["vegan", "digestive", "summer drink", "Konkani cuisine"],
    image_caption_prompt:
      "Generate an image showcasing the Vegan Sol Kadi. The drink should be in a glass, with a pink color, and garnished with mint leaves. The background should have a Konkani theme.",
    id: "193cee30-f6fd-444e-aa69-12418557d14e",
    image: require("../../assets/recipe-images/Vegan-Sol-Kadi-193cee30-f6fd-444e-aa69-12418557d14e.png"),
  },
  {
    name: "Traditional Puran Poli",
    ingredients: [
      {
        name: "Chana Dal",
        quantity: "1 cup",
      },
      {
        name: "Jaggery",
        quantity: "1 cup",
      },
      {
        name: "Whole Wheat Flour",
        quantity: "1 cup",
      },
      {
        name: "Salt",
        quantity: "1/2 tsp",
      },
      {
        name: "Water",
        quantity: "1 cup",
      },
      {
        name: "Ghee",
        quantity: "1/2 cup",
      },
      {
        name: "Cardamom Powder",
        quantity: "1 tsp",
      },
    ],
    instructions: [
      "To make the filling, rinse and soak the chana dal for 2 hours. Drain the water and pressure cook the dal with 2 cups of water until soft and mushy.",
      "Drain off any excess water and add the jaggery. Mix well and cook until the mixture thickens and starts to leave the sides of the pan. Add cardamom powder and mix well.",
      "To make the dough, mix the whole wheat flour, salt and water to make a soft and pliable dough. Knead well for 10-15 minutes.",
      "Divide the dough and filling into equal portions. Roll out the dough into small discs and place a portion of the filling in the center of each disc.",
      "Cover the filling with the edges of the dough and roll out into a flatbread.",
      "Heat a tawa or griddle and cook the puran poli on both sides until golden brown. Brush with ghee while cooking.",
      "Serve hot with a dollop of ghee.",
    ],
    cooking_time_minutes: 90,
    complexity: "Medium",
    cuisines: ["Maharashtrian"],
    meal_time: ["Dessert"],
    calories_estimate: 250,
    tags: ["traditional", "sweet", "festive"],
    image_caption_prompt:
      "Create an image featuring a plate of hot and delicious traditional Puran Poli, a sweet flatbread stuffed with a mixture of chana dal and jaggery. Add a dollop of ghee on top and ensure that the bread is clearly visible without any important parts being cut or cropped.",
    id: "0d9e1b60-3d3b-4db7-a3cd-fe4ecdd6565e",
    image: require("../../assets/recipe-images/Traditional-Puran-Poli-0d9e1b60-3d3b-4db7-a3cd-fe4ecdd6565e.png"),
  },
  {
    name: "Amritsari Kulcha with Spiced Potato Stuffing",
    ingredients: [
      {
        name: "all-purpose flour",
        quantity: "2 cups",
      },
      {
        name: "baking powder",
        quantity: "1 tsp",
      },
      {
        name: "baking soda",
        quantity: "1/2 tsp",
      },
      {
        name: "salt",
        quantity: "1/2 tsp",
      },
      {
        name: "sugar",
        quantity: "1 tsp",
      },
      {
        name: "yogurt",
        quantity: "1/2 cup",
      },
      {
        name: "water",
        quantity: "1/2 cup",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "potatoes",
        quantity: "4 medium",
      },
      {
        name: "cumin seeds",
        quantity: "1 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala",
        quantity: "1 tsp",
      },
      {
        name: "amchur powder",
        quantity: "1 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1 tsp",
      },
      {
        name: "chopped coriander leaves",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Add flour, baking powder, baking soda, salt, and sugar in a mixing bowl.",
      "Mix well and make a well in the center.",
      "Add yogurt and water, and knead a soft dough.",
      "Add oil and knead again. Cover and let the dough rest for 1 hour.",
      "Boil the potatoes until soft and mash them.",
      "Add cumin seeds, coriander powder, garam masala, amchur powder, red chili powder, salt, and coriander leaves.",
      "Mix well and divide the mixture into equal portions.",
      "Divide the dough into 6 equal balls.",
      "Roll out each ball into a small circle and place a portion of the potato stuffing in the center. Seal the edges and roll out into a circle.",
      "Heat a tawa or griddle and cook the kulcha on both sides until golden brown.",
      "Serve hot with chana masala.",
    ],
    cooking_time_minutes: 60,
    complexity: "Intermediate",
    cuisines: ["Punjabi"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["vegetarian", "spicy", "Indian breads"],
    image_caption_prompt:
      "Generate an image featuring a delicious Amritsari Kulcha with Spiced Potato Stuffing, served with a bowl of spicy Chana Masala. Ensure that both dishes are clearly visible and nothing important is cut or cropped.",
    id: "6b878c81-6f04-4877-b95a-7b438394b28c",
    image: require("../../assets/recipe-images/Amritsari-Kulcha-with-Spiced-Potato-Stuffing-6b878c81-6f04-4877-b95a-7b438394b28c.png"),
  },
  {
    name: "Haryanvi Bajra Khichdi with Yogurt and Ghee",
    ingredients: [
      {
        name: "pearl millet (bajra)",
        quantity: "1 cup",
      },
      {
        name: "moong dal",
        quantity: "1/2 cup",
      },
      {
        name: "ghee",
        quantity: "2 tbsp",
      },
      {
        name: "cumin seeds",
        quantity: "1 tsp",
      },
      {
        name: "asafetida (hing)",
        quantity: "1/4 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1/4 tsp",
      },
      {
        name: "green chili",
        quantity: "1",
      },
      {
        name: "ginger",
        quantity: "1 inch piece",
      },
      {
        name: "garlic",
        quantity: "4-5 cloves",
      },
      {
        name: "coriander leaves",
        quantity: "1/4 cup",
      },
      {
        name: "yogurt",
        quantity: "1 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Wash and soak the bajra and moong dal in water for at least 30 minutes.",
      "In a pressure cooker, heat ghee and add cumin seeds and asafetida.",
      "Add turmeric and red chili powder and saut\u00e9 for a few seconds.",
      "Add chopped green chili, ginger, and garlic. Saut\u00e9 for a minute.",
      "Add the soaked bajra and moong dal along with 4 cups of water and salt. Mix well.",
      "Close the pressure cooker and pressure cook for 5-6 whistles or until the bajra and dal are cooked.",
      "Let the pressure release naturally.",
      "Garnish with chopped coriander leaves and serve hot with yogurt and ghee.",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["healthy", "wholesome", "earthy"],
    image_caption_prompt:
      "Generate an image featuring a hearty and wholesome Haryanvi Bajra Khichdi served hot with a dollop of yogurt and ghee. Ensure that the khichdi is the main focus of the image, with the yogurt and ghee visible in the frame.",
    id: "5a19604d-15fa-4131-bafb-d6b9e7d27937",
    image: require("../../assets/recipe-images/Haryanvi-Bajra-Khichdi-with-Yogurt-and-Ghee-5a19604d-15fa-4131-bafb-d6b9e7d27937.png"),
  },
  {
    name: "Chicken Dhansak with Brown Rice",
    ingredients: [
      {
        name: "brown rice",
        quantity: "1 cup",
      },
      {
        name: "chicken breast",
        quantity: "1 lb",
      },
      {
        name: "yellow lentils",
        quantity: "1 cup",
      },
      {
        name: "onion",
        quantity: "1 medium",
      },
      {
        name: "garlic",
        quantity: "2 cloves",
      },
      {
        name: "ginger",
        quantity: "1 tbsp",
      },
      {
        name: "tomatoes",
        quantity: "2 medium",
      },
      {
        name: "turmeric",
        quantity: "1 tsp",
      },
      {
        name: "coriander",
        quantity: "1 tsp",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "cinnamon",
        quantity: "1/2 tsp",
      },
      {
        name: "cloves",
        quantity: "2",
      },
      {
        name: "cardamom",
        quantity: "2 pods",
      },
      {
        name: "bay leaf",
        quantity: "1",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
      {
        name: "cilantro",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Cook the brown rice according to package instructions.",
      "In a large pot, add the lentils and cover with water. Bring to a boil and then reduce heat to low and simmer for 30 minutes or until lentils are tender.",
      "While the lentils are cooking, chop the onion, garlic, and ginger. Heat a large pan over medium heat and add a tablespoon of oil. Add the onion, garlic, and ginger and saut\u00e9 until the onion is translucent.",
      "Add the chicken to the pan and cook until browned on all sides.",
      "Add the tomatoes, turmeric, coriander, cumin, cinnamon, cloves, cardamom, bay leaf, salt, and pepper to the pan. Stir to combine.",
      "When the lentils are cooked, drain any excess water and add them to the pan with the chicken and spices. Stir to combine.",
      "Simmer the chicken dhansak for 20-30 minutes or until the chicken is cooked through and the flavors have melded together.",
      "Serve the chicken dhansak over the brown rice and garnish with cilantro.",
    ],
    cooking_time_minutes: 60,
    complexity: "Medium",
    cuisines: ["Parsi", "Persian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["lentils", "chicken", "gluten-free", "high-protein"],
    image_caption_prompt:
      "Generate an image centered around a steaming plate of Chicken Dhansak with Brown Rice. The dish should have a rich brown color and be topped with fresh cilantro. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "a25df3fd-86ee-4648-b1b7-a9adbcf72f27",
    image: require("../../assets/recipe-images/Chicken-Dhansak-with-Brown-Rice-a25df3fd-86ee-4648-b1b7-a9adbcf72f27.png"),
  },
  {
    name: "Andhra-style Chicken Curry",
    ingredients: [
      {
        name: "chicken",
        quantity: "1 lb",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "tomato",
        quantity: "1",
      },
      {
        name: "ginger",
        quantity: "1-inch piece",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "green chilies",
        quantity: "3-4",
      },
      {
        name: "coriander leaves",
        quantity: "handful",
      },
      {
        name: "oil",
        quantity: "3 tbsp",
      },
      {
        name: "cumin seeds",
        quantity: "1 tsp",
      },
      {
        name: "mustard seeds",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Clean and wash the chicken. Cut into medium-sized pieces.",
      "Chop the onion, tomato, ginger, garlic, green chilies, and coriander leaves.",
      "Heat oil in a pan and add cumin seeds and mustard seeds. Let them splutter.",
      "Add chopped onion and fry until golden brown.",
      "Add ginger, garlic, and green chilies. Fry for a minute.",
      "Add chopped tomato and fry until it becomes soft and mushy.",
      "Add turmeric powder, red chili powder, coriander powder, and garam masala. Fry for a minute.",
      "Add the chicken pieces and mix well. Fry for 5-6 minutes.",
      "Add 1 cup of water and salt. Mix well.",
      "Cover and cook for 20-25 minutes or until the chicken is cooked and the gravy thickens.",
      "Garnish with coriander leaves and serve hot with steamed rice.",
    ],
    cooking_time_minutes: 45,
    complexity: "Moderate",
    cuisines: ["Andhra"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 450,
    tags: ["spicy", "regional spices", "chicken curry"],
    image_caption_prompt:
      "Generate an image centered around a spicy Andhra-style Chicken Curry, made with regional spices and tender chicken pieces cooked in a thick, flavorful gravy. Serve it hot with steamed rice and garnish with fresh coriander leaves. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "26912871-3085-407f-b0d9-b5885b20b1e7",
    image: require("../../assets/recipe-images/Andhra-style-Chicken-Curry-26912871-3085-407f-b0d9-b5885b20b1e7.png"),
  },
  {
    name: "Traditional Oriya Dalma",
    ingredients: [
      {
        name: "toor dal",
        quantity: "1 cup",
      },
      {
        name: "potato",
        quantity: "1",
      },
      {
        name: "raw banana",
        quantity: "1",
      },
      {
        name: "pumpkin",
        quantity: "1",
      },
      {
        name: "carrot",
        quantity: "1",
      },
      {
        name: "tomato",
        quantity: "1",
      },
      {
        name: "ginger",
        quantity: "1-inch piece",
      },
      {
        name: "green chillies",
        quantity: "2",
      },
      {
        name: "turmeric powder",
        quantity: "1 tsp",
      },
      {
        name: "cumin seeds",
        quantity: "1 tsp",
      },
      {
        name: "coriander leaves",
        quantity: "2 tbsp",
      },
      {
        name: "oil",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Wash and soak the toor dal for 30 minutes. Drain and pressure cook with 3 cups of water, turmeric powder, chopped ginger, and sliced green chillies for 4-5 whistles.",
      "Peel and dice the potato, raw banana, pumpkin, and carrot into small cubes. Chop the tomato.",
      "In a pan, heat oil and add cumin seeds. Once they start to splutter, add the chopped vegetables and saut\u00e9 for 5 minutes.",
      "Add the cooked dal and salt to the vegetables and simmer for 5 minutes.",
      "Garnish with chopped coriander leaves and serve hot with rice.",
    ],
    cooking_time_minutes: 40,
    complexity: "Medium",
    cuisines: ["Oriya"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 300,
    tags: ["comfort food", "vegetarian", "lentil stew"],
    image_caption_prompt:
      "Generate an image featuring a warm and comforting bowl of Traditional Oriya Dalma, a lentil and vegetable stew with turmeric-flavored toor dal, perfectly cooked vegetables, and aromatic spices. Serve with a side of steaming white rice and garnish with fresh coriander leaves. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "f9948ea3-d45e-473c-8045-1388071f9efd",
    image: require("../../assets/recipe-images/Traditional-Oriya-Dalma-f9948ea3-d45e-473c-8045-1388071f9efd.png"),
  },
  {
    name: "Chicken Momo",
    ingredients: [
      {
        name: "ground chicken",
        quantity: "1 lb",
      },
      {
        name: "onion",
        quantity: "1 medium, finely chopped",
      },
      {
        name: "garlic",
        quantity: "2 cloves, minced",
      },
      {
        name: "ginger",
        quantity: "1 tbsp, grated",
      },
      {
        name: "cumin powder",
        quantity: "1 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
      {
        name: "wonton wrappers",
        quantity: "24",
      },
    ],
    instructions: [
      "In a large mixing bowl, combine ground chicken, onion, garlic, ginger, cumin powder, coriander powder, turmeric powder, salt, and black pepper. Mix well.",
      "Take a wonton wrapper and place a tablespoon of filling in the center.",
      "Fold the wrapper in half and pinch the edges together to seal.",
      "Steam the momos for 10-12 minutes.",
      "Serve hot with spicy chutney.",
    ],
    cooking_time_minutes: 40,
    complexity: "Intermediate",
    cuisines: ["Nepalese"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["momos", "dumplings", "chicken", "spicy", "Nepalese cuisine"],
    image_caption_prompt:
      "Generate an image showcasing juicy Chicken Momos, steaming hot and filled with flavorful ground chicken, onions, garlic, ginger, and aromatic spices. Serve with a side of spicy chutney. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "7f36eb97-b3be-4976-bad0-8a9baeb296a4",
    image: require("../../assets/recipe-images/Chicken-Momo-7f36eb97-b3be-4976-bad0-8a9baeb296a4.png"),
  },
  {
    name: "Classic Sri Lankan Egg Hoppers",
    ingredients: [
      {
        name: "rice flour",
        quantity: "1 cup",
      },
      {
        name: "coconut milk",
        quantity: "1 cup",
      },
      {
        name: "active dry yeast",
        quantity: "1 tsp",
      },
      {
        name: "sugar",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "1/2 tsp",
      },
      {
        name: "eggs",
        quantity: "4",
      },
      {
        name: "vegetable oil",
        quantity: "as needed",
      },
    ],
    instructions: [
      "In a large mixing bowl, combine the rice flour, coconut milk, yeast, sugar, and salt. Mix well to form a smooth batter.",
      "Cover the bowl with a clean kitchen towel and let it rest for 2 hours in a warm place.",
      "After 2 hours, the batter would be fermented and doubled in size.",
      "Heat a non-stick pan over medium heat. Brush some oil on the pan.",
      "Pour a ladle full of the batter in the center of the pan. Tilt the pan to spread the batter evenly in a circular motion, creating a bowl shape in the center.",
      "Crack an egg in the center of the bowl.",
      "Cover the pan with a lid and cook until the egg is set and the edges of the hopper are crispy, about 2-3 minutes.",
      "Remove the hopper from the pan using a spatula and transfer it to a plate.",
      "Repeat the process with the remaining batter and eggs.",
      "Serve hot with your favorite spicy chutney or curry.",
    ],
    cooking_time_minutes: 140,
    complexity: "Medium",
    cuisines: ["Sri Lankan"],
    meal_time: ["Breakfast"],
    calories_estimate: 300,
    tags: ["vegetarian", "gluten-free", "fermented"],
    image_caption_prompt:
      "Generate an image featuring a plate of classic Sri Lankan egg hoppers, with crispy edges and a perfectly cooked egg in the center. Add a side of spicy chutney or curry to complete the breakfast experience. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "4b6ad1ca-9e60-484b-8e76-f0497121b417",
    image: require("../../assets/recipe-images/Classic-Sri-Lankan-Egg-Hoppers-4b6ad1ca-9e60-484b-8e76-f0497121b417.png"),
  },
  {
    name: "Classic Maldivian Mas Huni",
    ingredients: [
      {
        name: "canned tuna",
        quantity: "1 can",
      },
      {
        name: "coconut",
        quantity: "1 whole",
      },
      {
        name: "onions",
        quantity: "2 medium",
      },
      {
        name: "lime",
        quantity: "1",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "roshi bread",
        quantity: "4 pieces",
      },
    ],
    instructions: [
      "Grate the coconut and chop the onions finely.",
      "In a bowl, mix the canned tuna, grated coconut, chopped onions, and salt.",
      "Squeeze the lime juice over the mixture and mix well.",
      "Heat the roshi bread in a pan until warm and slightly crispy.",
      "Scoop the mas huni mixture onto the roshi bread and wrap it into a roll.",
    ],
    cooking_time_minutes: 20,
    complexity: "Easy",
    cuisines: ["Maldivian"],
    meal_time: ["Breakfast", "Lunch"],
    calories_estimate: 350,
    tags: ["tuna", "coconut", "onions", "roshi bread"],
    image_caption_prompt:
      "Generate an image of a delicious Classic Maldivian Mas Huni, made with grated coconut, canned tuna, chopped onions, and lime juice, all wrapped in warm and crispy roshi bread. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "98406d54-b837-41fa-8df0-834cb188df19",
    image: require("../../assets/recipe-images/Classic-Maldivian-Mas-Huni-98406d54-b837-41fa-8df0-834cb188df19.png"),
  },
  {
    name: "Pahadi Aloo ke Gutke",
    ingredients: [
      {
        name: "potatoes",
        quantity: "4 medium sized",
      },
      {
        name: "mustard oil",
        quantity: "2 tbsp",
      },
      {
        name: "fenugreek seeds",
        quantity: "1/4 tsp",
      },
      {
        name: "cumin seeds",
        quantity: "1/2 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chilli powder",
        quantity: "1/2 tsp",
      },
      {
        name: "amchoor powder",
        quantity: "1/2 tsp",
      },
      {
        name: "asafoetida",
        quantity: "a pinch",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "coriander leaves",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Wash and peel the potatoes. Cut them into small cubes.",
      "Heat mustard oil in a pan. Add fenugreek seeds, cumin seeds, and asafoetida. Stir for a few seconds.",
      "Add the potatoes and mix well. Cook on medium heat for 5-10 minutes, stirring occasionally.",
      "Add coriander powder, turmeric powder, red chilli powder, amchoor powder, and salt. Mix well.",
      "Cover the pan and cook on low heat for 10-15 minutes, or until the potatoes are cooked through.",
      "Garnish with coriander leaves and serve hot with chapati or rice.",
    ],
    cooking_time_minutes: 30,
    complexity: "Easy",
    cuisines: ["Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 200,
    tags: ["vegetarian", "vegan", "gluten-free"],
    image_caption_prompt:
      "Generate an image featuring a delicious plate of Pahadi Aloo ke Gutke, a traditional dish from the hills of Uttarakhand. The dish should be centered and should have small pieces of potatoes cooked in a blend of spices, garnished with coriander leaves. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "7a61c882-2802-4c70-910b-d8d4c7aa0298",
    image: require("../../assets/recipe-images/Pahadi-Aloo-ke-Gutke-7a61c882-2802-4c70-910b-d8d4c7aa0298.png"),
  },
  {
    name: "Indori Poha",
    ingredients: [
      {
        name: "poha",
        quantity: "1 cup",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "potato",
        quantity: "1",
      },
      {
        name: "peanuts",
        quantity: "1/4 cup",
      },
      {
        name: "green chili",
        quantity: "2",
      },
      {
        name: "mustard seeds",
        quantity: "1 tsp",
      },
      {
        name: "cumin seeds",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "lemon juice",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "coriander leaves",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Rinse the poha in water and drain.",
      "Chop the onion and green chilies.",
      "Peel and dice the potato into small pieces.",
      "Heat oil in a pan and add mustard seeds and cumin seeds. When they splutter, add peanuts and fry until golden brown.",
      "Add chopped onion and green chilies. Saute until onion turns translucent.",
      "Add diced potato and turmeric powder. Mix well.",
      "Add salt and a little water. Cover and cook until the potato is soft.",
      "Add poha and lemon juice. Mix well and cook for 2-3 minutes.",
      "Garnish with coriander leaves and serve hot.",
    ],
    cooking_time_minutes: 20,
    complexity: "Easy",
    cuisines: ["Indian"],
    meal_time: ["Breakfast"],
    calories_estimate: 250,
    tags: ["vegan", "gluten-free", "spicy"],
    image_caption_prompt:
      "Generate an image centered around a delicious plate of Indori Poha, a traditional breakfast dish from Madhya Pradesh. The dish should include fluffy poha, saut\u00e9ed onions, diced potatoes, and crunchy peanuts, garnished with fresh coriander leaves. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "69bb8be8-8240-42ae-a076-e41a877c9985",
    image: require("../../assets/recipe-images/Indori-Poha-69bb8be8-8240-42ae-a076-e41a877c9985.png"),
  },
  {
    name: "Manipuri Eromba with Fish and Vegetables",
    ingredients: [
      {
        name: "Fish (preferably Rohu)",
        quantity: "500 grams",
      },
      {
        name: "Potatoes",
        quantity: "2 medium sized",
      },
      {
        name: "Eromba Ngari (Fermented fish)",
        quantity: "2-3 pieces",
      },
      {
        name: "Eromba Chilli (Ghost chilli)",
        quantity: "5-6",
      },
      {
        name: "Garlic",
        quantity: "5-6 cloves",
      },
      {
        name: "Ginger",
        quantity: "1 inch piece",
      },
      {
        name: "Coriander leaves",
        quantity: "1/4 cup",
      },
      {
        name: "Salt",
        quantity: "to taste",
      },
      {
        name: "Water",
        quantity: "2 cups",
      },
    ],
    instructions: [
      "Clean and cut the fish into medium sized pieces.",
      "Peel and chop the potatoes into small cubes.",
      "In a pan, heat some oil and fry the fish pieces until golden brown. Keep them aside.",
      "In the same pan, add some more oil and fry the potatoes until crispy. Keep them aside.",
      "In a blender, grind together the Eromba Ngari, Eromba Chilli, garlic, ginger, and coriander leaves with some water to form a smooth paste.",
      "In a pan, add the masala paste and fry for a few minutes.",
      "Add the fried fish and potatoes along with some water and salt to taste.",
      "Let it cook on medium flame for 10-15 minutes until the gravy thickens and the potatoes are cooked.",
      "Garnish with some coriander leaves and serve hot with steamed rice.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["North Eastern"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["Fish", "Vegetables", "Spicy", "Fermented", "North Eastern"],
    image_caption_prompt:
      "Generate an image centered around a bowl of Manipuri Eromba with Fish and Vegetables. The dish should show chunks of fish and potato, along with a generous amount of Eromba chilli. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "d1681797-8ea8-4a88-8f1a-8d94f4030e1b",
    image: require("../../assets/recipe-images/Manipuri-Eromba-with-Fish-and-Vegetables-d1681797-8ea8-4a88-8f1a-8d94f4030e1b.png"),
  },
  {
    name: "Chicken Kathi Roll",
    ingredients: [
      {
        name: "chicken breasts",
        quantity: "2",
      },
      {
        name: "lemon juice",
        quantity: "1 tbsp",
      },
      {
        name: "ginger garlic paste",
        quantity: "1 tbsp",
      },
      {
        name: "turmeric powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala powder",
        quantity: "1 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "vegetable oil",
        quantity: "2 tbsp",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "bell pepper",
        quantity: "1",
      },
      {
        name: "whole wheat tortillas",
        quantity: "4",
      },
      {
        name: "mint chutney",
        quantity: "1/4 cup",
      },
      {
        name: "tomato ketchup",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "Cut the chicken breasts into thin strips.",
      "In a bowl, mix the chicken with lemon juice, ginger garlic paste, turmeric powder, garam masala powder, red chili powder, and salt. Marinate for 30 minutes.",
      "In a pan, heat vegetable oil over medium heat. Add the marinated chicken and cook until tender and cooked through, about 10 minutes.",
      "Add sliced onion and bell pepper to the pan. Cook for 5 minutes until softened.",
      "Warm the whole wheat tortillas on a skillet or in the microwave.",
      "Spread mint chutney and tomato ketchup on each tortilla.",
      "Add the chicken and vegetable filling to each tortilla and roll tightly.",
      "Serve hot and enjoy!",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["kathi roll", "on-the-go", "chicken", "spicy"],
    image_caption_prompt:
      "Generate an image showcasing a delicious Chicken Kathi Roll, a popular street food from Kolkata. The roll should be packed with succulent chicken kebabs, saut\u00e9ed onions and bell peppers, and a drizzle of mint chutney and tomato ketchup. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "7e4703e2-9b95-402f-83be-2ebd8cff27a2",
    image: require("../../assets/recipe-images/Chicken-Kathi-Roll-7e4703e2-9b95-402f-83be-2ebd8cff27a2.png"),
  },
  {
    name: "Traditional Patra",
    ingredients: [
      {
        name: "colocasia leaves",
        quantity: "8-10",
      },
      {
        name: "gram flour (besan)",
        quantity: "1 cup",
      },
      {
        name: "tamarind pulp",
        quantity: "1 tbsp",
      },
      {
        name: "jaggery",
        quantity: "1 tbsp",
      },
      {
        name: "ginger paste",
        quantity: "1 tsp",
      },
      {
        name: "green chili paste",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "cumin powder",
        quantity: "1/2 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1/2 tsp",
      },
      {
        name: "asafoetida (hing)",
        quantity: "1/4 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "1 tbsp",
      },
    ],
    instructions: [
      "Wash the colocasia leaves and wipe them dry.",
      "In a mixing bowl, add gram flour, tamarind pulp, jaggery, ginger paste, green chili paste, turmeric powder, cumin powder, coriander powder, asafoetida, salt, and 1 tbsp oil. Mix well to form a smooth paste.",
      "Place a colocasia leaf on a flat surface with the stem facing downwards. Spread the gram flour paste evenly on the leaf, leaving some space at the edges.",
      "Place another colocasia leaf on top of it and repeat the process until you have used all the leaves and the paste.",
      "Roll the leaves tightly into a cylindrical shape and cut into 1-inch thick pieces.",
      "Arrange the pieces in a steamer and steam for 20-25 minutes.",
      "Once done, let them cool for a few minutes.",
      "Heat some oil in a pan and add the steamed patra pieces. Cook for 4-5 minutes on medium heat until they turn golden brown.",
      "Serve hot with green chutney.",
    ],
    cooking_time_minutes: 60,
    complexity: "Medium",
    cuisines: ["Gujarati"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 300,
    tags: ["vegetarian", "spicy", "steamed"],
    image_caption_prompt:
      "Generate an image featuring traditional Gujarati Patra, with colocasia leaves smeared with a spiced gram flour paste, rolled and steamed. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "8e1cbce5-99e4-4b79-a356-13e80dc508c0",
    image: require("../../assets/recipe-images/Traditional-Patra-8e1cbce5-99e4-4b79-a356-13e80dc508c0.png"),
  },
  {
    name: "Garlic Bread",
    ingredients: [
      {
        name: "baguette",
        quantity: "1",
      },
      {
        name: "unsalted butter",
        quantity: "1/2 cup",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "parsley",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat the oven to 375\u00b0F.",
      "Cut the baguette in half lengthwise.",
      "In a small mixing bowl, combine the butter, minced garlic, chopped parsley, and salt.",
      "Spread the garlic butter mixture evenly over the cut sides of the baguette.",
      "Bake the garlic bread for 10-12 minutes, or until the bread is golden brown and crispy.",
      "Cut the garlic bread into slices and serve with the lasagna.",
    ],
    cooking_time_minutes: 15,
    complexity: "Easy",
    cuisines: ["Italian"],
    meal_time: ["Dinner"],
    calories_estimate: 200,
    tags: ["comfort food", "easy side dish", "italian cuisine"],
    image_caption_prompt:
      "Generate an image of a fragrant and crispy Garlic Bread, with a golden crust and a soft, buttery interior, perfect to serve as a side dish to a classic lasagna. Ensure that the garlic bread is clearly visible and nothing important is cut or cropped.",
    id: "c780a90d-be73-47b0-a467-fca2eff0b253",
    image: require("../../assets/recipe-images/Garlic-Bread-c780a90d-be73-47b0-a467-fca2eff0b253.png"),
  },
  {
    name: "Grand Indian Thali",
    ingredients: [
      {
        name: "Basmati rice",
        quantity: "1 cup",
      },
      {
        name: "Mixed vegetable curry",
        quantity: "2 cups",
      },
      {
        name: "Chana masala",
        quantity: "2 cups",
      },
      {
        name: "Butter chicken curry",
        quantity: "2 cups",
      },
      {
        name: "Garlic naan bread",
        quantity: "4 pieces",
      },
      {
        name: "Raita",
        quantity: "1 cup",
      },
      {
        name: "Mango chutney",
        quantity: "1/2 cup",
      },
      {
        name: "Gulab jamun",
        quantity: "4 pieces",
      },
    ],
    instructions: [
      "Cook the basmati rice according to package instructions.",
      "Heat the mixed vegetable curry, chana masala, and butter chicken curry in separate pots.",
      "Warm the garlic naan bread in the oven or on a skillet.",
      "Serve the rice, curries, and naan bread on a large platter.",
      "Add a dollop of raita and mango chutney on the side.",
      "Finish the meal with a sweet treat of gulab jamun.",
    ],
    cooking_time_minutes: 60,
    complexity: "Medium",
    cuisines: ["Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 900,
    tags: ["festive", "traditional", "spicy"],
    image_caption_prompt:
      "Generate an image featuring a grand Indian thali with aromatic basmati rice, flavorful mixed vegetable curry, spicy chana masala, creamy butter chicken curry, soft garlic naan bread, cooling raita, sweet mango chutney, and a dessert of golden gulab jamun. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "04cf7685-3bf0-4afc-bd8e-21b4a0e5ca46",
    image: require("../../assets/recipe-images/Grand-Indian-Thali-04cf7685-3bf0-4afc-bd8e-21b4a0e5ca46.png"),
  },
  {
    name: "Summer Greek Salad",
    ingredients: [
      {
        name: "cucumber",
        quantity: "1",
      },
      {
        name: "tomatoes",
        quantity: "2",
      },
      {
        name: "red onion",
        quantity: "1/2",
      },
      {
        name: "feta cheese",
        quantity: "1/2 cup",
      },
      {
        name: "kalamata olives",
        quantity: "1/4 cup",
      },
      {
        name: "lemon juice",
        quantity: "2 tbsp",
      },
      {
        name: "extra-virgin olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "dried oregano",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Cut the cucumber and tomatoes into bite-sized pieces.",
      "Thinly slice the red onion.",
      "In a large bowl, mix the cucumber, tomatoes, and red onion.",
      "Add the feta cheese and kalamata olives and gently toss.",
      "In a small bowl, whisk together the lemon juice, extra-virgin olive oil, dried oregano, and salt.",
      "Pour the dressing over the salad and toss to combine.",
      "Serve immediately or refrigerate until ready to serve.",
    ],
    cooking_time_minutes: 15,
    complexity: "Easy",
    cuisines: ["Mediterranean"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 200,
    tags: ["vegetarian", "gluten-free", "light", "refreshing"],
    image_caption_prompt:
      "Generate an image featuring a delicious Summer Greek Salad filled with juicy tomatoes, crisp cucumbers, tangy feta cheese, and salty kalamata olives, all tossed in a zesty lemon and olive oil dressing. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "8318c97c-6047-4ba9-a1a5-229c9cc77bbe",
    image: require("../../assets/recipe-images/Summer-Greek-Salad-8318c97c-6047-4ba9-a1a5-229c9cc77bbe.png"),
  },
  {
    name: "French Onion Soup",
    ingredients: [
      {
        name: "yellow onions",
        quantity: "4 large",
      },
      {
        name: "butter",
        quantity: "3 tbsp",
      },
      {
        name: "flour",
        quantity: "3 tbsp",
      },
      {
        name: "beef broth",
        quantity: "6 cups",
      },
      {
        name: "dry white wine",
        quantity: "1/2 cup",
      },
      {
        name: "baguette",
        quantity: "1",
      },
      {
        name: "gruyere cheese",
        quantity: "1 cup shredded",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Melt butter in a large pot over medium heat.",
      "Add sliced onions and cook until caramelized, stirring occasionally (about 30 minutes).",
      "Add flour and stir for 1-2 minutes until well combined.",
      "Add beef broth and white wine, and bring to a boil.",
      "Reduce heat and simmer for 10-15 minutes.",
      "Preheat your broiler.",
      "Slice the baguette into rounds and place on a baking sheet.",
      "Broil the bread until lightly toasted, about 1-2 minutes.",
      "Ladle the soup into oven-safe bowls and place them on a baking sheet.",
      "Top each bowl with a slice of toasted bread and sprinkle with cheese.",
      "Broil the soup until the cheese is melted and bubbly, about 2-3 minutes.",
      "Serve hot!",
    ],
    cooking_time_minutes: 60,
    complexity: "Intermediate",
    cuisines: ["French"],
    meal_time: ["Appetizer"],
    calories_estimate: 450,
    tags: ["soup", "French onion", "romantic dinner"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of French Onion Soup topped with a slice of toasted baguette and melted gruyere cheese. Ensure that the soup is the focus of the image, and that all ingredients are clearly visible and nothing important is cut or cropped.",
    id: "e6c5ea84-a59b-4e48-ac0b-ebc81added20",
    image: require("../../assets/recipe-images/French-Onion-Soup-e6c5ea84-a59b-4e48-ac0b-ebc81added20.png"),
  },
  {
    name: "Cr\u00e8me Br\u00fbl\u00e9e",
    ingredients: [
      {
        name: "heavy cream",
        quantity: "2 cups",
      },
      {
        name: "egg yolks",
        quantity: "6",
      },
      {
        name: "granulated sugar",
        quantity: "1/2 cup",
      },
      {
        name: "vanilla extract",
        quantity: "1 tsp",
      },
      {
        name: "brown sugar",
        quantity: "6 tbsp",
      },
    ],
    instructions: [
      "Preheat oven to 325\u00b0F (160\u00b0C).",
      "In a medium saucepan, heat the heavy cream over medium heat until it just begins to steam.",
      "In a mixing bowl, whisk the egg yolks and granulated sugar together until light and frothy.",
      "Slowly pour the hot cream into the egg mixture, whisking constantly.",
      "Stir in the vanilla extract.",
      "Pour the mixture into individual ramekins.",
      "Place the ramekins in a baking dish and fill the dish with hot water until it reaches halfway up the sides of the ramekins.",
      "Bake for 35-40 minutes, or until the custard is set but still slightly jiggly in the center.",
      "Remove from the oven and let cool to room temperature.",
      "Cover the ramekins with plastic wrap and refrigerate for at least 1 hour (or up to 2 days).",
      "When ready to serve, sprinkle brown sugar evenly over the top of each custard.",
      "Use a kitchen torch to melt and caramelize the sugar into a crackly top.",
      "Serve immediately!",
    ],
    cooking_time_minutes: 120,
    complexity: "Intermediate",
    cuisines: ["French"],
    meal_time: ["Dessert"],
    calories_estimate: 350,
    tags: ["cr\u00e8me br\u00fbl\u00e9e", "French dessert", "romantic dinner"],
    image_caption_prompt:
      "Generate an image featuring a perfectly caramelized Cr\u00e8me Br\u00fbl\u00e9e with a delicate crackly top, served in an elegant ramekin. Ensure that the dessert is the focus of the image, and that all ingredients are clearly visible and nothing important is cut or cropped.",
    id: "23eb80a5-b199-4d52-b97e-4ca123724fcd",
    image: require("../../assets/recipe-images/Cr-me-Br-l-e-23eb80a5-b199-4d52-b97e-4ca123724fcd.png"),
  },
  {
    name: "Spicy Thai Green Curry with Tofu",
    ingredients: [
      {
        name: "extra-firm tofu",
        quantity: "1 block",
      },
      {
        name: "Thai green curry paste",
        quantity: "2 tbsp",
      },
      {
        name: "coconut milk",
        quantity: "1 can",
      },
      {
        name: "jasmine rice",
        quantity: "1 cup",
      },
      {
        name: "green beans",
        quantity: "1 cup",
      },
      {
        name: "red bell pepper",
        quantity: "1",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "ginger",
        quantity: "1 inch",
      },
      {
        name: "vegetable oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "fresh cilantro",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Wash the rice and cook it according to the package instructions.",
      "Drain the tofu and cut it into bite-sized cubes.",
      "In a large pot, heat the vegetable oil over medium-high heat.",
      "Add the onion and saut\u00e9 until translucent, about 2-3 minutes.",
      "Add the garlic and ginger and saut\u00e9 for another minute.",
      "Add the tofu and cook until browned on all sides, about 3-4 minutes.",
      "Add the Thai green curry paste and saut\u00e9 for another minute.",
      "Add the coconut milk, salt, and vegetables. Bring to a boil.",
      "Reduce heat to low and simmer for 10-15 minutes or until the vegetables are tender.",
      "Serve the curry over the jasmine rice and garnish with fresh cilantro.",
    ],
    cooking_time_minutes: 40,
    complexity: "Medium",
    cuisines: ["Thai"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 450,
    tags: ["vegetarian", "spicy", "adventurous", "Thai cuisine"],
    image_caption_prompt:
      "Generate an image featuring a fragrant bowl of Spicy Thai Green Curry with Tofu, served over fluffy jasmine rice and topped with fresh cilantro. Make sure all the ingredients are visible, and nothing important is cut or cropped.",
    id: "523030f8-2ceb-4322-8171-898711aad167",
    image: require("../../assets/recipe-images/Spicy-Thai-Green-Curry-with-Tofu-523030f8-2ceb-4322-8171-898711aad167.png"),
  },
  {
    name: "Mexican Street Corn Salad with Avocado",
    ingredients: [
      {
        name: "corn",
        quantity: "4 ears",
      },
      {
        name: "avocado",
        quantity: "1",
      },
      {
        name: "red onion",
        quantity: "1/2",
      },
      {
        name: "cilantro",
        quantity: "1/4 cup",
      },
      {
        name: "lime juice",
        quantity: "1/4 cup",
      },
      {
        name: "mayonnaise",
        quantity: "1/4 cup",
      },
      {
        name: "sour cream",
        quantity: "1/4 cup",
      },
      {
        name: "queso fresco cheese",
        quantity: "1/4 cup",
      },
      {
        name: "chili powder",
        quantity: "1 tsp",
      },
      {
        name: "garlic powder",
        quantity: "1 tsp",
      },
    ],
    instructions: [
      "Preheat the grill to medium-high heat.",
      "Shuck the corn and grill, turning occasionally, until charred in spots, about 8-10 minutes.",
      "Remove the corn from the grill and let it cool slightly.",
      "Cut the kernels off the cob and place in a large bowl.",
      "Chop the red onion and cilantro and add to the bowl with the corn kernels.",
      "In a small bowl, whisk together the lime juice, mayonnaise, sour cream, chili powder, and garlic powder.",
      "Pour the dressing over the corn mixture and toss to combine.",
      "Cut the avocado into cubes and gently fold into the corn mixture.",
      "Crumble the queso fresco cheese over the top of the salad.",
      "Serve immediately.",
    ],
    cooking_time_minutes: 20,
    complexity: "Medium",
    cuisines: ["Mexican"],
    meal_time: ["Lunch"],
    calories_estimate: 400,
    tags: ["vegetarian", "gluten-free", "mexican street corn"],
    image_caption_prompt:
      "Generate an image featuring a vibrant Mexican Street Corn Salad with Avocado filled with charred corn kernels, creamy avocado, tangy lime dressing, and crumbled queso fresco cheese. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "774f1cd0-4494-43f7-8f8d-d6654f0b277a",
    image: require("../../assets/recipe-images/Mexican-Street-Corn-Salad-with-Avocado-774f1cd0-4494-43f7-8f8d-d6654f0b277a.png"),
  },
  {
    name: "Miso Soup",
    ingredients: [
      {
        name: "dashi stock",
        quantity: "4 cups",
      },
      {
        name: "white miso paste",
        quantity: "1/2 cup",
      },
      {
        name: "tofu",
        quantity: "1/2 cup",
      },
      {
        name: "wakame seaweed",
        quantity: "1/4 cup",
      },
      {
        name: "green onions",
        quantity: "2",
      },
    ],
    instructions: [
      "In a large pot, bring the dashi stock to a boil.",
      "Reduce heat to low. Add the miso paste and whisk until it dissolves.",
      "Add the tofu and wakame seaweed. Simmer for 3-5 minutes.",
      "Ladle the soup into bowls. Garnish with sliced green onions.",
    ],
    cooking_time_minutes: 15,
    complexity: "Easy",
    cuisines: ["Japanese"],
    meal_time: ["Dinner"],
    calories_estimate: 100,
    tags: ["soup", "Japanese cuisine", "exotic"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of authentic Japanese miso soup made with savory dashi stock, white miso paste, tofu, wakame seaweed, and green onions. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "3c98fa36-3b6a-445a-87d2-34e79cfef9e7",
    image: require("../../assets/recipe-images/Miso-Soup-3c98fa36-3b6a-445a-87d2-34e79cfef9e7.png"),
  },
  {
    name: "Spicy Falafel Wrap",
    ingredients: [
      {
        name: "dried chickpeas",
        quantity: "1 cup",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic cloves",
        quantity: "2",
      },
      {
        name: "parsley",
        quantity: "1/2 cup",
      },
      {
        name: "cilantro",
        quantity: "1/2 cup",
      },
      {
        name: "ground cumin",
        quantity: "1 tsp",
      },
      {
        name: "ground coriander",
        quantity: "1 tsp",
      },
      {
        name: "baking powder",
        quantity: "1 tsp",
      },
      {
        name: "all-purpose flour",
        quantity: "1/2 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
      {
        name: "tahini",
        quantity: "1/2 cup",
      },
      {
        name: "lemon juice",
        quantity: "2 tbsp",
      },
      {
        name: "water",
        quantity: "1/4 cup",
      },
      {
        name: "whole wheat wrap",
        quantity: "1",
      },
      {
        name: "lettuce",
        quantity: "1 cup",
      },
      {
        name: "tomato",
        quantity: "1",
      },
      {
        name: "hot sauce",
        quantity: "1 tsp",
      },
    ],
    instructions: [
      "Soak the chickpeas overnight in water.",
      "Drain the chickpeas and place them in a food processor.",
      "Add onion, garlic, parsley, cilantro, cumin, coriander, baking powder, flour, salt, and pepper to the food processor.",
      "Process the mixture until it is smooth and uniform.",
      "Form the mixture into small balls and flatten them slightly.",
      "Heat oil in a frying pan over medium heat.",
      "Fry the falafel until they are golden brown on each side.",
      "Mix tahini, lemon juice, and water in a bowl. Add salt to taste.",
      "Warm the whole wheat wrap in the microwave for 10 seconds.",
      "Spread a teaspoon of hot sauce on the wrap.",
      "Spread the tahini sauce on the wrap.",
      "Add lettuce, tomato, and falafel to the wrap.",
      "Roll the wrap tightly and serve immediately.",
    ],
    cooking_time_minutes: 30,
    complexity: "Moderate",
    cuisines: ["Middle Eastern"],
    meal_time: ["Lunch"],
    calories_estimate: 550,
    tags: [
      "vegetarian",
      "wholesome",
      "tahini sauce",
      "wrap",
      "falafel",
      "spicy",
    ],
    image_caption_prompt:
      "Generate an image of a spicy Spicy Falafel Wrap with a creamy tahini sauce, fresh lettuce, juicy tomatoes, and a drizzle of hot sauce, all wrapped in a warm whole wheat wrap. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "8750f362-1ac0-4a5d-a98c-b39b3e0ac488",
    image: require("../../assets/recipe-images/Spicy-Falafel-Wrap-8750f362-1ac0-4a5d-a98c-b39b3e0ac488.png"),
  },
  {
    name: "Classic Cornbread and Coleslaw",
    ingredients: [
      {
        name: "cornmeal",
        quantity: "1 cup",
      },
      {
        name: "flour",
        quantity: "1 cup",
      },
      {
        name: "sugar",
        quantity: "1/4 cup",
      },
      {
        name: "baking powder",
        quantity: "4 tsp",
      },
      {
        name: "salt",
        quantity: "1 tsp",
      },
      {
        name: "buttermilk",
        quantity: "1 cup",
      },
      {
        name: "eggs",
        quantity: "2",
      },
      {
        name: "butter",
        quantity: "1/2 cup",
      },
      {
        name: "green cabbage",
        quantity: "1/2 head",
      },
      {
        name: "red cabbage",
        quantity: "1/2 head",
      },
      {
        name: "carrots",
        quantity: "2",
      },
      {
        name: "mayonnaise",
        quantity: "1/2 cup",
      },
      {
        name: "sour cream",
        quantity: "1/4 cup",
      },
      {
        name: "apple cider vinegar",
        quantity: "2 tbsp",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "1 tsp",
      },
      {
        name: "black pepper",
        quantity: "1/4 tsp",
      },
    ],
    instructions: [
      "Preheat oven to 400 degrees F.",
      "In a large bowl, mix together cornmeal, flour, sugar, baking powder, and salt.",
      "In a separate bowl, whisk together buttermilk, eggs, and melted butter.",
      "Add the wet ingredients to the dry ingredients and stir until just combined.",
      "Pour the batter into a greased 9-inch cast iron skillet.",
      "Bake for 20-25 minutes, until golden brown.",
      "While the cornbread is baking, shred the cabbage and carrots into a large bowl.",
      "In a separate bowl, whisk together mayonnaise, sour cream, apple cider vinegar, sugar, salt, and black pepper.",
      "Pour the dressing over the cabbage and carrots and toss to combine.",
      "Chill in the refrigerator until ready to serve.",
      "Serve the cornbread and coleslaw with Slow-Cooked BBQ Ribs.",
    ],
    cooking_time_minutes: 45,
    complexity: "Easy",
    cuisines: ["Southern American"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["cornbread", "coleslaw", "weekend feast"],
    image_caption_prompt:
      "Generate an image of classic Cornbread and Coleslaw, perfect as sides to Slow-Cooked BBQ Ribs. The cornbread should be golden brown and fluffy, while the coleslaw should be crunchy and colorful. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "015b029f-ec87-4b4a-8fe5-2e3914649102",
    image: require("../../assets/recipe-images/Classic-Cornbread-and-Coleslaw-015b029f-ec87-4b4a-8fe5-2e3914649102.png"),
  },
  {
    name: "Mediterranean Buddha Bowl",
    ingredients: [
      {
        name: "quinoa",
        quantity: "1 cup",
      },
      {
        name: "chickpeas",
        quantity: "1 can",
      },
      {
        name: "eggplant",
        quantity: "1",
      },
      {
        name: "zucchini",
        quantity: "1",
      },
      {
        name: "red bell pepper",
        quantity: "1",
      },
      {
        name: "red onion",
        quantity: "1/2",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "dried oregano",
        quantity: "1 tsp",
      },
      {
        name: "lemon",
        quantity: "1",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat the oven to 400\u00b0F.",
      "Wash and chop the eggplant, zucchini, and red bell pepper into bite-sized pieces.",
      "Slice the red onion into wedges.",
      "In a large bowl, mix the eggplant, zucchini, red bell pepper, and red onion with olive oil, dried oregano, salt, and pepper.",
      "Spread the vegetables in a single layer on a baking sheet.",
      "Roast in the oven for 25-30 minutes, or until tender and crispy.",
      "While the vegetables are roasting, rinse the quinoa under cold water.",
      "In a medium saucepan, bring 2 cups of water to a boil. Add quinoa and a pinch of salt. Reduce heat to low, cover, and simmer for 15 minutes.",
      "Rinse and drain the chickpeas.",
      "When the vegetables and quinoa are done, assemble the bowl by dividing the quinoa, chickpeas, and roasted vegetables into four bowls.",
      "Squeeze fresh lemon juice over the top.",
      "Serve immediately.",
    ],
    cooking_time_minutes: 40,
    complexity: "Easy",
    cuisines: ["Mediterranean"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["vegan", "gluten-free", "healthy", "nutritious"],
    image_caption_prompt:
      "Generate an image featuring a vibrant Mediterranean Buddha Bowl filled with fluffy quinoa, roasted eggplant, zucchini, red bell pepper, and chickpeas, all seasoned with dried oregano and a squeeze of fresh lemon juice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "9ca76dc0-6470-45cc-acec-db3b5d2446f1",
    image: require("../../assets/recipe-images/Mediterranean-Buddha-Bowl-9ca76dc0-6470-45cc-acec-db3b5d2446f1.png"),
  },
  {
    name: "Spicy Caribbean Rice and Peas",
    ingredients: [
      {
        name: "long-grain rice",
        quantity: "1 cup",
      },
      {
        name: "coconut milk",
        quantity: "1 can",
      },
      {
        name: "water",
        quantity: "1 cup",
      },
      {
        name: "kidney beans",
        quantity: "1 can",
      },
      {
        name: "scallions",
        quantity: "1/2 cup chopped",
      },
      {
        name: "thyme",
        quantity: "1 tbsp",
      },
      {
        name: "garlic",
        quantity: "2 cloves minced",
      },
      {
        name: "habanero pepper",
        quantity: "1",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "In a medium pot, add the rice, coconut milk, water, kidney beans, scallions, thyme, garlic, habanero pepper, salt, and pepper.",
      "Stir well and bring the mixture to a boil over high heat.",
      "Reduce the heat to low and cover the pot. Simmer for 18-20 minutes or until the rice is tender and the liquid is absorbed.",
      "Remove the habanero pepper before serving.",
      "Serve the Spicy Caribbean Rice and Peas as a side dish with grilled chicken or fish.",
    ],
    cooking_time_minutes: 30,
    complexity: "Easy",
    cuisines: ["Caribbean"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 300,
    tags: ["rice and peas", "Caribbean cuisine", "spicy"],
    image_caption_prompt:
      "Generate an image featuring a bowl of Spicy Caribbean Rice and Peas. The rice should be fluffy and well-seasoned, with kidney beans, scallions, and thyme mixed in. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "bea91cb7-ea49-4f00-a34f-009ecdf03bbb",
    image: require("../../assets/recipe-images/Spicy-Caribbean-Rice-and-Peas-bea91cb7-ea49-4f00-a34f-009ecdf03bbb.png"),
  },
  {
    name: "Gambas al Ajillo",
    ingredients: [
      {
        name: "shrimp",
        quantity: "1 lb",
      },
      {
        name: "olive oil",
        quantity: "1/4 cup",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "red pepper flakes",
        quantity: "1/4 tsp",
      },
      {
        name: "lemon",
        quantity: "1",
      },
      {
        name: "parsley",
        quantity: "for garnish",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Peel and devein the shrimp, leaving the tails on.",
      "In a large skillet, heat the olive oil over medium heat.",
      "Add the garlic and red pepper flakes and cook for 1-2 minutes, or until fragrant.",
      "Add the shrimp and cook for 2-3 minutes per side, or until pink and cooked through.",
      "Squeeze the lemon over the shrimp and garnish with parsley.",
      "Serve hot.",
    ],
    cooking_time_minutes: 15,
    complexity: "Easy",
    cuisines: ["Spanish"],
    meal_time: ["Appetizer"],
    calories_estimate: 300,
    tags: ["seafood", "gluten-free", "tapas"],
    image_caption_prompt:
      "Generate an image centered around Gambas al Ajillo, a classic Spanish tapa of plump, garlicky shrimp cooked in olive oil. Garnish with fresh parsley and a squeeze of lemon. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "9c3e1917-6879-41e8-8182-06326dfc9313",
    image: require("../../assets/recipe-images/Gambas-al-Ajillo-9c3e1917-6879-41e8-8182-06326dfc9313.png"),
  },
  {
    name: "Oktoberfest Sausage and Sauerkraut Skillet",
    ingredients: [
      {
        name: "smoked sausage",
        quantity: "1 lb",
      },
      {
        name: "sauerkraut",
        quantity: "1 lb",
      },
      {
        name: "potatoes",
        quantity: "1 lb",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "caraway seeds",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Slice the sausage into 1/2 inch pieces. Peel and dice the potatoes into small cubes. Finely chop the onion and garlic.",
      "In a large skillet, heat olive oil over medium heat. Add onion and garlic and saut\u00e9 until softened.",
      "Add the sausage to the skillet and cook until browned on both sides.",
      "Add the diced potatoes, sauerkraut, caraway seeds, salt, and pepper to the skillet. Stir to combine.",
      "Cover the skillet and cook for 15-20 minutes, or until the potatoes are tender.",
      "Serve hot with a cold beer.",
    ],
    cooking_time_minutes: 30,
    complexity: "Easy",
    cuisines: ["German"],
    meal_time: ["Dinner"],
    calories_estimate: 500,
    tags: ["Oktoberfest", "sausage", "sauerkraut"],
    image_caption_prompt:
      "Generate an image featuring a sizzling Oktoberfest Sausage and Sauerkraut Skillet, filled with juicy smoked sausage, tender potatoes, tangy sauerkraut, and fragrant caraway seeds. Make sure to include a cold beer in the image to complete the Oktoberfest experience.",
    id: "cb128bd5-93c7-4e8f-bf08-4db470409b1f",
    image: require("../../assets/recipe-images/Oktoberfest-Sausage-and-Sauerkraut-Skillet-cb128bd5-93c7-4e8f-bf08-4db470409b1f.png"),
  },
  {
    name: "Classic Bibimbap",
    ingredients: [
      {
        name: "short-grain rice",
        quantity: "1 cup",
      },
      {
        name: "ground beef",
        quantity: "1/2 lb",
      },
      {
        name: "zucchini",
        quantity: "1",
      },
      {
        name: "carrot",
        quantity: "1",
      },
      {
        name: "spinach",
        quantity: "2 cups",
      },
      {
        name: "bean sprouts",
        quantity: "1 cup",
      },
      {
        name: "shiitake mushrooms",
        quantity: "1 cup",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "soy sauce",
        quantity: "3 tbsp",
      },
      {
        name: "sesame oil",
        quantity: "1 tbsp",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "vegetable oil",
        quantity: "2 tbsp",
      },
      {
        name: "eggs",
        quantity: "4",
      },
      {
        name: "gochujang sauce",
        quantity: "4 tbsp",
      },
    ],
    instructions: [
      "Cook the rice according to package instructions.",
      "Thinly slice the zucchini and carrot into matchsticks. Saut\u00e9 in vegetable oil until tender. Set aside.",
      "Saut\u00e9 the spinach in vegetable oil until wilted. Set aside.",
      "Blanch the bean sprouts in boiling water for 2 minutes. Drain and rinse with cold water. Set aside.",
      "Saut\u00e9 the shiitake mushrooms and garlic in vegetable oil until tender. Set aside.",
      "In a bowl, mix soy sauce, sesame oil, and sugar. Add the cooked ground beef and mix well.",
      "Fry the eggs sunny-side up.",
      "To assemble, divide the cooked rice among four bowls. Top with the saut\u00e9ed vegetables, mushrooms, and beef. Place the fried egg on top. Add a spoonful of gochujang sauce on top of the egg.",
      "Mix everything together before eating.",
    ],
    cooking_time_minutes: 45,
    complexity: "Intermediate",
    cuisines: ["Korean"],
    meal_time: ["Dinner"],
    calories_estimate: 550,
    tags: ["bibimbap", "mixed vegetables", "beef", "gochujang sauce"],
    image_caption_prompt:
      "Generate an image showcasing a classic Bibimbap filled with fluffy short-grain rice, savory ground beef, colorful mixed vegetables, and a sunny-side up egg. Drizzle with gochujang sauce and garnish with sesame seeds. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "03f4463f-9812-484b-b1e0-afcd2025edb5",
    image: require("../../assets/recipe-images/Classic-Bibimbap-03f4463f-9812-484b-b1e0-afcd2025edb5.png"),
  },
  {
    name: "Brazilian Feijoada with Black Beans and Pork",
    ingredients: [
      {
        name: "black beans",
        quantity: "1 pound",
      },
      {
        name: "pork shoulder",
        quantity: "1 pound",
      },
      {
        name: "chorizo sausage",
        quantity: "1/2 pound",
      },
      {
        name: "bacon",
        quantity: "4 slices",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "orange",
        quantity: "1",
      },
      {
        name: "bay leaves",
        quantity: "2",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Soak the black beans overnight in water.",
      "In a large pot, cook the pork shoulder in water until tender, about 2-3 hours.",
      "Remove the pork shoulder from the pot and set aside.",
      "In the same pot, cook the chorizo sausage and bacon until browned.",
      "Remove the chorizo sausage and bacon from the pot and set aside.",
      "In the same pot, saut\u00e9 the chopped onion and garlic until soft.",
      "Add the black beans and enough water to cover them.",
      "Add the cooked pork shoulder, chorizo sausage, bacon, orange, and bay leaves to the pot.",
      "Simmer for 1-2 hours until the beans are tender.",
      "Season with salt and pepper to taste.",
      "Serve with rice.",
    ],
    cooking_time_minutes: 240,
    complexity: "Intermediate",
    cuisines: ["Brazilian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 600,
    tags: ["hearty", "comfort food", "pork", "black beans"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of Brazilian Feijoada with Black Beans and Pork, topped with orange slices and served with a side of rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "9209168a-f188-446e-8201-0e250a8666af",
    image: require("../../assets/recipe-images/Brazilian-Feijoada-with-Black-Beans-and-Pork-9209168a-f188-446e-8201-0e250a8666af.png"),
  },
  {
    name: "Moroccan Lamb Tagine with Apricots and Couscous",
    ingredients: [
      {
        name: "lamb shoulder",
        quantity: "1.5 lbs",
      },
      {
        name: "dried apricots",
        quantity: "1 cup",
      },
      {
        name: "couscous",
        quantity: "1 cup",
      },
      {
        name: "onion",
        quantity: "1 large",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "ginger",
        quantity: "1 inch",
      },
      {
        name: "cinnamon stick",
        quantity: "1",
      },
      {
        name: "ground coriander",
        quantity: "1 tsp",
      },
      {
        name: "ground cumin",
        quantity: "1 tsp",
      },
      {
        name: "turmeric",
        quantity: "1 tsp",
      },
      {
        name: "chicken broth",
        quantity: "2 cups",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Heat 2 tbsp of olive oil in a heavy-bottomed pot over medium-high heat.",
      "Season the lamb with salt and pepper and brown it in the pot, about 5 minutes per side. Remove the lamb from the pot and set it aside.",
      "In the same pot, saut\u00e9 the onion, garlic, and ginger until the onion is translucent.",
      "Add the cinnamon stick, coriander, cumin, and turmeric to the pot and cook for a minute or two.",
      "Add the chicken broth to the pot and bring it to a boil.",
      "Add the lamb and dried apricots to the pot, cover it, and simmer for 1.5 hours or until the lamb is tender.",
      "While the tagine is cooking, cook the couscous according to the package instructions.",
      "When the tagine is ready, remove the cinnamon stick and serve the lamb and apricots over the couscous.",
    ],
    cooking_time_minutes: 120,
    complexity: "Medium",
    cuisines: ["Moroccan"],
    meal_time: ["Dinner"],
    calories_estimate: 600,
    tags: ["lamb", "apricots", "couscous", "Moroccan", "exotic", "fragrant"],
    image_caption_prompt:
      "Generate an image featuring a delicious Moroccan Lamb Tagine with Apricots and Couscous. The aromatic lamb and apricots are served over fluffy couscous, and the dish is topped with fresh parsley. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "3425660c-2183-45a5-b14d-960ce7711715",
    image: require("../../assets/recipe-images/Moroccan-Lamb-Tagine-with-Apricots-and-Couscous-3425660c-2183-45a5-b14d-960ce7711715.png"),
  },
  {
    name: "Classic Beef Pho",
    ingredients: [
      {
        name: "beef bones",
        quantity: "2 lbs",
      },
      {
        name: "beef brisket",
        quantity: "1 lb",
      },
      {
        name: "rice noodles",
        quantity: "8 oz",
      },
      {
        name: "onion",
        quantity: "1 large",
      },
      {
        name: "ginger",
        quantity: "3-inch piece",
      },
      {
        name: "cinnamon stick",
        quantity: "1",
      },
      {
        name: "star anise",
        quantity: "2",
      },
      {
        name: "cloves",
        quantity: "2",
      },
      {
        name: "fish sauce",
        quantity: "3 tbsp",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "bean sprouts",
        quantity: "2 cups",
      },
      {
        name: "fresh basil leaves",
        quantity: "1 cup",
      },
      {
        name: "fresh cilantro leaves",
        quantity: "1 cup",
      },
      {
        name: "fresh mint leaves",
        quantity: "1 cup",
      },
      {
        name: "lime wedges",
        quantity: "4",
      },
    ],
    instructions: [
      "Preheat the oven to 425\u00b0F.",
      "Place the beef bones on a baking sheet and roast in the oven for 30 minutes.",
      "In a large stock pot, add the roasted beef bones, beef brisket, onion, ginger, cinnamon stick, star anise, and cloves. Add enough water to cover the ingredients by 2 inches.",
      "Bring the pot to a boil, then reduce heat and let simmer for 3-4 hours, skimming the surface occasionally to remove any foam or impurities.",
      "Remove the beef brisket and set aside to cool. Strain the broth through a fine mesh sieve and discard the solids.",
      "Rinse the pot and return the strained broth to the pot. Add fish sauce and sugar and bring to a simmer.",
      "Slice the cooled beef brisket thinly against the grain.",
      "Cook the rice noodles according to package instructions.",
      "Assemble the pho bowls. Divide the cooked noodles among 4 bowls. Top with sliced beef brisket and bean sprouts. Ladle hot broth over the top.",
      "Serve with fresh herbs and lime wedges on the side.",
    ],
    cooking_time_minutes: 240,
    complexity: "Difficult",
    cuisines: ["Vietnamese"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 600,
    tags: ["beef", "noodles", "soup"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of classic beef pho, filled with aromatic broth, tender slices of beef brisket, and silky rice noodles. Top with bean sprouts and fresh herbs such as basil, cilantro, and mint. Include a lime wedge on the side. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "685fc197-61e7-4dd8-a2f6-9b228fa41686",
    image: require("../../assets/recipe-images/Classic-Beef-Pho-685fc197-61e7-4dd8-a2f6-9b228fa41686.png"),
  },
  {
    name: "Classic Poutine",
    ingredients: [
      {
        name: "potatoes",
        quantity: "4 large",
      },
      {
        name: "cheese curds",
        quantity: "2 cups",
      },
      {
        name: "beef stock",
        quantity: "2 cups",
      },
      {
        name: "flour",
        quantity: "2 tbsp",
      },
      {
        name: "butter",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat the oven to 450\u00b0F.",
      "Peel and cut the potatoes into fries. Rinse under cold water and pat dry with a paper towel.",
      "Arrange the fries on a baking sheet in a single layer. Drizzle with olive oil and season with salt and pepper. Bake for 20-25 minutes, or until crispy and golden brown.",
      "While the fries are baking, prepare the gravy. Melt the butter in a saucepan over medium heat. Add the flour and whisk until smooth. Cook for 1-2 minutes, stirring constantly.",
      "Gradually add the beef stock, whisking constantly to prevent lumps. Bring to a boil, then reduce heat and simmer for 10-15 minutes, or until the gravy has thickened.",
      "When the fries are done, remove from the oven and transfer to a serving dish. Top with cheese curds and pour the hot gravy over the top.",
      "Serve immediately and enjoy!",
    ],
    cooking_time_minutes: 40,
    complexity: "Medium",
    cuisines: ["Canadian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 600,
    tags: ["comfort food", "appetizer", "weekend treat"],
    image_caption_prompt:
      "Generate an image centered around a delicious plate of Classic Poutine made with crispy fries, squeaky cheese curds, and savory gravy. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "b5d88fee-9e08-481f-bc5b-2d74fa338eb1",
    image: require("../../assets/recipe-images/Classic-Poutine-b5d88fee-9e08-481f-bc5b-2d74fa338eb1.png"),
  },
  {
    name: "Spicy African Jollof Rice with Chicken and Vegetables",
    ingredients: [
      {
        name: "chicken thighs",
        quantity: "4",
      },
      {
        name: "long-grain rice",
        quantity: "2 cups",
      },
      {
        name: "tomatoes",
        quantity: "3",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "bell pepper",
        quantity: "1",
      },
      {
        name: "scotch bonnet pepper",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "ginger",
        quantity: "1 inch",
      },
      {
        name: "curry powder",
        quantity: "1 tbsp",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "thyme",
        quantity: "1 tsp",
      },
      {
        name: "chicken stock",
        quantity: "3 cups",
      },
      {
        name: "vegetable oil",
        quantity: "1/4 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat the oven to 375\u00b0F.",
      "Season the chicken thighs with salt, black pepper, and paprika. Place in a baking dish and bake for 25-30 minutes, or until cooked through.",
      "While the chicken is cooking, blend the tomatoes, onion, bell pepper, scotch bonnet pepper, garlic, and ginger in a food processor or blender until smooth.",
      "Heat the vegetable oil in a large pot over medium heat. Add the blended tomato mixture and cook for 10-15 minutes, stirring occasionally.",
      "Add the curry powder, thyme, and rice to the pot. Stir to coat the rice in the tomato mixture.",
      "Pour in the chicken stock and bring to a boil. Reduce heat to low, cover, and simmer for 20-25 minutes, or until the rice is cooked through and the liquid has been absorbed.",
      "Add the cooked chicken to the pot and stir.",
      "Serve hot and enjoy!",
    ],
    cooking_time_minutes: 60,
    complexity: "Intermediate",
    cuisines: ["African"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["spicy", "savory", "rice", "chicken", "vegetables"],
    image_caption_prompt:
      "Generate an image featuring a spicy African Jollof Rice with Chicken and Vegetables. The dish is filled with fluffy rice, juicy chicken, and colorful vegetables such as tomatoes, bell pepper, and onion. The scotch bonnet pepper adds a nice kick of heat. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "fd76b7a3-56e2-4600-acc0-eea01301cb11",
    image: require("../../assets/recipe-images/Spicy-African-Jollof-Rice-with-Chicken-and-Vegetables-fd76b7a3-56e2-4600-acc0-eea01301cb11.png"),
  },
  {
    name: "Turkish Hummus",
    ingredients: [
      {
        name: "chickpeas",
        quantity: "1 can",
      },
      {
        name: "tahini",
        quantity: "2 tbsp",
      },
      {
        name: "garlic",
        quantity: "2 cloves",
      },
      {
        name: "lemon juice",
        quantity: "1 tbsp",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "paprika",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Drain and rinse the chickpeas.",
      "In a food processor, add the chickpeas, tahini, garlic, lemon juice, olive oil, and salt.",
      "Blend until smooth and creamy.",
      "Transfer to a serving bowl, drizzle with olive oil and sprinkle with paprika.",
      "Serve with pita bread or vegetables.",
    ],
    cooking_time_minutes: 10,
    complexity: "Easy",
    cuisines: ["Turkish"],
    meal_time: ["Appetizer"],
    calories_estimate: 150,
    tags: ["vegetarian", "gluten-free", "mezze"],
    image_caption_prompt:
      "Generate an image featuring a delicious Turkish Hummus served in a bowl, garnished with a sprinkle of paprika and a drizzle of olive oil. Include some pita bread and vegetables in the image. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "0e04b0e3-6ec2-47e9-8f5b-23d178d6d314",
    image: require("../../assets/recipe-images/Turkish-Hummus-0e04b0e3-6ec2-47e9-8f5b-23d178d6d314.png"),
  },
  {
    name: "Stuffed Grape Leaves (Dolmas)",
    ingredients: [
      {
        name: "grape leaves",
        quantity: "1 jar",
      },
      {
        name: "rice",
        quantity: "1 cup",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "lemon juice",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "2 cups",
      },
      {
        name: "dill",
        quantity: "1 tbsp",
      },
    ],
    instructions: [
      "In a large bowl, soak the grape leaves in warm water for 30 minutes.",
      "In a saucepan, heat the olive oil and saut\u00e9 the onions until they are translucent.",
      "Add the rice to the saucepan and saut\u00e9 for a few minutes until it is lightly toasted.",
      "Add the water, salt, and dill to the saucepan and bring to a boil.",
      "Reduce the heat, cover, and simmer for 20 minutes, or until the rice is cooked and the water is absorbed.",
      "Remove the grape leaves from the water and pat them dry with paper towels.",
      "Place a grape leaf on a flat surface, with the shiny side down and the stem side facing you.",
      "Place a spoonful of the rice mixture on the center of the grape leaf.",
      "Fold the bottom of the grape leaf over the rice, then fold the sides towards the center, and roll tightly.",
      "Repeat with the remaining grape leaves and rice mixture.",
      "Place the stuffed grape leaves in a large pot, stacked tightly.",
      "Add enough water to cover the grape leaves, and add the lemon juice.",
      "Cover the pot and bring to a boil.",
      "Reduce the heat and simmer for 30-40 minutes, or until the grape leaves are tender and the water is absorbed.",
      "Serve warm or at room temperature.",
    ],
    cooking_time_minutes: 120,
    complexity: "Difficult",
    cuisines: ["Turkish"],
    meal_time: ["Appetizer"],
    calories_estimate: 250,
    tags: ["vegetarian", "gluten-free", "mezze"],
    image_caption_prompt:
      "Generate an image featuring a plate of delicious Stuffed Grape Leaves (Dolmas) filled with flavorful rice and dill, rolled in tender grape leaves. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "214375e3-2c75-4d62-ae13-dc6153184c9c",
    image: require("../../assets/recipe-images/Stuffed-Grape-Leaves-Dolmas-214375e3-2c75-4d62-ae13-dc6153184c9c.png"),
  },
  {
    name: "Herring and Crispbread Platter",
    ingredients: [
      {
        name: "pickled herring fillets",
        quantity: "8 oz",
      },
      {
        name: "cucumber",
        quantity: "1, sliced",
      },
      {
        name: "red onion",
        quantity: "1, sliced",
      },
      {
        name: "hard boiled eggs",
        quantity: "2, sliced",
      },
      {
        name: "dill",
        quantity: "1/4 cup, chopped",
      },
      {
        name: "sour cream",
        quantity: "1/2 cup",
      },
      {
        name: "lemon juice",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
      {
        name: "crispbread",
        quantity: "8 oz",
      },
    ],
    instructions: [
      "Arrange the herring fillets, sliced cucumber, sliced red onion, and sliced hard boiled eggs on a platter.",
      "In a small bowl, mix the sour cream, chopped dill, lemon juice, salt, and pepper.",
      "Serve the herring and vegetables with the sour cream sauce and crispbread.",
    ],
    cooking_time_minutes: 15,
    complexity: "Easy",
    cuisines: ["Swedish"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 300,
    tags: ["herring", "crispbread", "Swedish cuisine"],
    image_caption_prompt:
      "Generate an image of a Swedish smorgasbord featuring a platter of delicious pickled herring fillets, sliced cucumber, sliced red onion, and sliced hard boiled eggs. Include a side of crispy and flavorful crispbread. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "d4ab4d8e-ca9c-45d9-b42c-7405f8734b3f",
    image: require("../../assets/recipe-images/Herring-and-Crispbread-Platter-d4ab4d8e-ca9c-45d9-b42c-7405f8734b3f.png"),
  },
  {
    name: "Spicy Chicken Adobo",
    ingredients: [
      {
        name: "chicken drumsticks",
        quantity: "6",
      },
      {
        name: "garlic",
        quantity: "1 head",
      },
      {
        name: "soy sauce",
        quantity: "1/2 cup",
      },
      {
        name: "vinegar",
        quantity: "1/2 cup",
      },
      {
        name: "bay leaves",
        quantity: "3",
      },
      {
        name: "peppercorns",
        quantity: "1 tsp",
      },
      {
        name: "brown sugar",
        quantity: "1 tbsp",
      },
      {
        name: "red pepper flakes",
        quantity: "1 tsp",
      },
      {
        name: "cooked rice",
        quantity: "4 cups",
      },
    ],
    instructions: [
      "In a large pot or Dutch oven, heat some oil over medium-high heat. Add the chicken and brown on all sides.",
      "Add the garlic and cook for a minute or until fragrant.",
      "Add the soy sauce, vinegar, bay leaves, peppercorns, brown sugar, and red pepper flakes. Bring to a boil.",
      "Lower the heat to medium-low and simmer for 30-40 minutes or until the chicken is cooked through and tender.",
      "Serve hot over cooked rice.",
    ],
    cooking_time_minutes: 50,
    complexity: "Intermediate",
    cuisines: ["Filipino"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 550,
    tags: ["gluten-free", "dairy-free", "spicy"],
    image_caption_prompt:
      "Generate an image featuring a spicy plate of Chicken Adobo with tender chicken drumsticks, tangy vinegar sauce, and aromatic garlic, served over a bed of fluffy white rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "eeceb7ba-c50f-454e-af7e-908836f5c38d",
    image: require("../../assets/recipe-images/Spicy-Chicken-Adobo-eeceb7ba-c50f-454e-af7e-908836f5c38d.png"),
  },
  {
    name: "Vegetarian Borscht with Lentils",
    ingredients: [
      {
        name: "beets",
        quantity: "2 medium",
      },
      {
        name: "cabbage",
        quantity: "1/2 head",
      },
      {
        name: "onion",
        quantity: "1 large",
      },
      {
        name: "carrots",
        quantity: "2 medium",
      },
      {
        name: "potatoes",
        quantity: "2 medium",
      },
      {
        name: "tomatoes",
        quantity: "2 medium",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "vegetable broth",
        quantity: "4 cups",
      },
      {
        name: "lentils",
        quantity: "1/2 cup, uncooked",
      },
      {
        name: "sour cream",
        quantity: "1/2 cup",
      },
      {
        name: "dill",
        quantity: "1/4 cup, chopped",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Peel and chop the beets, onion, carrots, potatoes, and tomatoes into small pieces.",
      "In a large pot, saut\u00e9 the onion and garlic in olive oil until translucent.",
      "Add the beets, carrots, and potatoes, and saut\u00e9 for a few minutes.",
      "Add the vegetable broth and lentils, and bring to a boil. Reduce heat and let simmer for 30 minutes.",
      "Add the cabbage and tomatoes, and let simmer for another 30 minutes.",
      "Season with salt and pepper to taste.",
      "Serve hot with a dollop of sour cream and chopped dill.",
    ],
    cooking_time_minutes: 90,
    complexity: "Medium",
    cuisines: ["Russian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 250,
    tags: ["vegetarian", "winter", "comfort food"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of the Vegetarian Borscht, filled with tender beets, potatoes, and cabbage, in a rich vegetable broth with lentils. Add a dollop of sour cream and a sprinkle of fresh dill on top. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "c9bd5aa4-6f47-440e-83a5-678e4053d594",
    image: require("../../assets/recipe-images/Vegetarian-Borscht-with-Lentils-c9bd5aa4-6f47-440e-83a5-678e4053d594.png"),
  },
  {
    name: "Doro Wat",
    ingredients: [
      {
        name: "chicken thighs",
        quantity: "6",
      },
      {
        name: "onion",
        quantity: "1 large",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "ginger",
        quantity: "1 tbsp",
      },
      {
        name: "berbere spice mix",
        quantity: "2 tbsp",
      },
      {
        name: "tomato paste",
        quantity: "2 tbsp",
      },
      {
        name: "chicken broth",
        quantity: "2 cups",
      },
      {
        name: "butter",
        quantity: "2 tbsp",
      },
      {
        name: "hard-boiled eggs",
        quantity: "2",
      },
      {
        name: "cilantro",
        quantity: "1/4 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Heat a large pot over medium-high heat.",
      "Add the butter and let it melt.",
      "Add the chicken thighs and cook until browned on all sides, about 10 minutes.",
      "Remove the chicken from the pot and set it aside.",
      "Add the onion, garlic, and ginger to the pot and saut\u00e9 until the onion is translucent, about 5 minutes.",
      "Add the berbere spice mix and tomato paste to the pot and stir to combine.",
      "Add the chicken broth to the pot and bring it to a boil.",
      "Add the chicken back to the pot, reduce the heat to low, and cover the pot with a lid.",
      "Simmer for 45 minutes, or until the chicken is cooked through and tender.",
      "Add the hard-boiled eggs to the pot and let them cook for 5 minutes.",
      "Remove from heat and let the stew rest for 10 minutes.",
      "Garnish with cilantro and serve over injera.",
    ],
    cooking_time_minutes: 75,
    complexity: "Difficult",
    cuisines: ["Ethiopian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["spicy", "chicken", "stew"],
    image_caption_prompt:
      "Generate an image featuring a fragrant and spicy Doro Wat chicken stew, an Ethiopian delicacy made with tender chicken thighs, hard-boiled eggs, and a rich berbere spice mix. Serve it over a stack of injera bread for an authentic East African feast. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "d6455a05-6f22-4cff-b947-91a23691552b",
    image: require("../../assets/recipe-images/Doro-Wat-d6455a05-6f22-4cff-b947-91a23691552b.png"),
  },
  {
    name: "Barbie Lamb Chops",
    ingredients: [
      {
        name: "lamb chops",
        quantity: "1 lb",
      },
      {
        name: "olive oil",
        quantity: "1/4 cup",
      },
      {
        name: "lemon juice",
        quantity: "1/4 cup",
      },
      {
        name: "garlic",
        quantity: "3 cloves, minced",
      },
      {
        name: "oregano",
        quantity: "2 tbsp, chopped",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat grill to medium-high heat.",
      "In a small bowl, whisk together olive oil, lemon juice, garlic, oregano, salt, and pepper.",
      "Brush the marinade over the lamb chops.",
      "Grill the lamb chops for 3-4 minutes per side for medium-rare, or until desired doneness is reached.",
      "Remove from grill and let rest for a few minutes before serving.",
    ],
    cooking_time_minutes: 20,
    complexity: "Easy",
    cuisines: ["Australian"],
    meal_time: ["Dinner"],
    calories_estimate: 500,
    tags: ["grill", "lamb chops", "outdoor cooking"],
    image_caption_prompt:
      "Generate an image featuring succulent Barbie Lamb Chops, grilled to perfection and marinated in a delicious mixture of olive oil, lemon juice, garlic, and oregano. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "2ff915cc-cf3d-41e8-96f3-7b369f5fa541",
    image: require("../../assets/recipe-images/Barbie-Lamb-Chops-2ff915cc-cf3d-41e8-96f3-7b369f5fa541.png"),
  },
  {
    name: "Mango and Avocado Ceviche",
    ingredients: [
      {
        name: "white fish",
        quantity: "1 lb",
      },
      {
        name: "red onion",
        quantity: "1",
      },
      {
        name: "jalapeno pepper",
        quantity: "1",
      },
      {
        name: "lime juice",
        quantity: "1 cup",
      },
      {
        name: "cilantro",
        quantity: "1/2 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "mango",
        quantity: "1",
      },
      {
        name: "avocado",
        quantity: "1",
      },
    ],
    instructions: [
      "Cut the fish into bite-sized pieces and place in a bowl.",
      "Thinly slice the red onion and add to the bowl with the fish.",
      "Mince the jalapeno pepper and add to the bowl.",
      "Add the lime juice, cilantro, and salt to the bowl and mix well.",
      "Cover the bowl with plastic wrap and refrigerate for at least 30 minutes to marinate the fish.",
      "Peel and dice the mango and avocado.",
      "When the fish is done marinating, add the mango and avocado to the bowl and mix well.",
      "Serve the ceviche cold.",
    ],
    cooking_time_minutes: 40,
    complexity: "Medium",
    cuisines: ["Peruvian"],
    meal_time: ["Appetizer"],
    calories_estimate: 350,
    tags: ["seafood", "healthy", "gluten-free", "sweet"],
    image_caption_prompt:
      "Generate an image featuring a zesty and light Mango and Avocado Ceviche made with fresh white fish marinated in lime juice and jalapeno peppers, then garnished with red onion, cilantro, diced mango, and avocado. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "d970dc4a-192e-4bf3-88a9-3667e482bea1",
    image: require("../../assets/recipe-images/Mango-and-Avocado-Ceviche-d970dc4a-192e-4bf3-88a9-3667e482bea1.png"),
  },
  {
    name: "Island Style Poke Bowl",
    ingredients: [
      {
        name: "sushi grade tuna",
        quantity: "1 lb",
      },
      {
        name: "avocado",
        quantity: "1",
      },
      {
        name: "mango",
        quantity: "1/2",
      },
      {
        name: "watermelon",
        quantity: "1/2",
      },
      {
        name: "rice",
        quantity: "2 cups",
      },
      {
        name: "soy sauce",
        quantity: "1/4 cup",
      },
      {
        name: "rice vinegar",
        quantity: "2 tbsp",
      },
      {
        name: "honey",
        quantity: "1 tbsp",
      },
      {
        name: "lime juice",
        quantity: "1 tbsp",
      },
      {
        name: "sesame seeds",
        quantity: "1 tbsp",
      },
      {
        name: "green onions",
        quantity: "2",
      },
    ],
    instructions: [
      "Cook the rice according to package instructions and let cool.",
      "Cut the tuna into bite-sized pieces.",
      "In a small bowl, whisk together the soy sauce, rice vinegar, honey, and lime juice.",
      "In a large bowl, combine the cooked rice, tuna, diced avocado, diced mango, and diced watermelon.",
      "Pour the soy sauce mixture over the bowl and toss to combine.",
      "Garnish with sesame seeds and sliced green onions.",
      "Serve immediately.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Hawaiian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 450,
    tags: ["tuna", "poke bowl", "tropical", "summer"],
    image_caption_prompt:
      "Generate an image featuring an Island Style Poke Bowl with fresh sushi-grade tuna, creamy avocado, juicy mango, and sweet watermelon, all tossed with a tangy and slightly sweet soy sauce dressing. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "ee0db481-26f5-438c-afba-6ff8af95ce01",
    image: require("../../assets/recipe-images/Island-Style-Poke-Bowl-ee0db481-26f5-438c-afba-6ff8af95ce01.png"),
  },
  {
    name: "Seaside Moules-Frites",
    ingredients: [
      {
        name: "mussels",
        quantity: "2 lbs",
      },
      {
        name: "unsalted butter",
        quantity: "4 tbsp",
      },
      {
        name: "shallot",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "white wine",
        quantity: "1 cup",
      },
      {
        name: "heavy cream",
        quantity: "1/2 cup",
      },
      {
        name: "parsley",
        quantity: "1/4 cup",
      },
      {
        name: "potatoes",
        quantity: "2 lbs",
      },
      {
        name: "vegetable oil",
        quantity: "4 cups",
      },
      {
        name: "sea salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "In a large pot, melt the butter over medium heat.",
      "Add the shallot and garlic and cook until soft, about 3 minutes.",
      "Add the mussels and white wine. Cover and cook for about 5 minutes, or until the mussels have opened up.",
      "Remove the mussels from the pot and set aside.",
      "Add the heavy cream to the pot and simmer for about 5 minutes, or until the sauce has thickened.",
      "Add the parsley and stir to combine.",
      "Season the sauce with salt and pepper to taste.",
      "In a separate pot, heat the vegetable oil over medium-high heat.",
      "Peel and cut the potatoes into thin fries.",
      "Add the fries to the pot and cook until golden brown and crispy, about 5-7 minutes.",
      "Remove the fries from the pot and drain on a paper towel.",
      "Sprinkle the fries with sea salt to taste.",
      "Serve the mussels with the sauce and fries on the side.",
    ],
    cooking_time_minutes: 40,
    complexity: "Medium",
    cuisines: ["Belgian"],
    meal_time: ["Dinner"],
    calories_estimate: 900,
    tags: ["seafood", "fries", "dinner", "Belgian cuisine"],
    image_caption_prompt:
      "Generate an image featuring a seaside-inspired Moules-Frites dish with fresh mussels in a creamy white wine sauce and a side of crispy potato fries. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "a3c99b72-0459-4a15-880a-2d87ef2971c9",
    image: require("../../assets/recipe-images/Seaside-Moules-Frites-a3c99b72-0459-4a15-880a-2d87ef2971c9.png"),
  },
  {
    name: "Apple Cinnamon Dutch Pancakes",
    ingredients: [
      {
        name: "all-purpose flour",
        quantity: "1 cup",
      },
      {
        name: "eggs",
        quantity: "2",
      },
      {
        name: "milk",
        quantity: "3/4 cup",
      },
      {
        name: "salt",
        quantity: "1/4 tsp",
      },
      {
        name: "butter",
        quantity: "3 tbsp",
      },
      {
        name: "apples",
        quantity: "2",
      },
      {
        name: "cinnamon",
        quantity: "1 tsp",
      },
      {
        name: "syrup",
        quantity: "1/2 cup",
      },
      {
        name: "powdered sugar",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "In a large mixing bowl, whisk together the flour, eggs, milk, and salt until smooth.",
      "In a large frying pan, melt the butter over medium heat.",
      "Peel and slice the apples into thin slices.",
      "Add the apples and cinnamon to the frying pan and cook for 3-4 minutes until softened.",
      "Remove the apples from the frying pan and set aside.",
      "Pour 1/4 cup of the batter into the frying pan and swirl it around to create a thin layer.",
      "Add a few slices of the cooked apples on top of the batter.",
      "Cook for 1-2 minutes on each side until golden brown.",
      "Repeat with the remaining batter and apples.",
      "Serve hot with syrup and powdered sugar.",
    ],
    cooking_time_minutes: 35,
    complexity: "Easy",
    cuisines: ["Dutch"],
    meal_time: ["Breakfast", "Dessert"],
    calories_estimate: 350,
    tags: [
      "pancakes",
      "apples",
      "cinnamon",
      "syrup",
      "powdered sugar",
      "Dutch cuisine",
    ],
    image_caption_prompt:
      "Generate an image featuring a stack of fluffy Apple Cinnamon Dutch Pancakes, topped with saut\u00e9ed apples and a sprinkle of cinnamon. Drizzle with syrup and dust with powdered sugar. Ensure that all the pancakes and toppings are clearly visible and nothing important is cut or cropped.",
    id: "fa4afb56-01c4-474e-a82a-5c1288440852",
    image: require("../../assets/recipe-images/Apple-Cinnamon-Dutch-Pancakes-fa4afb56-01c4-474e-a82a-5c1288440852.png"),
  },
  {
    name: "Labneh with Olives and Za'atar",
    ingredients: [
      {
        name: "Greek yogurt",
        quantity: "2 cups",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "za'atar",
        quantity: "2 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
      {
        name: "green olives",
        quantity: "1/2 cup, pitted",
      },
      {
        name: "black olives",
        quantity: "1/2 cup, pitted",
      },
    ],
    instructions: [
      "Place the Greek yogurt in a large bowl.",
      "Add the olive oil, za'atar, salt, and black pepper. Stir to combine.",
      "Transfer the labneh to a serving dish.",
      "Top with the green and black olives.",
      "Sprinkle with a little more za'atar.",
      "Serve with warm pita bread or toast.",
    ],
    cooking_time_minutes: 10,
    complexity: "Easy",
    cuisines: ["Middle Eastern"],
    meal_time: ["Breakfast", "Brunch"],
    calories_estimate: 250,
    tags: ["vegetarian", "gluten-free", "labneh", "Middle Eastern breakfast"],
    image_caption_prompt:
      "Generate an image featuring a creamy Labneh topped with a colorful mix of green and black olives, sprinkled with za'atar and served with warm pita bread. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "d0992310-faab-43d9-931c-caa8227f6709",
    image: require("../../assets/recipe-images/Labneh-with-Olives-and-Za-atar-d0992310-faab-43d9-931c-caa8227f6709.png"),
  },
  {
    name: "Bacalhau \u00e0 Br\u00e1s with Salted Cod, Potatoes, and Eggs (Simplified)",
    ingredients: [
      {
        name: "salted cod",
        quantity: "1 lb",
      },
      {
        name: "potatoes",
        quantity: "4",
      },
      {
        name: "eggs",
        quantity: "4",
      },
      {
        name: "olive oil",
        quantity: "1/4 cup",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "black olives",
        quantity: "1/2 cup",
      },
      {
        name: "parsley",
        quantity: "1/2 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Soak the salted cod overnight in water to remove excess salt. Drain and rinse the cod.",
      "Cut the potatoes into thin strips and fry them in olive oil until golden brown. Remove and drain on paper towels.",
      "In the same pan, saut\u00e9 the onion and garlic until fragrant. Add the cod, and cook for 5 minutes.",
      "Add the fried potatoes to the pan and mix well.",
      "Beat the eggs in a separate bowl. Add the eggs to the pan and mix well until the eggs are fully cooked.",
      "Add the black olives and parsley to the pan. Season with salt and black pepper to taste.",
      "Serve hot.",
    ],
    cooking_time_minutes: 60,
    complexity: "Easy",
    cuisines: ["Portuguese"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["traditional", "salted cod", "eggs", "potatoes"],
    image_caption_prompt:
      "Generate an image centered around a mouth-watering plate of Bacalhau \u00e0 Br\u00e1s. The dish should feature flaky salted cod, crispy fried potatoes, and creamy scrambled eggs, all mixed together with fragrant onions and garlic. Add a sprinkle of black olives and parsley on top. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "ff8ab87e-02b1-46c7-8859-189630a91409",
    image: require("../../assets/recipe-images/Bacalhau-Br-s-with-Salted-Cod-Potatoes-and-Eggs-Simplified-ff8ab87e-02b1-46c7-8859-189630a91409.png"),
  },
  {
    name: "Vegan Jamaican Ackee and Saltfish with Fried Dumplings",
    ingredients: [
      {
        name: "young jackfruit",
        quantity: "1 can",
      },
      {
        name: "red onion",
        quantity: "1",
      },
      {
        name: "scallion",
        quantity: "1/2 cup",
      },
      {
        name: "tomato",
        quantity: "1",
      },
      {
        name: "scotch bonnet pepper",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "2 cloves",
      },
      {
        name: "thyme",
        quantity: "1 tbsp",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "flour",
        quantity: "1 cup",
      },
      {
        name: "cornmeal",
        quantity: "1/4 cup",
      },
      {
        name: "baking powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "1/2 tsp",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "water",
        quantity: "1/2 cup",
      },
    ],
    instructions: [
      "Drain the jackfruit and rinse with water. Set aside.",
      "Heat oil in a large skillet over medium heat. Add onion, scallion, garlic, thyme, and scotch bonnet pepper. Cook until the onion is translucent.",
      "Add the tomato and cook for another 2 minutes.",
      "Add the jackfruit. Stir gently to combine. Cook for 5 minutes.",
      "Season with black pepper to taste.",
      "To make the dumplings, mix flour, cornmeal, baking powder, salt, and sugar in a bowl.",
      "Add water gradually to form a smooth dough. Knead the dough for 5 minutes.",
      "Divide the dough into 6-8 pieces. Roll each piece into a ball and flatten into a disc.",
      "Heat oil in a frying pan over medium heat. Fry the dumplings until golden brown, about 5 minutes on each side.",
      "Serve the vegan ackee and saltfish with fried dumplings.",
    ],
    cooking_time_minutes: 45,
    complexity: "Intermediate",
    cuisines: ["Jamaican", "Vegan"],
    meal_time: ["Breakfast", "Lunch"],
    calories_estimate: 500,
    tags: ["Caribbean", "vegan", "dumplings"],
    image_caption_prompt:
      "Generate an image featuring a delicious plate of Vegan Jamaican Ackee and Saltfish with Fried Dumplings. The plate should be centered, and the dish should be garnished with scallions and tomatoes. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "0d703cf7-dca4-43c2-a9e3-e70caf3936e2",
    image: require("../../assets/recipe-images/Vegan-Jamaican-Ackee-and-Saltfish-with-Fried-Dumplings-0d703cf7-dca4-43c2-a9e3-e70caf3936e2.png"),
  },
  {
    name: "Argentinian Asado: Beef Short Ribs",
    ingredients: [
      {
        name: "beef short ribs",
        quantity: "2 lbs",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "olive oil",
        quantity: "1/4 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat grill to medium heat.",
      "In a small bowl, mix together the minced garlic, olive oil, salt, and black pepper.",
      "Rub the garlic and olive oil mixture onto the short ribs.",
      "Grill the short ribs for about 5-6 minutes on each side, or until cooked to your desired level of doneness.",
      "Serve hot with chimichurri sauce.",
    ],
    cooking_time_minutes: 25,
    complexity: "Easy",
    cuisines: ["Argentinian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 700,
    tags: ["meat lover's delight", "grilling", "chimichurri sauce"],
    image_caption_prompt:
      "Generate an image featuring sizzling Argentinian Asado beef short ribs, rubbed with garlic and olive oil, and grilled to perfection. Serve with vibrant chimichurri sauce. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "64d0e022-0162-4742-8ea5-de5e7dc3a478",
    image: require("../../assets/recipe-images/Argentinian-Asado-Beef-Short-Ribs-64d0e022-0162-4742-8ea5-de5e7dc3a478.png"),
  },
  {
    name: "Vegetarian Hainanese Chicken Rice",
    ingredients: [
      {
        name: "shiitake mushrooms",
        quantity: "1 cup",
      },
      {
        name: "oyster mushrooms",
        quantity: "1 cup",
      },
      {
        name: "ginger",
        quantity: "2 inches",
      },
      {
        name: "garlic",
        quantity: "6 cloves",
      },
      {
        name: "vegetable broth",
        quantity: "2 cups",
      },
      {
        name: "rice",
        quantity: "2 cups",
      },
      {
        name: "spring onion",
        quantity: "2",
      },
      {
        name: "cilantro",
        quantity: "1/4 cup",
      },
      {
        name: "soy sauce",
        quantity: "2 tbsp",
      },
      {
        name: "sesame oil",
        quantity: "1 tbsp",
      },
    ],
    instructions: [
      "Wash the rice and soak it in water for 20 minutes.",
      "In a pot, heat 2 tbsp of oil over medium heat. Add garlic and ginger and cook until fragrant.",
      "Add the rice and stir for 1-2 minutes.",
      "Add vegetable broth and bring to a boil. Reduce heat to low, cover, and cook for 20 minutes.",
      "While the rice is cooking, slice the mushrooms and cook them in a separate pan until they are browned on both sides.",
      "Mix soy sauce and sesame oil in a small bowl.",
      "Chop spring onions and cilantro.",
      "When the rice is done, fluff it with a fork. Add spring onions and cilantro and mix well.",
      "Serve the mushrooms with rice and soy sauce mixture.",
    ],
    cooking_time_minutes: 45,
    complexity: "Easy",
    cuisines: ["Singaporean"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["vegetarian", "low-carb", "gluten-free"],
    image_caption_prompt:
      "Generate an image featuring a vegetarian Hainanese chicken rice dish, with mushrooms cooked until browned, fluffy rice, and a small bowl of soy sauce mixture. Include chopped spring onions and cilantro as garnish. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "6cbdb762-4236-46bd-a2a5-5723f255a25f",
    image: require("../../assets/recipe-images/Vegetarian-Hainanese-Chicken-Rice-6cbdb762-4236-46bd-a2a5-5723f255a25f.png"),
  },
  {
    name: "Spicy Prawn Nasi Goreng",
    ingredients: [
      {
        name: "cooked rice",
        quantity: "2 cups",
      },
      {
        name: "prawns",
        quantity: "1 lb",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "shallots",
        quantity: "2",
      },
      {
        name: "bird's eye chili",
        quantity: "3",
      },
      {
        name: "kaffir lime leaves",
        quantity: "4",
      },
      {
        name: "kecap manis",
        quantity: "2 tbsp",
      },
      {
        name: "fish sauce",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Heat the oil in a wok or large skillet over high heat.",
      "Add the garlic, shallots, and bird's eye chili. Stir-fry until fragrant.",
      "Add the prawns and cook until pink, then remove from the wok and set aside.",
      "Add the cooked rice to the wok and stir-fry for a few minutes.",
      "Add the kecap manis, fish sauce, salt, and pepper. Stir-fry for another minute.",
      "Add the prawns back to the wok and stir-fry to combine.",
      "Serve hot with sambal and garnish with kaffir lime leaves.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Indonesian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 450,
    tags: ["spicy", "prawns", "fried rice", "sambal"],
    image_caption_prompt:
      "Generate an image featuring a mouth-watering Spicy Prawn Nasi Goreng with fluffy fried rice, plump prawns, and aromatic garlic, shallots, and bird's eye chili. Ensure that the sambal is visible in the corner of the image.",
    id: "6197abb3-fca4-4a1f-9d38-d4242d50d15b",
    image: require("../../assets/recipe-images/Spicy-Prawn-Nasi-Goreng-6197abb3-fca4-4a1f-9d38-d4242d50d15b.png"),
  },
  {
    name: "Irish Breakfast Platter",
    ingredients: [
      {
        name: "sausages",
        quantity: "4",
      },
      {
        name: "black pudding",
        quantity: "4 slices",
      },
      {
        name: "bacon",
        quantity: "4 slices",
      },
      {
        name: "eggs",
        quantity: "4",
      },
      {
        name: "butter",
        quantity: "2 tbsp",
      },
      {
        name: "mushrooms",
        quantity: "1 cup",
      },
      {
        name: "tomatoes",
        quantity: "2",
      },
      {
        name: "soda bread",
        quantity: "4 slices",
      },
    ],
    instructions: [
      "Preheat the oven to 375\u00b0F.",
      "Heat a large skillet over medium-high heat. Add the sausages and cook until browned and cooked through. Remove from the skillet and set aside.",
      "In the same skillet, add the black pudding and bacon. Cook until crispy and browned. Remove from the skillet and set aside.",
      "Add the mushrooms to the skillet and cook until tender. Remove from the skillet and set aside.",
      "Cut the tomatoes into thick slices. Add them to the skillet and cook until tender. Remove from the skillet and set aside.",
      "In a separate skillet, melt the butter over medium heat. Crack the eggs into the skillet and cook until the whites are set and the yolks are still runny.",
      "While the eggs are cooking, place the soda bread slices on a baking sheet and heat in the preheated oven for 5 minutes.",
      "Arrange the sausages, black pudding, bacon, mushrooms, tomatoes, eggs, and soda bread on a large platter.",
      "Serve hot and enjoy!",
    ],
    cooking_time_minutes: 45,
    complexity: "Intermediate",
    cuisines: ["Irish"],
    meal_time: ["Breakfast"],
    calories_estimate: 800,
    tags: ["hearty", "meat", "traditional"],
    image_caption_prompt:
      "Create an image featuring a hearty Irish Breakfast Platter with sausages, black pudding, bacon, mushrooms, tomatoes, and eggs, served with slices of warm soda bread. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "52a2722c-c6ce-44b2-86e2-bc3cf27f4f24",
    image: require("../../assets/recipe-images/Irish-Breakfast-Platter-52a2722c-c6ce-44b2-86e2-bc3cf27f4f24.png"),
  },
  {
    name: "Classic Ropa Vieja",
    ingredients: [
      {
        name: "flank steak",
        quantity: "2 lbs",
      },
      {
        name: "onion",
        quantity: "1 large",
      },
      {
        name: "green bell pepper",
        quantity: "1",
      },
      {
        name: "red bell pepper",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "canned tomatoes",
        quantity: "28 oz",
      },
      {
        name: "beef broth",
        quantity: "1 cup",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "dried oregano",
        quantity: "1 tsp",
      },
      {
        name: "bay leaves",
        quantity: "2",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Season the flank steak with salt and pepper.",
      "In a large skillet, heat the olive oil over medium-high heat.",
      "Add the flank steak and sear on both sides until browned. Remove from the skillet and set aside.",
      "Add the onion, green and red bell peppers, and garlic to the skillet. Cook until softened, about 5 minutes.",
      "Add the canned tomatoes, beef broth, paprika, cumin, oregano, bay leaves, and salt and pepper to taste. Stir to combine.",
      "Return the flank steak to the skillet and spoon the tomato mixture over it. Cover and simmer on low heat for 2-3 hours, or until the beef is tender and shreds easily.",
      "Shred the beef with a fork and serve with white rice.",
    ],
    cooking_time_minutes: 180,
    complexity: "Intermediate",
    cuisines: ["Latin American"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["beef", "tomatoes", "rice"],
    image_caption_prompt:
      "Generate an image featuring a classic Ropa Vieja dish with tender shredded beef, flavorful tomatoes, and fragrant spices, served with a side of white rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "9d2a72f7-2ce2-4613-8104-5e4481d6c29c",
    image: require("../../assets/recipe-images/Classic-Ropa-Vieja-9d2a72f7-2ce2-4613-8104-5e4481d6c29c.png"),
  },
  {
    name: "Malaysian Laksa with Prawns",
    ingredients: [
      {
        name: "dried rice noodles",
        quantity: "200g",
      },
      {
        name: "cooked prawns",
        quantity: "200g",
      },
      {
        name: "coconut milk",
        quantity: "1 can",
      },
      {
        name: "chicken stock",
        quantity: "2 cups",
      },
      {
        name: "lemongrass",
        quantity: "2 stalks",
      },
      {
        name: "galangal",
        quantity: "2 inch piece",
      },
      {
        name: "red chili",
        quantity: "2",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "coriander",
        quantity: "1/2 cup",
      },
      {
        name: "lime",
        quantity: "1",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "vegetable oil",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Soak the dried rice noodles in hot water for 10 minutes, then drain and set aside.",
      "In a blender, blend the lemongrass, galangal, red chili, garlic, onion, and coriander to make a paste.",
      "Heat the vegetable oil in a pot over medium heat. Add the paste and cook for 5 minutes, stirring occasionally.",
      "Add the chicken stock and coconut milk to the pot and bring to a boil. Reduce heat to low and let simmer for 10 minutes.",
      "Add the cooked prawns to the pot and cook for 2-3 minutes until heated through.",
      "Add salt and sugar to taste.",
      "Divide the rice noodles between two bowls. Pour the laksa soup with prawns over the noodles.",
      "Garnish with lime wedges and more fresh coriander.",
      "Serve immediately.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Malaysian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["spicy", "seafood", "coconut milk"],
    image_caption_prompt:
      "Generate an image centered around a steaming bowl of Malaysian Laksa with Prawns, featuring a spicy soup with coconut milk, chicken stock, and fresh herbs, served over a bed of soft rice noodles and topped with plump, juicy prawns. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "602ed606-436a-4f78-8627-dda840065eb6",
    image: require("../../assets/recipe-images/Malaysian-Laksa-with-Prawns-602ed606-436a-4f78-8627-dda840065eb6.png"),
  },
  {
    name: "Classic Roast Beef and Yorkshire Pudding",
    ingredients: [
      {
        name: "beef roast",
        quantity: "2 lbs",
      },
      {
        name: "all-purpose flour",
        quantity: "1 cup",
      },
      {
        name: "eggs",
        quantity: "4",
      },
      {
        name: "milk",
        quantity: "1 cup",
      },
      {
        name: "vegetable oil",
        quantity: "1/4 cup",
      },
      {
        name: "potatoes",
        quantity: "4",
      },
      {
        name: "carrots",
        quantity: "4",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "3 cloves",
      },
      {
        name: "rosemary",
        quantity: "2 sprigs",
      },
      {
        name: "thyme",
        quantity: "2 sprigs",
      },
      {
        name: "beef broth",
        quantity: "1 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Preheat the oven to 375\u00b0F.",
      "Season the beef roast with salt and pepper.",
      "In a large skillet, heat the vegetable oil over high heat. Sear the beef roast on all sides until browned.",
      "Transfer the beef roast to a roasting pan. Add the potatoes, carrots, onion, garlic, rosemary, and thyme to the pan.",
      "Roast in the oven for 1 hour, or until the beef is cooked to your liking.",
      "In a medium bowl, whisk together the eggs, flour, and milk until smooth.",
      "In a separate baking dish, pour in the beef broth, and place it in the oven for 5 minutes to heat.",
      "Remove the baking dish from the oven and pour the batter into the dish with the beef broth.",
      "Return the dish to the oven and bake for 20-25 minutes, or until the pudding has risen and is golden brown.",
      "Remove the beef roast and vegetables from the oven, and let them rest for 10 minutes before carving.",
      "Serve the roast beef and vegetables with the Yorkshire pudding.",
    ],
    cooking_time_minutes: 120,
    complexity: "Intermediate",
    cuisines: ["British"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 600,
    tags: ["family dinner", "traditional", "roast beef"],
    image_caption_prompt:
      "Generate an image featuring a classic Sunday roast with beef, potatoes, and carrots, served with golden-brown Yorkshire pudding. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "80cf19c6-60fa-443c-ac28-429b0c62fd4d",
    image: require("../../assets/recipe-images/Classic-Roast-Beef-and-Yorkshire-Pudding-80cf19c6-60fa-443c-ac28-429b0c62fd4d.png"),
  },
  {
    name: "Classic Jambalaya",
    ingredients: [
      {
        name: "andouille sausage",
        quantity: "1 lb",
      },
      {
        name: "chicken breast",
        quantity: "1 lb",
      },
      {
        name: "shrimp",
        quantity: "1 lb",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "green bell pepper",
        quantity: "1",
      },
      {
        name: "celery",
        quantity: "1 stalk",
      },
      {
        name: "garlic cloves",
        quantity: "3",
      },
      {
        name: "tomato paste",
        quantity: "2 tbsp",
      },
      {
        name: "diced tomatoes",
        quantity: "1 can",
      },
      {
        name: "chicken broth",
        quantity: "2 cups",
      },
      {
        name: "long grain rice",
        quantity: "1 1/2 cups",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "cayenne pepper",
        quantity: "1/2 tsp",
      },
      {
        name: "dried thyme",
        quantity: "1/2 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Slice the andouille sausage and chicken breast into bite-sized pieces.",
      "In a large pot, heat up some oil over medium-high heat. Add the sausage and chicken, and cook until browned, about 5 minutes. Remove and set aside.",
      "In the same pot, add the onion, bell pepper, celery, and garlic. Cook until softened, about 5 minutes.",
      "Add the tomato paste, diced tomatoes, chicken broth, rice, paprika, cayenne pepper, dried thyme, salt, and black pepper. Stir to combine.",
      "Bring to a boil, then reduce heat to low. Cover and simmer for 20-25 minutes, or until the rice is cooked and the liquid is absorbed.",
      "Add the cooked sausage, chicken, and shrimp to the pot, and stir until heated through.",
      "Serve hot and enjoy!",
    ],
    cooking_time_minutes: 60,
    complexity: "Intermediate",
    cuisines: ["American", "Southern"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 450,
    tags: ["jambalaya", "sausage", "shrimp", "rice"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of Classic Jambalaya, with long-grain rice, savory andouille sausage, tender chicken breast, and succulent shrimp. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "c53204f7-761c-4620-b359-89d724e958e3",
    image: require("../../assets/recipe-images/Classic-Jambalaya-c53204f7-761c-4620-b359-89d724e958e3.png"),
  },
  {
    name: "Classic Potato and Cheese Pierogi",
    ingredients: [
      {
        name: "all-purpose flour",
        quantity: "2 cups",
      },
      {
        name: "warm water",
        quantity: "1/2 cup",
      },
      {
        name: "salt",
        quantity: "1/2 tsp",
      },
      {
        name: "potatoes",
        quantity: "3",
      },
      {
        name: "cheddar cheese",
        quantity: "1/2 cup",
      },
      {
        name: "butter",
        quantity: "2 tbsp",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "sour cream",
        quantity: "1/4 cup",
      },
      {
        name: "salt and pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "In a large bowl, mix flour and salt. Slowly pour in warm water, stirring constantly until a dough forms.",
      "Knead the dough on a floured surface for 5-7 minutes or until smooth.",
      "Cover the dough with a damp cloth and allow it to rest for at least 30 minutes.",
      "Peel and boil the potatoes until tender. Mash with butter and sour cream. Season with salt and pepper to taste.",
      "Roll out the dough on a floured surface and cut into 3-inch circles with a cookie cutter.",
      "Place a spoonful of the potato mixture onto each circle of dough.",
      "Fold the dough over and pinch the edges together to seal.",
      "Bring a pot of salted water to a boil. Add the pierogi and cook for 3-5 minutes or until they float to the surface.",
      "In a separate pan, saut\u00e9 chopped onions in butter until translucent. Serve the pierogi topped with saut\u00e9ed onions and grated cheddar cheese.",
    ],
    cooking_time_minutes: 45,
    complexity: "Intermediate",
    cuisines: ["Polish"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["comfort food", "vegetarian", "dumplings"],
    image_caption_prompt:
      "Generate an image featuring warm, comforting Classic Potato and Cheese Pierogi, handmade with love. Show the tender dough filled with creamy mashed potatoes and cheddar cheese, topped with saut\u00e9ed onions and a dollop of sour cream. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "f6a4941e-bf69-410e-8bbd-5e0e68a8b00e",
    image: require("../../assets/recipe-images/Classic-Potato-and-Cheese-Pierogi-f6a4941e-bf69-410e-8bbd-5e0e68a8b00e.png"),
  },
  {
    name: "Slow-cooked Beef Nihari",
    ingredients: [
      {
        name: "beef shank",
        quantity: "2 lbs",
      },
      {
        name: "garlic paste",
        quantity: "2 tbsp",
      },
      {
        name: "ginger paste",
        quantity: "2 tbsp",
      },
      {
        name: "onions",
        quantity: "2",
      },
      {
        name: "red chili powder",
        quantity: "2 tbsp",
      },
      {
        name: "coriander powder",
        quantity: "2 tbsp",
      },
      {
        name: "turmeric powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "flour",
        quantity: "3 tbsp",
      },
      {
        name: "oil",
        quantity: "1/2 cup",
      },
      {
        name: "water",
        quantity: "6 cups",
      },
      {
        name: "fresh ginger",
        quantity: "1 inch",
      },
      {
        name: "green chili peppers",
        quantity: "4",
      },
      {
        name: "cilantro",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "In a large pot, heat the oil over medium heat. Add the onions and fry until golden brown.",
      "Add the beef shank and fry on both sides until browned.",
      "Add the garlic paste, ginger paste, red chili powder, coriander powder, turmeric powder, garam masala powder, and salt. Mix well.",
      "Add enough water to cover the meat and bring to a boil. Reduce heat to low, cover the pot, and let the meat cook for 3-4 hours until it is very tender.",
      "In a separate pan, heat the flour and oil together until the mixture turns brown.",
      "Add the flour and oil mixture to the pot with the meat and mix well.",
      "Add the sliced ginger, green chili peppers, and cilantro. Mix well and let the nihari simmer for another 20-30 minutes.",
      "Serve hot with naan or rice.",
    ],
    cooking_time_minutes: 270,
    complexity: "Difficult",
    cuisines: ["Pakistani", "Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["beef", "spicy", "slow-cooked", "rich"],
    image_caption_prompt:
      "Generate an image centered around a flavorful Slow-cooked Beef Nihari with tender beef shank, spicy broth, and aromatic spices like ginger and garam masala. Serve with hot naan or rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "da630331-91d4-4f91-818a-03aec031cba4",
    image: require("../../assets/recipe-images/Slow-cooked-Beef-Nihari-da630331-91d4-4f91-818a-03aec031cba4.png"),
  },
  {
    name: "Spicy Sichuan Hot Pot",
    ingredients: [
      {
        name: "beef shank",
        quantity: "1 lb",
      },
      {
        name: "pork belly",
        quantity: "1 lb",
      },
      {
        name: "fresh shiitake mushrooms",
        quantity: "1 lb",
      },
      {
        name: "napa cabbage",
        quantity: "1 head",
      },
      {
        name: "tofu",
        quantity: "1 block",
      },
      {
        name: "enoki mushrooms",
        quantity: "1 lb",
      },
      {
        name: "baby bok choy",
        quantity: "1 lb",
      },
      {
        name: "bean sprouts",
        quantity: "1 lb",
      },
      {
        name: "Sichuan peppercorns",
        quantity: "2 tbsp",
      },
      {
        name: "dried red chili peppers",
        quantity: "10",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "ginger",
        quantity: "1 inch",
      },
      {
        name: "green onions",
        quantity: "4",
      },
      {
        name: "Sichuan hot pot sauce",
        quantity: "1 cup",
      },
      {
        name: "chicken broth",
        quantity: "8 cups",
      },
    ],
    instructions: [
      "Fill a large pot with chicken broth and bring to a boil.",
      "Add Sichuan peppercorns, dried red chili peppers, garlic, ginger, and green onions to the pot. Simmer for 10 minutes.",
      "Slice the beef shank and pork belly into thin pieces. Arrange them on a large platter with the rest of the ingredients.",
      "Transfer the hot pot sauce to a small bowl.",
      "To serve, bring the pot of broth to the table and place it on a portable stove or hot plate. Each person can add their desired ingredients to the pot and cook them until they are done. Dip the cooked food into the hot pot sauce before eating.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Chinese"],
    meal_time: ["Dinner"],
    calories_estimate: 500,
    tags: ["spicy", "communal dining", "hot pot"],
    image_caption_prompt:
      "Generate an image featuring a Spicy Sichuan Hot Pot filled with a variety of ingredients such as beef shank, pork belly, fresh shiitake mushrooms, napa cabbage, tofu, enoki mushrooms, baby bok choy, and bean sprouts. The pot should be bubbling with the spicy broth and all the ingredients should be clearly visible. Ensure that nothing important is cut or cropped.",
    id: "3c1d1d39-324d-4571-a377-7c2a1c1cf3d9",
    image: require("../../assets/recipe-images/Spicy-Sichuan-Hot-Pot-3c1d1d39-324d-4571-a377-7c2a1c1cf3d9.png"),
  },
  {
    name: "Roasted Beet and Goat Cheese Sm\u00f8rrebr\u00f8d",
    ingredients: [
      {
        name: "rye bread",
        quantity: "2 slices",
      },
      {
        name: "roasted beets",
        quantity: "1/2 cup",
      },
      {
        name: "goat cheese",
        quantity: "1 oz",
      },
      {
        name: "honey",
        quantity: "1 tsp",
      },
      {
        name: "walnuts",
        quantity: "1 tbsp",
      },
      {
        name: "arugula",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "Toast the rye bread slices.",
      "Spread the goat cheese on top of the bread slices.",
      "Top with roasted beets and arugula.",
      "Drizzle with honey and sprinkle with walnuts.",
      "Serve immediately.",
    ],
    cooking_time_minutes: 15,
    complexity: "Easy",
    cuisines: ["Danish"],
    meal_time: ["Lunch"],
    calories_estimate: 300,
    tags: ["vegetarian", "gluten-free", "low-calorie"],
    image_caption_prompt:
      "Generate an image featuring a colorful Roasted Beet and Goat Cheese Sm\u00f8rrebr\u00f8d topped with fresh arugula, drizzled with honey, and sprinkled with walnuts. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "08cdf08d-39d2-4818-95bb-3ad01763fb16",
    image: require("../../assets/recipe-images/Roasted-Beet-and-Goat-Cheese-Sm-rrebr-d-08cdf08d-39d2-4818-95bb-3ad01763fb16.png"),
  },
  {
    name: "Traditional Chilean Beef Empanadas",
    ingredients: [
      {
        name: "ground beef",
        quantity: "1 lb",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "olives",
        quantity: "1/2 cup",
      },
      {
        name: "raisins",
        quantity: "1/2 cup",
      },
      {
        name: "flour",
        quantity: "3 cups",
      },
      {
        name: "butter",
        quantity: "1 stick",
      },
      {
        name: "water",
        quantity: "1 cup",
      },
    ],
    instructions: [
      "Heat a large skillet over medium heat and cook the ground beef until browned.",
      "Add the diced onion, paprika, and cumin to the skillet and cook until the onion is translucent.",
      "Add the olives and raisins to the skillet and cook for an additional 5 minutes.",
      "In a separate bowl, mix together the flour, butter, and water to form a dough.",
      "Roll out the dough on a floured surface and cut into circles.",
      "Place a spoonful of the beef mixture onto each circle of dough.",
      "Fold the dough over the filling and crimp the edges to seal.",
      "Place the empanadas on a baking sheet and bake in the oven at 375\u00b0F for 30 minutes or until golden brown.",
    ],
    cooking_time_minutes: 60,
    complexity: "Intermediate",
    cuisines: ["Chilean"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["beef", "empanadas", "savory", "pastry"],
    image_caption_prompt:
      "Create an image featuring Traditional Chilean Beef Empanadas. The savory pastry is filled with spiced ground beef, onions, olives, and raisins. The pastry is golden brown and crispy, and the filling is oozing out. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "16d79769-8d31-4d50-b799-750e1d363569",
    image: require("../../assets/recipe-images/Traditional-Chilean-Beef-Empanadas-16d79769-8d31-4d50-b799-750e1d363569.png"),
  },
  {
    name: "Traditional Bobotie",
    ingredients: [
      {
        name: "minced beef",
        quantity: "500g",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "2 cloves",
      },
      {
        name: "curry powder",
        quantity: "2 tbsp",
      },
      {
        name: "turmeric",
        quantity: "1 tsp",
      },
      {
        name: "ground cumin",
        quantity: "1 tsp",
      },
      {
        name: "ground coriander",
        quantity: "1 tsp",
      },
      {
        name: "ground ginger",
        quantity: "1 tsp",
      },
      {
        name: "chutney",
        quantity: "2 tbsp",
      },
      {
        name: "white bread",
        quantity: "2 slices",
      },
      {
        name: "milk",
        quantity: "1 cup",
      },
      {
        name: "bay leaves",
        quantity: "2",
      },
      {
        name: "eggs",
        quantity: "3",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Preheat the oven to 180\u00b0C.",
      "In a large pan, heat the oil over medium heat. Add the onion and garlic and saut\u00e9 until soft and fragrant.",
      "Add the minced beef to the pan and cook until browned.",
      "Add the curry powder, turmeric, cumin, coriander, and ginger to the pan and stir until the spices are well combined with the meat.",
      "Add the chutney to the pan and mix well.",
      "Soak the bread slices in milk and squeeze out the excess. Add the bread to the pan and stir until well combined.",
      "Remove the pan from the heat and transfer the mixture to a baking dish. Smooth the top with a spoon.",
      "In a separate bowl, beat the eggs and season with salt and pepper. Pour the egg mixture over the meat mixture in the baking dish.",
      "Place the bay leaves on top of the egg mixture.",
      "Bake for 30-40 minutes or until the egg custard is golden brown and set.",
      "Serve hot with yellow rice and sambal.",
    ],
    cooking_time_minutes: 60,
    complexity: "Medium",
    cuisines: ["South African"],
    meal_time: ["Dinner"],
    calories_estimate: 500,
    tags: ["minced beef", "spices", "egg custard"],
    image_caption_prompt:
      "Generate an image featuring a delicious Traditional Bobotie, a South African classic dish with spicy minced beef topped with a golden egg custard. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "5cc9cb02-0aa4-45bc-ab77-864cea82a990",
    image: require("../../assets/recipe-images/Traditional-Bobotie-5cc9cb02-0aa4-45bc-ab77-864cea82a990.png"),
  },
  {
    name: "Koshari Bowl with Spicy Tomato Sauce",
    ingredients: [
      {
        name: "rice",
        quantity: "1 cup",
      },
      {
        name: "brown lentils",
        quantity: "1 cup",
      },
      {
        name: "elbow macaroni",
        quantity: "1 cup",
      },
      {
        name: "olive oil",
        quantity: "2 tbsp",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "tomato paste",
        quantity: "2 tbsp",
      },
      {
        name: "crushed tomatoes",
        quantity: "1 can",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "coriander",
        quantity: "1 tsp",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "cayenne pepper",
        quantity: "1/4 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Cook the rice and lentils separately according to package instructions.",
      "Cook the elbow macaroni according to package instructions.",
      "In a large saucepan, heat the olive oil over medium heat.",
      "Add the garlic and onion. Cook until the onion is translucent, about 5 minutes.",
      "Add the tomato paste, crushed tomatoes, cumin, coriander, paprika, cayenne pepper, salt, and black pepper.",
      "Reduce heat to low and let simmer for 10 minutes.",
      "In a bowl, layer the rice, lentils, and elbow macaroni.",
      "Pour the spicy tomato sauce over the top and serve immediately.",
    ],
    cooking_time_minutes: 45,
    complexity: "Moderate",
    cuisines: ["Egyptian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["vegetarian", "spicy", "comfort food"],
    image_caption_prompt:
      "Generate an image featuring a hot and spicy Koshari Bowl filled with fluffy rice, savory brown lentils, and al dente elbow macaroni, all smothered in a rich, flavorful tomato sauce. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "9f699130-cd71-4672-b0ce-dcd27b1b7b6b",
    image: require("../../assets/recipe-images/Koshari-Bowl-with-Spicy-Tomato-Sauce-9f699130-cd71-4672-b0ce-dcd27b1b7b6b.png"),
  },
  {
    name: "Traditional Finnish Salmon Soup",
    ingredients: [
      {
        name: "salmon fillets",
        quantity: "4",
      },
      {
        name: "potatoes",
        quantity: "4",
      },
      {
        name: "carrots",
        quantity: "3",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "butter",
        quantity: "2 tbsp",
      },
      {
        name: "water",
        quantity: "4 cups",
      },
      {
        name: "heavy cream",
        quantity: "1/2 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Peel and chop the potatoes, carrots, and onion into bite-sized pieces.",
      "In a large pot, melt the butter over medium heat.",
      "Add the onion and saut\u00e9 until translucent.",
      "Add the chopped potatoes and carrots to the pot and saut\u00e9 for 5 minutes.",
      "Add the water to the pot and bring to a boil.",
      "Reduce heat to medium-low and simmer for 15 minutes, or until the vegetables are tender.",
      "Cut the salmon into bite-sized pieces and add to the pot. Simmer for 5 minutes, or until the salmon is cooked through.",
      "Add the heavy cream to the pot and stir to combine.",
      "Season with salt and pepper to taste.",
      "Serve hot and enjoy!",
    ],
    cooking_time_minutes: 35,
    complexity: "Easy",
    cuisines: ["Nordic"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["comfort food", "soup", "salmon", "potatoes", "carrots"],
    image_caption_prompt:
      "Generate an image featuring a bowl of hot and comforting Traditional Finnish Salmon Soup, filled with bites of tender salmon, chunks of potatoes and carrots, all in a creamy broth. The soup should be the focus, with a touch of greens to accent the dish. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "52fa51ce-6b01-467e-9b8e-f440dc6a3b13",
    image: require("../../assets/recipe-images/Traditional-Finnish-Salmon-Soup-52fa51ce-6b01-467e-9b8e-f440dc6a3b13.png"),
  },
  {
    name: "Authentic North Indian Butter Chicken",
    ingredients: [
      {
        name: "chicken breasts",
        quantity: "1 lb",
      },
      {
        name: "yogurt",
        quantity: "1/2 cup",
      },
      {
        name: "lemon juice",
        quantity: "1 tbsp",
      },
      {
        name: "ghee",
        quantity: "2 tbsp",
      },
      {
        name: "onion",
        quantity: "1, chopped",
      },
      {
        name: "garlic",
        quantity: "2 cloves, minced",
      },
      {
        name: "ginger",
        quantity: "1 inch, grated",
      },
      {
        name: "tomatoes",
        quantity: "2, chopped",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "coriander",
        quantity: "1 tsp",
      },
      {
        name: "garam masala",
        quantity: "1 tsp",
      },
      {
        name: "paprika",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "heavy cream",
        quantity: "1/2 cup",
      },
    ],
    instructions: [
      "In a bowl, combine the yogurt and lemon juice. Add chicken breasts and marinate for at least 30 minutes.",
      "In a pan, melt ghee. Add onions, garlic, and ginger. Saut\u00e9 until onions are translucent.",
      "Add chopped tomatoes and cook until they are soft.",
      "Add cumin, coriander, garam masala, paprika, and salt. Mix well.",
      "Remove from heat and let the mixture cool down a bit.",
      "In a blender, blend the onion-tomato mixture until smooth.",
      "In a pan, heat ghee. Add chicken and cook until browned on all sides.",
      "Add the blended mixture to the pan. Mix well and cook for 10-15 minutes until chicken is cooked through.",
      "Add heavy cream and mix well. Simmer for 5-10 minutes until the sauce thickens.",
      "Serve hot with naan and jeera rice.",
    ],
    cooking_time_minutes: 60,
    complexity: "Intermediate",
    cuisines: ["North Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["creamy", "spicy", "flavorful"],
    image_caption_prompt:
      "Generate an image showcasing the rich and creamy Authentic North Indian Butter Chicken, served alongside fluffy Naan and aromatic Jeera Rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "5cde54d5-d3b1-44cb-a161-8bb17b4a32d6",
    image: require("../../assets/recipe-images/Authentic-North-Indian-Butter-Chicken-5cde54d5-d3b1-44cb-a161-8bb17b4a32d6.png"),
  },
  {
    name: "Bengali Mustard Fish Curry",
    ingredients: [
      {
        name: "fish",
        quantity: "500g",
      },
      {
        name: "mustard oil",
        quantity: "3 tbsp",
      },
      {
        name: "mustard seeds",
        quantity: "2 tbsp",
      },
      {
        name: "turmeric",
        quantity: "1 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1 tsp",
      },
      {
        name: "green chili",
        quantity: "2",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "2 cups",
      },
      {
        name: "coriander leaves",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Clean and wash the fish. Marinate the fish with salt and turmeric for 10 minutes.",
      "Heat mustard oil in a pan. Add mustard seeds and let them crackle.",
      "Add the marinated fish and fry until golden brown. Remove the fish from the pan.",
      "In the same pan, add green chilies, turmeric, red chili powder, and salt. Mix well.",
      "Add water and bring it to a boil. Add the fried fish to the pan.",
      "Cover the pan and let it simmer for 10 minutes.",
      "Garnish with coriander leaves and serve hot with steamed rice.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Bengali", "Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["fish", "curry", "mustard", "traditional"],
    image_caption_prompt:
      "Generate an image featuring a delicious Bengali Mustard Fish Curry with tender fish coated in a spicy mustard sauce. Serve with steaming hot rice. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "10ac18d2-33f1-40ac-b5e9-6117c540b594",
    image: require("../../assets/recipe-images/Bengali-Mustard-Fish-Curry-10ac18d2-33f1-40ac-b5e9-6117c540b594.png"),
  },
  {
    name: "Classic Goan Prawn Curry",
    ingredients: [
      {
        name: "prawns",
        quantity: "500g",
      },
      {
        name: "coconut milk",
        quantity: "1 can",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "tomato",
        quantity: "1",
      },
      {
        name: "ginger",
        quantity: "1 tsp",
      },
      {
        name: "garlic",
        quantity: "1 tsp",
      },
      {
        name: "green chillies",
        quantity: "2",
      },
      {
        name: "turmeric powder",
        quantity: "1 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "cumin powder",
        quantity: "1 tsp",
      },
      {
        name: "red chilli powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Clean and devein the prawns.",
      "Finely chop the onion, tomato, ginger and garlic. Slit the green chillies.",
      "Heat oil in a pan and add onion. Saute till translucent.",
      "Add ginger, garlic and green chillies. Fry for a minute.",
      "Add the chopped tomato and saute till it turns mushy.",
      "Add turmeric powder, coriander powder, cumin powder, red chilli powder and salt. Fry for a minute.",
      "Add the prawns and saute for 2-3 minutes until they start to turn pink.",
      "Pour in the coconut milk and bring it to a boil.",
      "Simmer for 5-7 minutes until the prawns are cooked through.",
      "Serve hot with steamed rice.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Indian", "Goan"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 300,
    tags: ["prawns", "curry", "coconut milk"],
    image_caption_prompt:
      "Generate an image showcasing a classic Goan Prawn Curry with Coconut Milk served with steamed rice. Ensure that the prawns are visible and the curry is topped with fresh coriander leaves.",
    id: "f85a07f7-85ed-4652-8f1c-b23b93fbcf60",
    image: require("../../assets/recipe-images/Classic-Goan-Prawn-Curry-f85a07f7-85ed-4652-8f1c-b23b93fbcf60.png"),
  },
  {
    name: "Hyderabadi Chicken Biryani",
    ingredients: [
      {
        name: "chicken",
        quantity: "500g",
      },
      {
        name: "basmati rice",
        quantity: "2 cups",
      },
      {
        name: "onion",
        quantity: "2 large",
      },
      {
        name: "tomatoes",
        quantity: "2 medium",
      },
      {
        name: "yogurt",
        quantity: "1 cup",
      },
      {
        name: "ginger garlic paste",
        quantity: "2 tbsp",
      },
      {
        name: "green chillies",
        quantity: "4-5",
      },
      {
        name: "mint leaves",
        quantity: "1/2 cup",
      },
      {
        name: "coriander leaves",
        quantity: "1/2 cup",
      },
      {
        name: "ghee",
        quantity: "1/2 cup",
      },
      {
        name: "cloves",
        quantity: "6",
      },
      {
        name: "cardamom",
        quantity: "6",
      },
      {
        name: "cinnamon",
        quantity: "1 inch stick",
      },
      {
        name: "bay leaves",
        quantity: "2",
      },
      {
        name: "saffron",
        quantity: "a pinch",
      },
      {
        name: "milk",
        quantity: "1/4 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "red chilli powder",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/4 tsp",
      },
      {
        name: "cumin powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala powder",
        quantity: "1 tsp",
      },
    ],
    instructions: [
      "Soak the rice in water for 30 minutes.",
      "Heat ghee in a heavy-bottomed pan.",
      "Add cloves, cardamom, cinnamon, and bay leaves. Fry for a few seconds.",
      "Add sliced onions and fry until golden brown.",
      "Add ginger garlic paste and fry for a minute.",
      "Add chopped tomatoes and green chillies. Cook until they turn mushy.",
      "Add chicken and fry for a few minutes.",
      "Add yogurt, salt, red chilli powder, turmeric powder, cumin powder, and garam masala powder. Mix well and cook until the chicken is done.",
      "In a separate pot, bring water to boil. Add soaked rice, salt, and a pinch of saffron. Cook until the rice is 80% done. Drain the excess water.",
      "In the same pan used for chicken, add a layer of rice. Add a layer of chicken on top of the rice. Repeat the layers until all the rice and chicken is used up. Top with fried onions, mint leaves, and coriander leaves.",
      "Pour in the milk on the sides of the pan. Cover with a lid and cook on low flame for 20-25 minutes.",
      "Serve hot with raita and salan.",
    ],
    cooking_time_minutes: 90,
    complexity: "Difficult",
    cuisines: ["Hyderabadi", "Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 600,
    tags: ["biryani", "chicken", "spicy", "rice", "Hyderabadi"],
    image_caption_prompt:
      "Generate an image of a mouth-watering Hyderabadi Chicken Biryani with layers of aromatic basmati rice and succulent chicken, topped with fried onions and garnished with fresh mint and coriander leaves. Include a generous amount of saffron strands for an authentic look. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "3996a073-13fa-4680-a82d-5e7639f00f37",
    image: require("../../assets/recipe-images/Hyderabadi-Chicken-Biryani-3996a073-13fa-4680-a82d-5e7639f00f37.png"),
  },
  {
    name: "Rajasthani Dal",
    ingredients: [
      {
        name: "toor dal",
        quantity: "1 cup",
      },
      {
        name: "moong dal",
        quantity: "1 cup",
      },
      {
        name: "urad dal",
        quantity: "1/2 cup",
      },
      {
        name: "ghee",
        quantity: "2 tbsp",
      },
      {
        name: "cumin seeds",
        quantity: "1 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chilli powder",
        quantity: "1/2 tsp",
      },
      {
        name: "asafoetida",
        quantity: "1/4 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "4 cups",
      },
      {
        name: "fresh coriander leaves",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Wash the dals and soak them in water for 30 minutes.",
      "Drain the water and pressure cook the dals with 4 cups of water, turmeric powder, and salt for 4-5 whistles or until the dals are soft and well cooked.",
      "In a pan, heat ghee and add cumin seeds and asafoetida. Let them splutter.",
      "Add coriander powder and red chilli powder. Stir well.",
      "Add the cooked dals and mix well.",
      "Simmer for 10-15 minutes or until the dal thickens.",
      "Garnish with fresh coriander leaves and serve hot with bati and churma.",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["Rajasthani"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 300,
    tags: ["vegetarian", "gluten-free", "high-protein"],
    image_caption_prompt:
      "Generate an image of Rajasthani dal featuring toor dal, moong dal, and urad dal cooked to perfection with spices and garnished with fresh coriander leaves. Serve hot with baked wheat balls and churma for a traditional Rajasthani meal. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "34ec8a06-6795-44ca-a4ba-b6891a941aba",
    image: require("../../assets/recipe-images/Rajasthani-Dal-34ec8a06-6795-44ca-a4ba-b6891a941aba.png"),
  },
  {
    name: "Kerala-Style Beef Fry",
    ingredients: [
      {
        name: "beef",
        quantity: "500g",
      },
      {
        name: "ginger",
        quantity: "1 tbsp, grated",
      },
      {
        name: "garlic",
        quantity: "1 tbsp, minced",
      },
      {
        name: "onion",
        quantity: "1, sliced",
      },
      {
        name: "curry leaves",
        quantity: "10-12",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "cumin powder",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1 tsp",
      },
      {
        name: "black pepper powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "coconut oil",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "In a pan, heat coconut oil and add ginger, garlic, onion, and curry leaves. Saute for 2-3 minutes.",
      "Add the beef and saute for 5-7 minutes on high heat.",
      "Reduce heat and add coriander powder, cumin powder, turmeric powder, red chili powder, black pepper powder, and salt. Mix well.",
      "Cover and cook for 20-25 minutes, stirring occasionally.",
      "Remove the lid and cook on high heat for 5-7 minutes until the beef is browned and crispy.",
      "Garnish with fresh coriander leaves and serve hot with malabar parotta.",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["South Indian"],
    meal_time: ["Dinner"],
    calories_estimate: 450,
    tags: ["spicy", "beef", "South Indian", "Kerala-style"],
    image_caption_prompt:
      "Generate an image featuring spicy and flavorful Kerala-style beef fry served with fluffy malabar parotta. Ensure that the beef is browned and crispy, and the parotta is fluffy and layered. Include some curry leaves and sliced onion on the side. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "82a7acba-0f7d-4064-bf08-800c1c45fd3b",
    image: require("../../assets/recipe-images/Kerala-Style-Beef-Fry-82a7acba-0f7d-4064-bf08-800c1c45fd3b.png"),
  },
  {
    name: "Punjabi Chole",
    ingredients: [
      {
        name: "chickpeas",
        quantity: "2 cups",
      },
      {
        name: "onion",
        quantity: "1 large",
      },
      {
        name: "tomatoes",
        quantity: "2 medium",
      },
      {
        name: "ginger",
        quantity: "1 inch",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "green chili",
        quantity: "2",
      },
      {
        name: "cumin seeds",
        quantity: "1 tsp",
      },
      {
        name: "coriander powder",
        quantity: "2 tsp",
      },
      {
        name: "garam masala",
        quantity: "1 tsp",
      },
      {
        name: "amchur powder (dried mango powder)",
        quantity: "1 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "water",
        quantity: "3 cups",
      },
    ],
    instructions: [
      "Wash the chickpeas and soak them overnight in 3 cups of water.",
      "In a pressure cooker, add the soaked chickpeas along with the water and pressure cook for around 20-25 minutes until they are soft.",
      "In a pan, heat oil and add cumin seeds, chopped onions, ginger, garlic, and green chilies. Fry until the onions turn golden brown.",
      "Add chopped tomatoes, coriander powder, garam masala, amchur powder, red chili powder, and salt. Cook until the tomatoes are soft and mushy.",
      "Add the boiled chickpeas to the pan and mix well. Cook for 10-15 minutes until the spices are well absorbed by the chickpeas.",
      "Garnish with chopped coriander leaves and serve hot with bhature.",
    ],
    cooking_time_minutes: 40,
    complexity: "Medium",
    cuisines: ["North Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 300,
    tags: ["vegetarian", "spicy", "curry", "chickpeas"],
    image_caption_prompt:
      "Generate an image featuring a fragrant and spicy bowl of Punjabi Chole, made with boiled chickpeas smothered in a rich tomato gravy. Garnish with fresh coriander leaves and serve with crispy bhature. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "54b2c20d-cdaf-45fb-a98a-a1f820e72f96",
    image: require("../../assets/recipe-images/Punjabi-Chole-54b2c20d-cdaf-45fb-a98a-a1f820e72f96.png"),
  },
  {
    name: "Dhokla Kadhi Thali",
    ingredients: [
      {
        name: "besan (gram flour)",
        quantity: "2 cups",
      },
      {
        name: "sour yogurt",
        quantity: "1 cup",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "ginger paste",
        quantity: "1 tbsp",
      },
      {
        name: "green chili paste",
        quantity: "1 tbsp",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "fruit salt",
        quantity: "1 tsp",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "mustard seeds",
        quantity: "1 tsp",
      },
      {
        name: "curry leaves",
        quantity: "4-5",
      },
      {
        name: "coriander leaves",
        quantity: "for garnish",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "as needed",
      },
    ],
    instructions: [
      "In a bowl, mix the besan, sour yogurt, turmeric powder, ginger paste, green chili paste, sugar, and salt. Add water to make a smooth batter.",
      "Add fruit salt and mix well. Pour the batter into a greased dish and steam for 10-12 minutes.",
      "Once done, cool and cut into small pieces.",
      "In a pan, heat oil and add mustard seeds and curry leaves. Once they crackle, add water, sour yogurt, salt, and sugar. Cook for 10-12 minutes.",
      "Serve the dhokla with the kadhi and garnish with coriander leaves.",
    ],
    cooking_time_minutes: 30,
    complexity: "Easy",
    cuisines: ["Gujarati"],
    meal_time: ["Lunch"],
    calories_estimate: 350,
    tags: ["vegetarian", "steamed", "spicy"],
    image_caption_prompt:
      "Generate an image featuring a traditional Gujarati thali with a delicious Dhokla Kadhi Thali. The dish comprises of fluffy and tangy dhokla pieces served with hot and spicy kadhi. Don't forget to add a sprinkle of fresh coriander leaves on top!",
    id: "fee7b4b9-9ea9-4a09-b5b0-f6c3835ae3a0",
    image: require("../../assets/recipe-images/Dhokla-Kadhi-Thali-fee7b4b9-9ea9-4a09-b5b0-f6c3835ae3a0.png"),
  },
  {
    name: "Sindhi Kadhi with Mixed Vegetables",
    ingredients: [
      {
        name: "okra",
        quantity: "1 cup",
      },
      {
        name: "eggplant",
        quantity: "1 cup",
      },
      {
        name: "potatoes",
        quantity: "1 cup",
      },
      {
        name: "drumsticks",
        quantity: "2",
      },
      {
        name: "tamarind paste",
        quantity: "2 tbsp",
      },
      {
        name: "besan (gram flour)",
        quantity: "1/2 cup",
      },
      {
        name: "yogurt",
        quantity: "1 cup",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tbsp",
      },
      {
        name: "cumin seeds",
        quantity: "1 tsp",
      },
      {
        name: "mustard seeds",
        quantity: "1 tsp",
      },
      {
        name: "fenugreek seeds",
        quantity: "1/2 tsp",
      },
      {
        name: "curry leaves",
        quantity: "10-12",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "4 cups",
      },
    ],
    instructions: [
      "In a mixing bowl, whisk together the besan and yogurt until smooth.",
      "Add turmeric powder, red chili powder, coriander powder, and salt to the mixture and whisk again.",
      "Heat oil in a large pot over medium-high heat.",
      "Add cumin seeds, mustard seeds, fenugreek seeds, and curry leaves to the oil and stir until fragrant.",
      "Add the mixed vegetables to the pot and stir-fry for 5 minutes.",
      "Add the tamarind paste and 4 cups of water to the pot. Bring to a boil.",
      "Add the besan-yogurt mixture to the pot and stir until well combined.",
      "Reduce heat to low and simmer for 20 minutes.",
      "Serve hot over steamed rice.",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["Sindhi"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 300,
    tags: ["vegetarian", "gluten-free", "Sindhi cuisine"],
    image_caption_prompt:
      "Generate an image featuring a piping hot bowl of Sindhi Kadhi with Mixed Vegetables, served over steaming rice. Ensure that all the vegetables in the kadhi are clearly visible and nothing important is cut or cropped.",
    id: "375864a6-d3be-41e0-ac5e-792355f0d386",
    image: require("../../assets/recipe-images/Sindhi-Kadhi-with-Mixed-Vegetables-375864a6-d3be-41e0-ac5e-792355f0d386.png"),
  },
  {
    name: "Kashmiri Rogan Josh",
    ingredients: [
      {
        name: "lamb shoulder",
        quantity: "500 grams",
      },
      {
        name: "yogurt",
        quantity: "1 cup",
      },
      {
        name: "onion",
        quantity: "2 medium sized",
      },
      {
        name: "tomato",
        quantity: "2 medium sized",
      },
      {
        name: "ginger",
        quantity: "2 inch",
      },
      {
        name: "garlic",
        quantity: "5 cloves",
      },
      {
        name: "coriander powder",
        quantity: "2 tsp",
      },
      {
        name: "cumin powder",
        quantity: "1 tsp",
      },
      {
        name: "cinnamon stick",
        quantity: "1",
      },
      {
        name: "cardamom pods",
        quantity: "4",
      },
      {
        name: "cloves",
        quantity: "4",
      },
      {
        name: "bay leaves",
        quantity: "2",
      },
      {
        name: "red chili powder",
        quantity: "2 tsp",
      },
      {
        name: "ghee",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Heat ghee in a pan and add all the whole spices. Let them crackle.",
      "Add onions and saute until golden brown.",
      "Add ginger and garlic paste and saute for 2-3 minutes.",
      "Add chopped tomatoes and cook until they are mushy.",
      "Add coriander powder, cumin powder, and red chili powder. Mix well.",
      "Add the lamb and cook on high heat for 5-7 minutes.",
      "Add yogurt and salt. Mix well.",
      "Add water, cover the pan and let it cook on low heat for 1 hour or until the lamb is tender.",
      "Serve hot with saffron rice.",
    ],
    cooking_time_minutes: 90,
    complexity: "Medium",
    cuisines: ["Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["lamb", "spicy", "aromatic"],
    image_caption_prompt:
      "Generate an image featuring a piping hot Kashmiri Rogan Josh packed with juicy lamb pieces simmered in a rich spicy sauce. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "ca23a53d-5396-4b01-b7d1-fb5bab9b483d",
    image: require("../../assets/recipe-images/Kashmiri-Rogan-Josh-ca23a53d-5396-4b01-b7d1-fb5bab9b483d.png"),
  },
  {
    name: "Assamese Tenga Fish Curry",
    ingredients: [
      {
        name: "fish fillets",
        quantity: "500g",
      },
      {
        name: "mustard oil",
        quantity: "2 tbsp",
      },
      {
        name: "onion",
        quantity: "1 medium",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "ginger",
        quantity: "1 inch piece",
      },
      {
        name: "green chillies",
        quantity: "3-4",
      },
      {
        name: "tomatoes",
        quantity: "2 medium",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chilli powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "1 cup",
      },
      {
        name: "coriander leaves",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Clean and wash the fish fillets. Marinate with turmeric powder and salt for 10 minutes.",
      "In a pan, heat mustard oil. Add chopped onions, garlic, ginger, and green chillies. Saute until onions turn soft and translucent.",
      "Add chopped tomatoes and cook until they are soft and mushy.",
      "Add turmeric powder, red chilli powder, and salt. Mix well.",
      "Add 1 cup of water and bring to a boil.",
      "Add the marinated fish fillets and cook for 10-15 minutes or until the fish is cooked through.",
      "Garnish with coriander leaves and serve hot with rice.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Assamese"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["fish", "spicy", "tangy", "tomato broth"],
    image_caption_prompt:
      "Generate an image of a delicious Assamese Tenga Fish Curry with a tangy tomato broth. Serve with steamed rice for a complete North Eastern meal. Ensure that the fish and rice are clearly visible and nothing important is cut or cropped.",
    id: "c68f8239-458b-4066-ac00-dc4cb0616790",
    image: require("../../assets/recipe-images/Assamese-Tenga-Fish-Curry-c68f8239-458b-4066-ac00-dc4cb0616790.png"),
  },
  {
    name: "Egg Kothu Parotta",
    ingredients: [
      {
        name: "parotta",
        quantity: "4",
      },
      {
        name: "egg",
        quantity: "2",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "tomato",
        quantity: "1",
      },
      {
        name: "green chili",
        quantity: "2",
      },
      {
        name: "ginger-garlic paste",
        quantity: "1 tbsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/4 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1/2 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala powder",
        quantity: "1/2 tsp",
      },
      {
        name: "curry leaves",
        quantity: "10",
      },
      {
        name: "coriander leaves",
        quantity: "for garnish",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Shred the parotta into small pieces.",
      "In a pan, heat oil and add the onion, green chili, and curry leaves. Saute until the onion turns translucent.",
      "Add the ginger-garlic paste and saute for a minute.",
      "Add the tomato and saute until it turns mushy.",
      "Add turmeric powder, red chili powder, coriander powder, and garam masala powder. Mix well.",
      "Add the shredded parotta and salt. Mix well and cook for 2-3 minutes.",
      "Make a well in the center of the pan and break the eggs into it. Scramble the eggs and mix well with the parotta.",
      "Garnish with coriander leaves and serve hot.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["South Indian"],
    meal_time: ["Breakfast", "Dinner"],
    calories_estimate: 500,
    tags: ["street food", "spicy", "egg", "parotta"],
    image_caption_prompt:
      "Generate an image centered around a hot and spicy Egg Kothu Parotta, made with shredded parotta, scrambled eggs, and a variety of spices. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "aaef6412-4450-45e6-a9dc-2a5f9fdae4e7",
    image: require("../../assets/recipe-images/Egg-Kothu-Parotta-aaef6412-4450-45e6-a9dc-2a5f9fdae4e7.png"),
  },
  {
    name: "Galawati Kebab",
    ingredients: [
      {
        name: "lamb mince",
        quantity: "1 kg",
      },
      {
        name: "raw papaya paste",
        quantity: "2 tbsp",
      },
      {
        name: "ginger-garlic paste",
        quantity: "2 tbsp",
      },
      {
        name: "red chilli powder",
        quantity: "1 tbsp",
      },
      {
        name: "garam masala powder",
        quantity: "1 tbsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tbsp",
      },
      {
        name: "cumin powder",
        quantity: "1 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "ghee",
        quantity: "4 tbsp",
      },
      {
        name: "cashew paste",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "In a large mixing bowl, combine the lamb mince, raw papaya paste, ginger-garlic paste, red chilli powder, garam masala powder, coriander powder, cumin powder, and salt. Mix well and marinate for 2 hours.",
      "After 2 hours, add the cashew paste to the marinated meat and mix well.",
      "Heat a tawa on medium heat.",
      "Take a small portion of the meat mixture and shape it into a small patty.",
      "Grease the tawa with some ghee and place the patty on the tawa.",
      "Cook the kebab on both sides until browned and cooked through.",
      "Serve hot with ulte tawa ke parathe.",
    ],
    cooking_time_minutes: 120,
    complexity: "Medium",
    cuisines: ["Indian"],
    meal_time: ["Dinner"],
    calories_estimate: 350,
    tags: ["kebab", "Lucknowi cuisine", "Nawabi"],
    image_caption_prompt:
      "Generate an image showcasing juicy Galawati Kebabs, made with tender lamb mince and a blend of spices, served with hot and fluffy ulte tawa ke parathe. Ensure that all the kebabs and parathas are clearly visible and nothing important is cut or cropped.",
    id: "772a32be-2fc9-41e9-b50d-e3de8966e8b9",
    image: require("../../assets/recipe-images/Galawati-Kebab-772a32be-2fc9-41e9-b50d-e3de8966e8b9.png"),
  },
  {
    name: "Traditional Konkani Sol Kadi",
    ingredients: [
      {
        name: "kokum",
        quantity: "10-12 pieces",
      },
      {
        name: "coconut milk",
        quantity: "1 cup",
      },
      {
        name: "garlic",
        quantity: "2-3 cloves",
      },
      {
        name: "green chilli",
        quantity: "1",
      },
      {
        name: "coriander leaves",
        quantity: "a handful",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "2 cups",
      },
    ],
    instructions: [
      "Soak kokum in 2 cups of water for 2 hours.",
      "Squeeze and extract the juice from the kokum using your hands.",
      "Add garlic, green chilli, coriander leaves, and salt to the kokum juice and blend it well.",
      "Add coconut milk to the mixture and blend again.",
      "Strain the mixture through a sieve.",
      "Serve chilled.",
    ],
    cooking_time_minutes: 10,
    complexity: "Easy",
    cuisines: ["Konkan"],
    meal_time: ["Afternoon", "Evening"],
    calories_estimate: 90,
    tags: ["digestive", "summer drink", "Konkani cuisine"],
    image_caption_prompt:
      "Generate an image showcasing the traditional Konkani Sol Kadi. The drink should be in a glass, with a pink color, and garnished with coriander leaves. The background should have a Konkani theme.",
    id: "b05fffb9-8735-48d4-9f7c-87917e49fff1",
    image: require("../../assets/recipe-images/Traditional-Konkani-Sol-Kadi-b05fffb9-8735-48d4-9f7c-87917e49fff1.png"),
  },
  {
    name: "Traditional Litti Chokha",
    ingredients: [
      {
        name: "whole wheat flour",
        quantity: "2 cups",
      },
      {
        name: "gram flour",
        quantity: "1/2 cup",
      },
      {
        name: "ghee",
        quantity: "3 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "1 cup",
      },
      {
        name: "potatoes",
        quantity: "2",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "tomatoes",
        quantity: "2",
      },
      {
        name: "green chillies",
        quantity: "2",
      },
      {
        name: "coriander leaves",
        quantity: "1/2 cup",
      },
      {
        name: "lemon juice",
        quantity: "1 tbsp",
      },
      {
        name: "mustard oil",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "In a large bowl, mix the wheat flour, ghee, and salt. Add water gradually and knead into a smooth dough.",
      "In a separate bowl, mix the gram flour with water until it forms a smooth paste. Add salt and mix well.",
      "Divide the wheat dough into small balls. Roll each ball into a small disc. Place a spoonful of the gram flour mixture in the center of the disc. Fold the edges over and roll into a ball again.",
      "Preheat the oven to 375\u00b0F. Place the stuffed balls on a baking sheet and bake for 25-30 minutes, or until golden brown.",
      "For the chokha, roast the potatoes on an open flame until they are charred on the outside and cooked on the inside. Peel off the skin and mash the potatoes in a bowl.",
      "Add finely chopped onions, tomatoes, green chillies, coriander leaves, lemon juice, and mustard oil to the mashed potatoes. Mix well.",
      "Serve the hot litti with the chokha.",
    ],
    cooking_time_minutes: 60,
    complexity: "Medium",
    cuisines: ["Bihari"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 500,
    tags: ["vegetarian", "spicy", "rustic"],
    image_caption_prompt:
      "Generate an image featuring a plate of piping hot litti chokha, a rustic Bihari delicacy. Show the litti stuffed with roasted gram flour and the chokha made with mashed potatoes, onions, tomatoes, green chillies, and coriander leaves. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "a6910247-3ae9-4f97-8a03-cc7e7e032cd7",
    image: require("../../assets/recipe-images/Traditional-Litti-Chokha-a6910247-3ae9-4f97-8a03-cc7e7e032cd7.png"),
  },
  {
    name: "Low-Fat Puran Poli",
    ingredients: [
      {
        name: "Chana Dal",
        quantity: "1 cup",
      },
      {
        name: "Jaggery",
        quantity: "1/2 cup",
      },
      {
        name: "Whole Wheat Flour",
        quantity: "1 cup",
      },
      {
        name: "Salt",
        quantity: "1/2 tsp",
      },
      {
        name: "Water",
        quantity: "1 cup",
      },
      {
        name: "Ghee",
        quantity: "1 tbsp",
      },
      {
        name: "Cardamom Powder",
        quantity: "1 tsp",
      },
    ],
    instructions: [
      "To make the filling, rinse and soak the chana dal for 2 hours. Drain the water and pressure cook the dal with 2 cups of water until soft and mushy.",
      "Drain off any excess water and add the jaggery. Mix well and cook until the mixture thickens and starts to leave the sides of the pan. Add cardamom powder and mix well.",
      "To make the dough, mix the whole wheat flour, salt and water to make a soft and pliable dough. Knead well for 10-15 minutes.",
      "Divide the dough and filling into equal portions. Roll out the dough into small discs and place a portion of the filling in the center of each disc.",
      "Cover the filling with the edges of the dough and roll out into a flatbread.",
      "Heat a tawa or griddle and cook the puran poli on both sides until golden brown. Brush with ghee while cooking.",
      "Serve hot with a dollop of homemade yogurt.",
    ],
    cooking_time_minutes: 90,
    complexity: "Medium",
    cuisines: ["Maharashtrian"],
    meal_time: ["Dessert"],
    calories_estimate: 180,
    tags: ["healthy", "low-fat", "sweet", "festive"],
    image_caption_prompt:
      "Create an image featuring a plate of hot and delicious Low-Fat Puran Poli, a sweet flatbread stuffed with a mixture of chana dal and jaggery. Add a dollop of homemade yogurt on top and ensure that the bread is clearly visible without any important parts being cut or cropped.",
    id: "2fc64146-e521-4a64-95ec-88ae1ac04a92",
    image: require("../../assets/recipe-images/Low-Fat-Puran-Poli-2fc64146-e521-4a64-95ec-88ae1ac04a92.png"),
  },
  {
    name: "Whole Wheat Amritsari Kulcha with Spiced Potato Stuffing",
    ingredients: [
      {
        name: "whole wheat flour",
        quantity: "2 cups",
      },
      {
        name: "baking powder",
        quantity: "1 tsp",
      },
      {
        name: "baking soda",
        quantity: "1/2 tsp",
      },
      {
        name: "salt",
        quantity: "1/2 tsp",
      },
      {
        name: "sugar",
        quantity: "1 tsp",
      },
      {
        name: "yogurt",
        quantity: "1/2 cup",
      },
      {
        name: "water",
        quantity: "1/2 cup",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "potatoes",
        quantity: "4 medium",
      },
      {
        name: "cumin seeds",
        quantity: "1 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala",
        quantity: "1 tsp",
      },
      {
        name: "amchur powder",
        quantity: "1 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1 tsp",
      },
      {
        name: "chopped coriander leaves",
        quantity: "2 tbsp",
      },
    ],
    instructions: [
      "Add flour, baking powder, baking soda, salt, and sugar in a mixing bowl.",
      "Mix well and make a well in the center.",
      "Add yogurt and water, and knead a soft dough.",
      "Add oil and knead again. Cover and let the dough rest for 1 hour.",
      "Boil the potatoes until soft and mash them.",
      "Add cumin seeds, coriander powder, garam masala, amchur powder, red chili powder, salt, and coriander leaves.",
      "Mix well and divide the mixture into equal portions.",
      "Divide the dough into 6 equal balls.",
      "Roll out each ball into a small circle and place a portion of the potato stuffing in the center. Seal the edges and roll out into a circle.",
      "Heat a tawa or griddle and cook the kulcha on both sides until golden brown.",
      "Serve hot with chana masala.",
    ],
    cooking_time_minutes: 60,
    complexity: "Intermediate",
    cuisines: ["Punjabi"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["vegetarian", "spicy", "whole wheat", "Indian breads"],
    image_caption_prompt:
      "Generate an image featuring a delicious Whole Wheat Amritsari Kulcha with Spiced Potato Stuffing, served with a bowl of spicy Chana Masala. Ensure that both dishes are clearly visible and nothing important is cut or cropped.",
    id: "4672d313-0151-49d2-8cf9-c1735485adc0",
    image: require("../../assets/recipe-images/Whole-Wheat-Amritsari-Kulcha-with-Spiced-Potato-Stuffing-4672d313-0151-49d2-8cf9-c1735485adc0.png"),
  },
  {
    name: "Spiced Bajra Khichdi with Yogurt and Ghee",
    ingredients: [
      {
        name: "pearl millet (bajra)",
        quantity: "1 cup",
      },
      {
        name: "moong dal",
        quantity: "1/2 cup",
      },
      {
        name: "ghee",
        quantity: "2 tbsp",
      },
      {
        name: "cumin seeds",
        quantity: "1 tsp",
      },
      {
        name: "asafetida (hing)",
        quantity: "1/4 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1/4 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala",
        quantity: "1/2 tsp",
      },
      {
        name: "green chili",
        quantity: "1",
      },
      {
        name: "ginger",
        quantity: "1 inch piece",
      },
      {
        name: "garlic",
        quantity: "4-5 cloves",
      },
      {
        name: "coriander leaves",
        quantity: "1/4 cup",
      },
      {
        name: "yogurt",
        quantity: "1 cup",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Wash and soak the bajra and moong dal in water for at least 30 minutes.",
      "In a pressure cooker, heat ghee and add cumin seeds and asafetida.",
      "Add turmeric, red chili powder, coriander powder, and garam masala. Saut\u00e9 for a few seconds.",
      "Add chopped green chili, ginger, and garlic. Saut\u00e9 for a minute.",
      "Add the soaked bajra and moong dal along with 4 cups of water and salt. Mix well.",
      "Close the pressure cooker and pressure cook for 5-6 whistles or until the bajra and dal are cooked.",
      "Let the pressure release naturally.",
      "Garnish with chopped coriander leaves and serve hot with yogurt and ghee.",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["healthy", "wholesome", "earthy", "spicy"],
    image_caption_prompt:
      "Generate an image featuring a spicy and flavorful Spiced Bajra Khichdi served hot with a dollop of yogurt and ghee. Ensure that the khichdi is the main focus of the image, with the yogurt and ghee visible in the frame.",
    id: "dc5cb259-adcf-4e66-ad42-f37be0b8fc76",
    image: require("../../assets/recipe-images/Spiced-Bajra-Khichdi-with-Yogurt-and-Ghee-dc5cb259-adcf-4e66-ad42-f37be0b8fc76.png"),
  },
  {
    name: "Lamb Dhansak with Brown Rice",
    ingredients: [
      {
        name: "brown rice",
        quantity: "1 cup",
      },
      {
        name: "lamb shoulder",
        quantity: "1 lb",
      },
      {
        name: "red lentils",
        quantity: "1 cup",
      },
      {
        name: "onion",
        quantity: "1 medium",
      },
      {
        name: "garlic",
        quantity: "2 cloves",
      },
      {
        name: "ginger",
        quantity: "1 tbsp",
      },
      {
        name: "tomatoes",
        quantity: "2 medium",
      },
      {
        name: "turmeric",
        quantity: "1 tsp",
      },
      {
        name: "coriander",
        quantity: "1 tsp",
      },
      {
        name: "cumin",
        quantity: "1 tsp",
      },
      {
        name: "cinnamon",
        quantity: "1/2 tsp",
      },
      {
        name: "cloves",
        quantity: "2",
      },
      {
        name: "cardamom",
        quantity: "2 pods",
      },
      {
        name: "bay leaf",
        quantity: "1",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "pepper",
        quantity: "to taste",
      },
      {
        name: "cilantro",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Cook the brown rice according to package instructions.",
      "In a large pot, add the lentils and cover with water. Bring to a boil and then reduce heat to low and simmer for 30 minutes or until lentils are tender.",
      "While the lentils are cooking, chop the onion, garlic, and ginger. Heat a large pan over medium heat and add a tablespoon of oil. Add the onion, garlic, and ginger and saut\u00e9 until the onion is translucent.",
      "Add the lamb to the pan and cook until browned on all sides.",
      "Add the tomatoes, turmeric, coriander, cumin, cinnamon, cloves, cardamom, bay leaf, salt, and pepper to the pan. Stir to combine.",
      "When the lentils are cooked, drain any excess water and add them to the pan with the lamb and spices. Stir to combine.",
      "Simmer the lamb dhansak for 20-30 minutes or until the lamb is cooked through and the flavors have melded together.",
      "Serve the lamb dhansak over the brown rice and garnish with cilantro.",
    ],
    cooking_time_minutes: 70,
    complexity: "Medium",
    cuisines: ["Parsi", "Persian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 600,
    tags: ["lentils", "lamb", "gluten-free", "high-protein"],
    image_caption_prompt:
      "Generate an image centered around a steaming plate of Lamb Dhansak with Brown Rice. The dish should have a rich brown color and be topped with fresh cilantro. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "83e6b152-9db6-4742-a079-7863ca815b3f",
    image: require("../../assets/recipe-images/Lamb-Dhansak-with-Brown-Rice-83e6b152-9db6-4742-a079-7863ca815b3f.png"),
  },
  {
    name: "Steamed Rice",
    ingredients: [
      {
        name: "rice",
        quantity: "1 cup",
      },
      {
        name: "water",
        quantity: "2 cups",
      },
    ],
    instructions: [
      "Rinse the rice under cold water.",
      "In a medium saucepan, bring 2 cups of water to a boil.",
      "Add the rice and stir once.",
      "Reduce heat to low, cover, and simmer for 18-20 minutes.",
      "Remove from heat and let it sit for 5 minutes.",
      "Fluff the rice with a fork and serve hot.",
    ],
    cooking_time_minutes: 25,
    complexity: "Easy",
    cuisines: ["Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 200,
    tags: ["steamed rice"],
    image_caption_prompt:
      "Generate an image featuring a bowl of hot and fluffy steamed rice, which pairs perfectly with a spicy Andhra-style Chicken Curry. Ensure that the rice is the main focus of the image and nothing important is cut or cropped.",
    id: "d8804e6a-7750-4d07-9704-d6d011ddac49",
    image: require("../../assets/recipe-images/Steamed-Rice-d8804e6a-7750-4d07-9704-d6d011ddac49.png"),
  },
  {
    name: "Spicy Oriya Dalma",
    ingredients: [
      {
        name: "chana dal",
        quantity: "1 cup",
      },
      {
        name: "eggplant",
        quantity: "1",
      },
      {
        name: "potato",
        quantity: "1",
      },
      {
        name: "pumpkin",
        quantity: "1",
      },
      {
        name: "carrot",
        quantity: "1",
      },
      {
        name: "tomato",
        quantity: "1",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "garlic",
        quantity: "4 cloves",
      },
      {
        name: "ginger",
        quantity: "1-inch piece",
      },
      {
        name: "green chillies",
        quantity: "2",
      },
      {
        name: "red chilli powder",
        quantity: "1 tsp",
      },
      {
        name: "cumin powder",
        quantity: "1 tsp",
      },
      {
        name: "coriander leaves",
        quantity: "2 tbsp",
      },
      {
        name: "oil",
        quantity: "2 tbsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
    ],
    instructions: [
      "Wash and soak the chana dal for 30 minutes. Drain and pressure cook with 3 cups of water, chopped ginger, sliced green chillies, and 1/2 tsp of turmeric powder for 4-5 whistles.",
      "Peel and dice the eggplant, potato, pumpkin, and carrot into small cubes. Chop the tomato and onion.",
      "In a pan, heat oil and add sliced garlic. Saut\u00e9 for a minute and add chopped onion. Fry till translucent.",
      "Add the chopped vegetables, red chilli powder, cumin powder, and salt. Mix well and cook for 5 minutes.",
      "Add the cooked dal to the vegetables and mix well. Simmer for 10 minutes on low heat.",
      "Garnish with chopped coriander leaves and serve hot with rice.",
    ],
    cooking_time_minutes: 50,
    complexity: "Medium",
    cuisines: ["Oriya"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["comfort food", "spicy", "lentil stew"],
    image_caption_prompt:
      "Generate an image featuring a spicy and flavorful bowl of Spicy Oriya Dalma, a lentil and vegetable stew with chana dal, perfectly cooked vegetables, and aromatic spices including cumin and red chilli powder. Serve with a side of steaming white rice and garnish with fresh coriander leaves. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "dbbf91f2-5320-4926-9eda-971bbe867452",
    image: require("../../assets/recipe-images/Spicy-Oriya-Dalma-dbbf91f2-5320-4926-9eda-971bbe867452.png"),
  },
  {
    name: "Vegetable Momo",
    ingredients: [
      {
        name: "cabbage",
        quantity: "1/2 head, finely chopped",
      },
      {
        name: "carrots",
        quantity: "2 medium, grated",
      },
      {
        name: "onion",
        quantity: "1 medium, finely chopped",
      },
      {
        name: "garlic",
        quantity: "2 cloves, minced",
      },
      {
        name: "ginger",
        quantity: "1 tbsp, grated",
      },
      {
        name: "cumin powder",
        quantity: "1 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "black pepper",
        quantity: "to taste",
      },
      {
        name: "wonton wrappers",
        quantity: "24",
      },
    ],
    instructions: [
      "In a large mixing bowl, combine cabbage, carrots, onion, garlic, ginger, cumin powder, coriander powder, turmeric powder, salt, and black pepper. Mix well.",
      "Take a wonton wrapper and place a tablespoon of filling in the center.",
      "Fold the wrapper in half and pinch the edges together to seal.",
      "Steam the momos for 10-12 minutes.",
      "Serve hot with spicy chutney.",
    ],
    cooking_time_minutes: 40,
    complexity: "Intermediate",
    cuisines: ["Nepalese"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 200,
    tags: ["momos", "dumplings", "vegetarian", "Nepalese cuisine"],
    image_caption_prompt:
      "Generate an image featuring delicious Vegetable Momos, steaming hot and filled with a flavorful mixture of finely chopped cabbage, grated carrots, onion, garlic, ginger, and aromatic spices. Serve with a side of spicy chutney. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "0ab4f06d-711d-411b-9e27-619019e779bc",
    image: require("../../assets/recipe-images/Vegetable-Momo-0ab4f06d-711d-411b-9e27-619019e779bc.png"),
  },
  {
    name: "Spicy Sri Lankan Egg Hoppers",
    ingredients: [
      {
        name: "rice flour",
        quantity: "1 cup",
      },
      {
        name: "coconut milk",
        quantity: "1 cup",
      },
      {
        name: "active dry yeast",
        quantity: "1 tsp",
      },
      {
        name: "sugar",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "1/2 tsp",
      },
      {
        name: "eggs",
        quantity: "4",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "green chilies",
        quantity: "2",
      },
      {
        name: "curry leaves",
        quantity: "a few",
      },
      {
        name: "vegetable oil",
        quantity: "as needed",
      },
    ],
    instructions: [
      "In a large mixing bowl, combine the rice flour, coconut milk, yeast, sugar, and salt. Mix well to form a smooth batter.",
      "Cover the bowl with a clean kitchen towel and let it rest for 2 hours in a warm place.",
      "After 2 hours, the batter would be fermented and doubled in size.",
      "In a pan, heat some oil over medium heat.",
      "Add finely chopped onion, green chilies, and curry leaves. Saute until the onion turns translucent.",
      "Add the sauteed onion mixture to the fermented batter. Mix well.",
      "Heat a non-stick pan over medium heat. Brush some oil on the pan.",
      "Pour a ladle full of the batter in the center of the pan. Tilt the pan to spread the batter evenly in a circular motion, creating a bowl shape in the center.",
      "Crack an egg in the center of the bowl.",
      "Cover the pan with a lid and cook until the egg is set and the edges of the hopper are crispy, about 2-3 minutes.",
      "Remove the hopper from the pan using a spatula and transfer it to a plate.",
      "Repeat the process with the remaining batter and eggs.",
      "Serve hot with your favorite spicy chutney or curry.",
    ],
    cooking_time_minutes: 140,
    complexity: "Medium",
    cuisines: ["Sri Lankan"],
    meal_time: ["Breakfast"],
    calories_estimate: 350,
    tags: ["vegetarian", "gluten-free", "fermented", "spicy"],
    image_caption_prompt:
      "Generate an image featuring a plate of spicy Sri Lankan egg hoppers, with crispy edges and a perfectly cooked egg in the center. Add a side of spicy chutney or curry to complete the breakfast experience. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "1d30673b-73ba-481e-a923-5232b74c2f75",
    image: require("../../assets/recipe-images/Spicy-Sri-Lankan-Egg-Hoppers-1d30673b-73ba-481e-a923-5232b74c2f75.png"),
  },
  {
    name: "Spicy Maldivian Mas Huni",
    ingredients: [
      {
        name: "canned tuna",
        quantity: "1 can",
      },
      {
        name: "coconut",
        quantity: "1 whole",
      },
      {
        name: "onions",
        quantity: "2 medium",
      },
      {
        name: "green chili",
        quantity: "2",
      },
      {
        name: "lime",
        quantity: "1",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "roshi bread",
        quantity: "4 pieces",
      },
    ],
    instructions: [
      "Grate the coconut and chop the onions and green chili finely.",
      "In a bowl, mix the canned tuna, grated coconut, chopped onions, chopped green chili, and salt.",
      "Squeeze the lime juice over the mixture and mix well.",
      "Heat the roshi bread in a pan until warm and slightly crispy.",
      "Scoop the mas huni mixture onto the roshi bread and wrap it into a roll.",
    ],
    cooking_time_minutes: 25,
    complexity: "Easy",
    cuisines: ["Maldivian"],
    meal_time: ["Breakfast", "Lunch"],
    calories_estimate: 380,
    tags: ["tuna", "coconut", "onions", "green chili", "roshi bread"],
    image_caption_prompt:
      "Generate an image of a Spicy Maldivian Mas Huni, made with grated coconut, canned tuna, chopped onions, chopped green chili, lime juice, and wrapped in warm and crispy roshi bread. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "e5d45230-633d-43bf-8710-33986979f76f",
    image: require("../../assets/recipe-images/Spicy-Maldivian-Mas-Huni-e5d45230-633d-43bf-8710-33986979f76f.png"),
  },
  {
    name: "Pahadi Aloo ke Gutke Salad",
    ingredients: [
      {
        name: "potatoes",
        quantity: "4 medium sized",
      },
      {
        name: "cucumber",
        quantity: "1 medium sized",
      },
      {
        name: "tomatoes",
        quantity: "2 medium sized",
      },
      {
        name: "onion",
        quantity: "1 medium sized",
      },
      {
        name: "lemon",
        quantity: "1",
      },
      {
        name: "mustard oil",
        quantity: "2 tbsp",
      },
      {
        name: "fenugreek seeds",
        quantity: "1/4 tsp",
      },
      {
        name: "cumin seeds",
        quantity: "1/2 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chilli powder",
        quantity: "1/2 tsp",
      },
      {
        name: "amchoor powder",
        quantity: "1/2 tsp",
      },
      {
        name: "asafoetida",
        quantity: "a pinch",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "coriander leaves",
        quantity: "for garnish",
      },
    ],
    instructions: [
      "Wash and peel the potatoes. Cut them into small cubes.",
      "Heat mustard oil in a pan. Add fenugreek seeds, cumin seeds, and asafoetida. Stir for a few seconds.",
      "Add the potatoes and mix well. Cook on medium heat for 5-10 minutes, stirring occasionally.",
      "Add coriander powder, turmeric powder, red chilli powder, amchoor powder, and salt. Mix well.",
      "Cover the pan and cook on low heat for 10-15 minutes, or until the potatoes are cooked through.",
      "Chop the cucumber, tomatoes, and onion into small pieces.",
      "In a large bowl, mix the cooked potatoes with the chopped vegetables.",
      "Squeeze the lemon and add the juice to the bowl. Mix well.",
      "Garnish with coriander leaves and serve as a salad or a side dish.",
    ],
    cooking_time_minutes: 35,
    complexity: "Easy",
    cuisines: ["Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 250,
    tags: ["vegetarian", "vegan", "gluten-free", "salad"],
    image_caption_prompt:
      "Generate an image featuring a refreshing Pahadi Aloo ke Gutke Salad, a twist on the traditional dish from the hills of Uttarakhand. The salad should be centered and should have small pieces of potatoes cooked in a blend of spices, mixed with cucumber, tomatoes, and onion. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "887d4fa7-648e-4c14-8b9f-3a3de2576cce",
    image: require("../../assets/recipe-images/Pahadi-Aloo-ke-Gutke-Salad-887d4fa7-648e-4c14-8b9f-3a3de2576cce.png"),
  },
  {
    name: "Jalebi",
    ingredients: [
      {
        name: "all-purpose flour",
        quantity: "1 cup",
      },
      {
        name: "yogurt",
        quantity: "1/2 cup",
      },
      {
        name: "sugar",
        quantity: "1 tbsp",
      },
      {
        name: "baking powder",
        quantity: "1/4 tsp",
      },
      {
        name: "oil",
        quantity: "for frying",
      },
      {
        name: "saffron strands",
        quantity: "few",
      },
      {
        name: "water",
        quantity: "1/2 cup",
      },
      {
        name: "cardamom powder",
        quantity: "1/4 tsp",
      },
    ],
    instructions: [
      "In a mixing bowl, add all-purpose flour, baking powder, sugar, and cardamom powder. Mix well.",
      "Add yogurt and water to the mixture, and whisk until smooth. The batter should be thick but pourable.",
      "Cover the bowl and let the batter ferment for 6-8 hours or overnight.",
      "After fermentation, add a few strands of saffron to the batter and mix well.",
      "Heat oil in a deep frying pan.",
      "Pour the batter into a squeeze bottle or a piping bag.",
      "Squeeze the batter in a circular motion into the hot oil.",
      "Fry until the jalebis are golden and crispy.",
      "Drain the excess oil and transfer the jalebis to a syrup made by dissolving sugar in water.",
      "Soak the jalebis in syrup for a few minutes.",
      "Serve hot.",
    ],
    cooking_time_minutes: 30,
    complexity: "Medium",
    cuisines: ["Indian"],
    meal_time: ["Breakfast"],
    calories_estimate: 300,
    tags: ["vegetarian", "sweet", "dessert"],
    image_caption_prompt:
      "Generate an image centered around a plate of crispy and golden Jalebis, a popular sweet dish from Madhya Pradesh. The dish should include swirls of fried batter soaked in a sugar syrup, garnished with a few strands of saffron. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "81fdeb8b-3193-4a09-9aeb-3ad115a74f62",
    image: require("../../assets/recipe-images/Jalebi-81fdeb8b-3193-4a09-9aeb-3ad115a74f62.png"),
  },
  {
    name: "Coorgi Pandi Curry",
    ingredients: [
      {
        name: "pork",
        quantity: "500 grams",
      },
      {
        name: "coconut oil",
        quantity: "4 tbsp",
      },
      {
        name: "mustard seeds",
        quantity: "1 tsp",
      },
      {
        name: "curry leaves",
        quantity: "2 sprigs",
      },
      {
        name: "onion",
        quantity: "1 large, finely chopped",
      },
      {
        name: "garlic",
        quantity: "8-10 cloves, crushed",
      },
      {
        name: "ginger",
        quantity: "1 inch, grated",
      },
      {
        name: "tomatoes",
        quantity: "2 medium, chopped",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "red chilli powder",
        quantity: "2 tsp",
      },
      {
        name: "coriander powder",
        quantity: "2 tsp",
      },
      {
        name: "cumin powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "water",
        quantity: "2 cups",
      },
    ],
    instructions: [
      "Heat coconut oil in a heavy-bottomed pan.",
      "Add mustard seeds and curry leaves. Let them splutter.",
      "Add chopped onions and saut\u00e9 until golden brown.",
      "Add crushed garlic and grated ginger. Saut\u00e9 for a minute.",
      "Add chopped tomatoes and cook until they turn mushy.",
      "Add turmeric powder, red chilli powder, coriander powder, cumin powder, and salt. Mix well.",
      "Add the pork and cook for 5-10 minutes, stirring occasionally.",
      "Add 2 cups of water and mix well.",
      "Cover the pan and let it simmer on low heat for 45-60 minutes or until the pork is tender and the gravy is thick.",
      "Serve hot with steamed rice or akki roti.",
    ],
    cooking_time_minutes: 75,
    complexity: "Medium",
    cuisines: ["Coorgi"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 400,
    tags: ["spicy", "pork", "Coorgi cuisine"],
    image_caption_prompt:
      "Generate an image featuring a steaming bowl of Coorgi Pandi Curry, a spicy pork dish from the Kodagu region of Karnataka. The dish should be accompanied by steamed rice or akki roti. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "b9c70eb0-c7ce-41be-92d9-5152db9c400e",
    image: require("../../assets/recipe-images/Coorgi-Pandi-Curry-b9c70eb0-c7ce-41be-92d9-5152db9c400e.png"),
  },
  {
    name: "Vegetable Kathi Roll",
    ingredients: [
      {
        name: "paneer",
        quantity: "200g",
      },
      {
        name: "turmeric powder",
        quantity: "1 tsp",
      },
      {
        name: "red chili powder",
        quantity: "1 tsp",
      },
      {
        name: "garam masala powder",
        quantity: "1 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "vegetable oil",
        quantity: "2 tbsp",
      },
      {
        name: "onion",
        quantity: "1",
      },
      {
        name: "bell pepper",
        quantity: "1",
      },
      {
        name: "whole wheat tortillas",
        quantity: "4",
      },
      {
        name: "mint chutney",
        quantity: "1/4 cup",
      },
      {
        name: "tomato ketchup",
        quantity: "1/4 cup",
      },
    ],
    instructions: [
      "Cut the paneer into thin strips.",
      "In a bowl, mix the paneer with turmeric powder, red chili powder, garam masala powder, and salt. Marinate for 30 minutes.",
      "In a pan, heat vegetable oil over medium heat. Add the marinated paneer and cook until tender and golden brown, about 10 minutes.",
      "Add sliced onion and bell pepper to the pan. Cook for 5 minutes until softened.",
      "Warm the whole wheat tortillas on a skillet or in the microwave.",
      "Spread mint chutney and tomato ketchup on each tortilla.",
      "Add the paneer and vegetable filling to each tortilla and roll tightly.",
      "Serve hot and enjoy!",
    ],
    cooking_time_minutes: 45,
    complexity: "Medium",
    cuisines: ["Indian"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["kathi roll", "on-the-go", "vegetarian", "paneer"],
    image_caption_prompt:
      "Generate an image featuring a delicious Vegetable Kathi Roll filled with succulent paneer, saut\u00e9ed onions and bell peppers, and a drizzle of mint chutney and tomato ketchup. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "f3df888a-10ae-49bc-904f-a7fb823e6e67",
    image: require("../../assets/recipe-images/Vegetable-Kathi-Roll-f3df888a-10ae-49bc-904f-a7fb823e6e67.png"),
  },
  {
    name: "Baked Patra",
    ingredients: [
      {
        name: "colocasia leaves",
        quantity: "8-10",
      },
      {
        name: "gram flour (besan)",
        quantity: "1 cup",
      },
      {
        name: "tamarind pulp",
        quantity: "1 tbsp",
      },
      {
        name: "jaggery",
        quantity: "1 tbsp",
      },
      {
        name: "ginger paste",
        quantity: "1 tsp",
      },
      {
        name: "green chili paste",
        quantity: "1 tsp",
      },
      {
        name: "turmeric powder",
        quantity: "1/2 tsp",
      },
      {
        name: "cumin powder",
        quantity: "1/2 tsp",
      },
      {
        name: "coriander powder",
        quantity: "1/2 tsp",
      },
      {
        name: "asafoetida (hing)",
        quantity: "1/4 tsp",
      },
      {
        name: "salt",
        quantity: "to taste",
      },
      {
        name: "oil",
        quantity: "1 tbsp",
      },
    ],
    instructions: [
      "Wash the colocasia leaves and wipe them dry.",
      "In a mixing bowl, add gram flour, tamarind pulp, jaggery, ginger paste, green chili paste, turmeric powder, cumin powder, coriander powder, asafoetida, salt, and 1 tbsp oil. Mix well to form a smooth paste.",
      "Place a colocasia leaf on a flat surface with the stem facing downwards. Spread the gram flour paste evenly on the leaf, leaving some space at the edges.",
      "Place another colocasia leaf on top of it and repeat the process until you have used all the leaves and the paste.",
      "Roll the leaves tightly into a cylindrical shape and wrap them in aluminum foil.",
      "Preheat the oven to 350 degrees Fahrenheit.",
      "Place the wrapped patra in a baking dish and bake for 40-45 minutes.",
      "Once done, let them cool for a few minutes.",
      "Unwrap the foil and cut the patra into 1-inch thick pieces.",
      "Serve hot with green chutney.",
    ],
    cooking_time_minutes: 70,
    complexity: "Medium",
    cuisines: ["Gujarati"],
    meal_time: ["Lunch", "Dinner"],
    calories_estimate: 350,
    tags: ["vegetarian", "baked", "spicy"],
    image_caption_prompt:
      "Generate an image featuring baked Gujarati Patra, with colocasia leaves smeared with a spiced gram flour paste, rolled and baked in the oven. Ensure that all the ingredients are clearly visible and nothing important is cut or cropped.",
    id: "a85705a4-6336-41ec-9155-fa93a2fadf2b",
    image: require("../../assets/recipe-images/Baked-Patra-a85705a4-6336-41ec-9155-fa93a2fadf2b.png"),
  },
]) as Recipe[];
