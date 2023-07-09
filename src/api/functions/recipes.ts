import { Category, Meal } from '../../types';
import { RecipesApi } from '../api-client';
import { CategoryGet, RecipeGet } from '../generated';

const getRandomColorForString = (str: string): string => {
  // always return same hex code for same strings
  const hash = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = hash % 360;
  return `hsl(${hue}, 100%, 50%)`;
};

const transformCategoryResponseToCategory = (
  category: CategoryGet,
): Category => ({
  id: category.id,
  title: category.name,
  color: getRandomColorForString(category.name),
});

export const fetchAllCategories = async (): Promise<Category[]> => {
  const { data } = await RecipesApi.recipesGetCategories();
  return data.map(transformCategoryResponseToCategory);
};

export const fetchCategoryById = async (
  categoryId: string,
): Promise<Category> => {
  const { data } = await RecipesApi.recipesGetCategory(categoryId);
  return transformCategoryResponseToCategory(data);
};

const transformRecipeResponseToMeal = (recipe: RecipeGet): Meal => ({
  id: recipe.id,
  title: recipe.name,
  imageUrl: recipe.images[0].url,
  categoryIds: [recipe.category.id],
  affordability: 'affordable',
  complexity: recipe.complexity,
  duration: recipe.cooking_time_in_minutes,
  isGlutenFree: false,
  isVegan: false,
  isVegetarian: false,
  isLactoseFree: false,
  ingredients: recipe.ingredients.map((ingredient) => ingredient.name),
  steps: recipe.instructions.map((step) => step.text),
});

export const fetchAllRecipes = async (): Promise<Meal[]> => {
  const { data } = await RecipesApi.recipesGetRecipes();
  return data.map(transformRecipeResponseToMeal);
};

export const fetchRecipesForCategory = async (
  categoryId: string,
): Promise<Meal[]> => {
  const { data } = await RecipesApi.recipesGetCategoryRecipes(categoryId);
  return data.map(transformRecipeResponseToMeal);
};

export const fetchRecipeById = async (recipeId: string): Promise<Meal> => {
  const { data } = await RecipesApi.recipesGetRecipe(recipeId);
  return transformRecipeResponseToMeal(data);
};
