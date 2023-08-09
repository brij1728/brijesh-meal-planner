import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fetchAllRecipes } from '../api';
import { MealsList } from '../components';
import { AppState, useAppSelector } from '../store';
import { Meal } from '../types';

export const FavouritesScreen = () => {
  // const favouriteMealContext = useContext(FavouritesContext);

  const favouritesMealIds = useAppSelector(
    (state: AppState) => state.favourites.ids,
  );
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchAllRecipes();

      setMeals(data);
    })();
  }, [favouritesMealIds]);

  const favouriteMeals = meals.filter((meal: { id: string }) =>
    favouritesMealIds.includes(meal.id),
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
    color: 'black',
  },
});
