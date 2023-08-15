import {
  AppState,
  addFavourite,
  removeFavourite,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { IconButton, List, MealDetails, SubTitle } from '../../components';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { Meal } from '../../types';
import { MealDetailsScreenProps } from '../../navigation';
import { ThemeType } from '../../theme/ThemeType';
import { fetchRecipeById } from '../../api';
import { useTheme } from '../../theme';

// type MealDetailsScreenProps = StackScreenProps<
//   StackNavigatorParamsList,
//   'MealDetails'
// >;

export const MealDetailsScreen: React.FC<MealDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  // const favouritesMealContext = useContext(FavouritesContext);
  const { theme } = useTheme();
  const mealId = route.params.mealId;

  const favouritesMealIds = useAppSelector(
    (state: AppState) => state.favourites.ids,
  );

  const dispatch = useAppDispatch();

  const [meals, setMeals] = useState<Meal | null>(null);

  const styles = getStyles(theme);

  useEffect(() => {
    (async () => {
      const data = await fetchRecipeById(mealId);
      setMeals(data);
    })();
  }, [mealId]);

  // const selectedMeal: Meal | null = MEAL.find((meal) => meal.id === mealId);

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
      title: meals?.title,
      headerRight: () => {
        return (
          <IconButton
            iconName={mealIsFavourite ? 'ios-star' : 'ios-star-outline'}
            color={theme.primaryColors.primaryActive}
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [
    navigation,
    changeFavouriteStatusHandler,
    mealIsFavourite,
    meals?.title,
    theme.primaryColors.primaryActive,
  ]);

  if (!meals) {
    return (
      <View>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: meals.imageUrl }} style={styles.image} />
      <Text style={styles.title}> {meals.title}</Text>
      <MealDetails
        duration={meals.duration}
        complexity={meals.complexity}
        affordability={meals.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View>
          <SubTitle subTitleText="Ingredients" />
          <List data={meals.ingredients} />

          <SubTitle subTitleText="Steps" />
          <List data={meals.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const getStyles = (theme: ThemeType) => {
  return StyleSheet.create({
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
      color: theme.primaryColors.primaryActive,
    },
    detailText: {
      color: theme.primaryColors.primaryText,
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
};
