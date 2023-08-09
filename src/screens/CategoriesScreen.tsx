import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { fetchAllCategories } from '../api';
import { CategoryGridTile } from '../components';
import { CategoriesOverviewScreenProps } from '../navigation/NavigationType';
import { Category } from '../types';

export const CategoriesScreen: React.FC<CategoriesOverviewScreenProps> = ({
  navigation,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchAllCategories();
      setCategories(data);
    })();
  }, []);

  const renderCategoryItem = ({ item }: ListRenderItemInfo<Category>) => {
    const catId = item.id.toString();
    // console.log('catId', typeof catId);
    const pressHandler = () => {
      navigation.navigate('MealsOverview', { categoryId: catId });
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
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
