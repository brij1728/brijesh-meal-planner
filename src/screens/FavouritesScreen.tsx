import { StyleSheet, Text, View } from 'react-native';

import { MealsList } from '../components';
import { MEALS } from '../fixtures';
import { useAppSelector } from '../store';

export const FavouritesScreen = () => {
  // const favouriteMealContext = useContext(FavouritesContext);
  const favouriteMealIds = useAppSelector((state) => state.favourites.ids);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealIds.includes(meal.id),
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          No favourite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
