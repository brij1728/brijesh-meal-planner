import { Category, Meal } from '../../types';
import { ThemeType, useTheme } from '../../theme';
import { fetchCategoryById, fetchRecipesForCategory } from '../../api';
import { useEffect, useLayoutEffect, useState } from 'react';

import { MealsList } from '../../components';
import { MealsOverviewScreenProps } from '../../navigation/NavigationType';
import { View } from 'react-native';

export const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({
  route,
  navigation,
}) => {
  const categoryId = route.params.categoryId;
  const [meals, setMeals] = useState<Meal[]>([]);
  const [category, setCategory] = useState<Category | null>(null);

  const { theme } = useTheme();
  const styles = getStyles(theme);

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

  return (
    <View style={styles.screenContent}>
      <MealsList items={meals} />
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return {
    screenContent: {
      flex: 1,
      paddingBottom: 65,
    },
  };
};
