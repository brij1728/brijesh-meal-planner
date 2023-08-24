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
      if (newCategories.length > 0) {
        // only update if there are new items
        setCategories((prev) => {
          const combined = [...prev, ...newCategories];
          // Get unique ids
          const uniqueIds = Array.from(new Set(combined.map((c) => c.id)));

          // Map ids back to the category objects, filtering out undefined ones
          return uniqueIds
            .map((id) => combined.find((c) => c.id === id))
            .filter(Boolean) as Category[];
        });
        setPage((prev) => prev + 1);
      }
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
          categoryId={item.id}
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
        maxToRenderPerBatch={6}
        windowSize={5} // Adjust windowSize to potentially improve performance
      />
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return {
    screenContent: {
      flex: 1,
      paddingBottom: 70,
    },
  };
};
