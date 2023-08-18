import { Category, Meal } from '../../types';
import { CategoryGet, RecipeGet } from '../generated';

import { RecipesApi } from '../api-client';
import { getRandomColorForString } from '../utils';

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

export const fetchCategoryIdByName = async (
  categoryName: string,
): Promise<string | null> => {
  const categories = await fetchAllCategories();
  const foundCategory = categories.find(
    (cat) => cat.title.toLowerCase() === categoryName.toLowerCase(),
  );
  return foundCategory ? foundCategory.id : null;
};

export const fetchRecipesForCategoryName = async (
  categoryName: string,
): Promise<Meal[]> => {
  const categoryId = await fetchCategoryIdByName(categoryName);

  if (!categoryId) {
    // If no category matches, simply return an empty array
    return [];
  }

  return fetchRecipesForCategory(categoryId);
};
