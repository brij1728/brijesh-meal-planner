import { Category, Meal } from '../types';
import { fetchCategoryById, fetchRecipesForCategory } from '../api';
import { useEffect, useLayoutEffect, useState } from 'react';

import { MealsList } from '../components';
import { MealsOverviewScreenProps } from '../navigation/NavigationType';

export const MealsOverviewScreens: React.FC<MealsOverviewScreenProps> = ({
  route,
  navigation,
}) => {
  const categoryId = route.params.categoryId;
  const [meals, setMeals] = useState<Meal[]>([]);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetchCategoryById(categoryId);
      setCategory(data);
    })();
    (async () => {
      const data = await fetchRecipesForCategory(categoryId);
      setMeals(data);
    })();
  }, [categoryId]);

  // const displayMeals = MEALS.filter(
  //   (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  // );

  // const categoryTitle = CATEGORIES.find(
  //   (category) => category.id === categoryId,
  // )?.title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category?.title,
    });
  }, [categoryId, category?.title, navigation]);

  return <MealsList items={meals} />;
};
