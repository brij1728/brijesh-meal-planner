import { useCallback, useState } from 'react';

import { Meal } from '../../../types';
import { searchMealsByCategory } from '../utils';

export const useSearch = (allMeals: Meal[]) => {
  const [currentSearch, setCurrentSearch] = useState('');
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);

  const searchByMealNameOrCategory = useCallback(async () => {
    let fetchedMeals: Meal[] = [];

    fetchedMeals = await searchMealsByCategory(currentSearch);

    if (!fetchedMeals.length) {
      fetchedMeals = allMeals.filter((meal) =>
        meal.title.toLowerCase().includes(currentSearch.toLowerCase()),
      );
    }

    if (!fetchedMeals.length) {
      fetchedMeals = allMeals.slice(0, 10);
    }

    setFilteredMeals(fetchedMeals);
  }, [currentSearch, allMeals]);

  return {
    currentSearch,
    setCurrentSearch,
    filteredMeals,
    searchByMealNameOrCategory,
  };
};
