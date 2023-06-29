export type Recipe = {
  name: string;
  ingredients: Ingredient[];
  instructions: string[];
  cooking_time_minutes: number;
  complexity: string;
  cuisines: string[];
  meal_time: string[];
  calories_estimate: number;
  tags: string[];
  image_caption_prompt: string;
  id: string;
  image: string;
};

export type Ingredient = {
  name: string;
  quantity: string;
};
