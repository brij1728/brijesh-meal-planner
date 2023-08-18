import { useCallback, useState } from 'react';

import { Meal } from '../../../types';
import { searchMealsByCategory } from '../utils';

export const useSearch = (allMeals: Meal[]) => {
  const [currentSearch, setCurrentSearch] = useState('');
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);

  const searchByMealNameOrCategory = useCallback(async () => {
    let fetchedMeals: Meal[] = [];

    // Only search by category if the search query has at least 3 characters
    if (currentSearch.length >= 3) {
      fetchedMeals = await searchMealsByCategory(currentSearch);
    }

    // Filter all meals based on the search query
    const mealsFromAll = allMeals.filter((meal) =>
      meal.title.toLowerCase().includes(currentSearch.toLowerCase()),
    );

    // Combine fetched meals and meals from all, ensuring no duplicates
    const combinedMeals = [...fetchedMeals, ...mealsFromAll].filter(
      (meal, index, self) => index === self.findIndex((m) => m.id === meal.id),
    );

    if (!combinedMeals.length) {
      // Show a default set of meals if no match is found
      setFilteredMeals(allMeals.slice(0, 6));
    } else {
      setFilteredMeals(combinedMeals);
    }
  }, [currentSearch, allMeals]);

  return {
    currentSearch,
    setCurrentSearch,
    filteredMeals,
    searchByMealNameOrCategory,
  };
};
