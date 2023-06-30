import { useLayoutEffect } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import { MealItem } from '../components';
import { CATEGORIES, MEALS } from '../fixtures';
import { MealsOverviewScreenProps } from '../stackroutes';
import { Meal } from '../types';

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

  const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => {
    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        key={item.id}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
