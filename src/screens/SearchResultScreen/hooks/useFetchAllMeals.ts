import { useEffect, useState } from 'react';

import { Meal } from '../../../types';
import { fetchAllMeals } from '../utils';

export const useFetchAllMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allMeals, setAllMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const meals = await fetchAllMeals();
      setAllMeals(meals);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { allMeals, isLoading };
};
