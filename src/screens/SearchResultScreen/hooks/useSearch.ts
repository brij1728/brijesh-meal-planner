import { useCallback, useState } from 'react';

import { Meal } from '../../../types';
import { searchMealsByCategory } from '../utils';

export const useSearch = (allMeals: Meal[]) => {
  const [currentSearch, setCurrentSearch] = useState('');
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [noResultsFound, setNoResultsFound] = useState(false);

  const searchByMealNameOrCategory = useCallback(async () => {
    let fetchedMeals: Meal[] = [];

    // Only search by category if the search query has at least 3 characters
    if (currentSearch.length >= 3) {
      try {
        fetchedMeals = await searchMealsByCategory(currentSearch);
      } catch (error) {
        // Handle any errors if needed
      }
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
      setNoResultsFound(true);
      // Show a default set of meals if no match is found
      setFilteredMeals(allMeals.slice(0, 6));
    } else {
      setNoResultsFound(false);
      setFilteredMeals(combinedMeals);
    }
    setSearchCompleted(true);
  }, [currentSearch, allMeals]);

  return {
    currentSearch,
    setCurrentSearch,
    filteredMeals,
    searchByMealNameOrCategory,
    searchCompleted,
    setSearchCompleted,
    noResultsFound,
  };
};
