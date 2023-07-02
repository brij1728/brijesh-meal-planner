import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { CategoryGridTile } from '../components';
import { CATEGORIES } from '../fixtures';
import { CategoriesOverviewScreenProps } from '../navigation/navigationType';
import { Category } from '../types';

export const CategoriesScreens: React.FC<CategoriesOverviewScreenProps> = ({
  navigation,
}) => {
  const renderCategoryItem = ({ item }: ListRenderItemInfo<Category>) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', { categoryId: item.id });
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
