import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Meal } from '../../types';
import { fetchAllMeals } from '../../screens/SearchResultScreen/utils';

interface MealsContextProps {
  allMeals: Meal[];
  isLoading: boolean;
  fetchMeals: () => void;
}

interface MealContextProviderProps {
  children: ReactNode;
}

const MealsContext = createContext<MealsContextProps | undefined>(undefined);

export const useMeals = () => {
  const context = useContext(MealsContext);
  if (!context) {
    throw new Error('useMeals must be used within a MealsProvider');
  }
  return context;
};

export const MealsProvider: React.FC<MealContextProviderProps> = ({
  children,
}) => {
  const [allMeals, setAllMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeals = async () => {
    setIsLoading(true);
    const meals = await fetchAllMeals();
    setAllMeals(meals);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <MealsContext.Provider value={{ allMeals, isLoading, fetchMeals }}>
      {children}
    </MealsContext.Provider>
  );
};
