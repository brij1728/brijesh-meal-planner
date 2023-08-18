import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

import { Meal } from '../../types';
import { MealItem } from './MealItem';

interface MealsListProps {
  items: Meal[];
}
export const MealsList: React.FC<MealsListProps> = ({ items }) => {
  const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => {
    console.log('complexity', ...item.complexity);
    console.log('affordability', ...item.affordability);
    return (
      <MealItem
        key={item.id}
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
