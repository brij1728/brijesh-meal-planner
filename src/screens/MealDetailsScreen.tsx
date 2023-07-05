import { StackScreenProps } from '@react-navigation/stack';
import { useCallback, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { IconButton, List, MealDetails, SubTitle } from '../components';
import { MEALS } from '../fixtures';
import { StackNavigatorParamsList } from '../navigation/NavigationType';
import {
  AppState,
  addFavourite,
  removeFavourite,
  useAppDispatch,
  useAppSelector,
} from '../store';
import { Meal } from '../types';

type MealDetailsScreenProps = StackScreenProps<
  StackNavigatorParamsList,
  'MealDetails'
>;

export const MealDetailsScreen: React.FC<MealDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  // const favouritesMealContext = useContext(FavouritesContext);
  const favouritesMealIds = useAppSelector(
    (state: AppState) => state.favourites.ids,
  );

  const dispatch = useAppDispatch();

  const mealId = route.params.mealId;

  const selectedMeal: Meal | undefined = MEALS.find(
    (meal) => meal.id === mealId,
  );

  // const mealIsFavourite = favouritesMealContext.ids.includes(mealId);
  const mealIsFavourite = favouritesMealIds.includes(mealId);

  // const changeFavouriteStatusHandler = useCallback(() => {
  //   if (mealIsFavourite) {
  //     favouritesMealContext.removeFavourite(mealId);
  //   } else {
  //     favouritesMealContext.addFavourite(mealId);
  //   }
  // }, [mealIsFavourite, favouritesMealContext, mealId]);

  const changeFavouriteStatusHandler = useCallback(() => {
    if (mealIsFavourite) {
      dispatch(removeFavourite({ id: mealId }));
    } else {
      dispatch(addFavourite({ id: mealId }));
    }
  }, [mealIsFavourite, dispatch, mealId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            iconName={mealIsFavourite ? 'ios-star' : 'ios-star-outline'}
            color="#fff"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler, mealIsFavourite]);

  if (!selectedMeal) {
    return (
      <View>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}> {selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View>
          <SubTitle subTitleText="Ingredients" />
          <List data={selectedMeal.ingredients} />

          <SubTitle subTitleText="Steps" />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },

  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
    color: 'white',
  },
  detailText: {
    color: 'black',
  },
  listOuterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
