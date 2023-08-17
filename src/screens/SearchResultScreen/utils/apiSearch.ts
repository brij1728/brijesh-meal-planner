import { fetchAllRecipes, fetchRecipesForCategoryName } from '../../../api';

import { Meal } from '../../../types';

export const fetchAllMeals = async (): Promise<Meal[]> => {
  try {
    const meals = await fetchAllRecipes();
    return meals;
  } catch (error) {
    console.error('Error fetching all meals:', error);
    return [];
  }
};

export const searchMealsByCategory = async (
  category: string,
): Promise<Meal[]> => {
  try {
    return await fetchRecipesForCategoryName(category);
  } catch (error) {
    console.error('Error fetching meals by category:', error);
    return [];
  }
};
