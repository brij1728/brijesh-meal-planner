import { useLayoutEffect } from 'react';

import { MealsList } from '../components';
import { CATEGORIES, MEALS } from '../fixtures';
import { MealsOverviewScreenProps } from '../navigation/NavigationType';

export const MealsOverviewScreens: React.FC<MealsOverviewScreenProps> = ({
  route,
  navigation,
}) => {
  const categoryId = route.params.categoryId;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId,
  )?.title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, categoryTitle, navigation]);

  return <MealsList items={displayMeals} />;
};
