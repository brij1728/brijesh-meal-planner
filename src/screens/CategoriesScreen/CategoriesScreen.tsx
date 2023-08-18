import { FlatList, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { ThemeType, useTheme } from '../../theme';

import { CategoriesOverviewScreenProps } from '../../navigation/NavigationType';
import { Category } from '../../types';
import { CategoryGridTile } from '../../components';
import { fetchCategories } from './utils';

const ITEMS_PER_PAGE = 10;

export const CategoriesScreen: React.FC<CategoriesOverviewScreenProps> = ({
  navigation,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { theme } = useTheme();
  const styles = getStyles(theme);

  const loadCategories = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    try {
      const newCategories = await fetchCategories(page, ITEMS_PER_PAGE);
      setCategories((prev) => {
        // Filter out any duplicates to prevent key errors
        const uniqueNewCategories = newCategories.filter(
          (newCat) => !prev.some((cat) => cat.id === newCat.id),
        );
        return [...prev, ...uniqueNewCategories];
      });
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error('Failed to load categories:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, page]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const renderCategoryItem = useCallback(
    ({ item }: { item: Category }) => {
      const pressHandler = () => {
        navigation.navigate('MealsOverview', { categoryId: item.id });
      };

      return (
        <CategoryGridTile
          key={item.id}
          title={item.title}
          color={item.color}
          onPress={pressHandler}
        />
      );
    },
    [navigation],
  );

  return (
    <View style={styles.screenContent}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategoryItem}
        numColumns={2}
        onEndReached={loadCategories}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return {
    screenContent: {
      flex: 1,
      paddingBottom: 85,
    },
  };
};
