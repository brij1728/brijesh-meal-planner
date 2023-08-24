import {
  ActivityIndicator,
  BackHandler,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  AppState,
  addFavourite,
  removeFavourite,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { IconButton, List, MealDetails, SubTitle } from '../../components';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { Meal } from '../../types';
import { MealDetailsScreenProps } from '../../navigation';
import { ThemeType } from '../../theme/ThemeType';
import { fetchRecipeById } from '../../api';
import { useTheme } from '../../theme';

export const MealDetailsScreen: React.FC<MealDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  // Extract the parameters from the route
  const { mealId } = route.params;
  const { theme } = useTheme();

  const favouritesMealIds = useAppSelector(
    (state: AppState) => state.favourites.ids,
  );

  const dispatch = useAppDispatch();

  const [meal, setMeal] = useState<Meal | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const styles = getStyles(theme);

  useEffect(() => {
    const loadMeal = async () => {
      try {
        const fetchedMeal = await fetchRecipeById(mealId);
        setMeal(fetchedMeal);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(`Failed to fetch the meal! Reason: ${err.message}`);
        } else {
          setError('Failed to fetch the meal!');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadMeal();
    const backAction = () => {
      navigation.goBack(); // Go back to the previous screen
      return true; // This prevents the default behavior
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [mealId, navigation]);

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
      title: meal?.title,
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
    meal?.title,
    theme.primaryColors.primaryActive,
  ]);

  if (isLoading) {
    return (
      <View style={styles.isLoading}>
        <ActivityIndicator
          size="large"
          color={theme.primaryColors.primaryActive}
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text>{error}</Text>
      </View>
    );
  }
  if (!meal) {
    return (
      <View>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.screenContent}>
      <ScrollView style={styles.rootContainer}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.title}> {meal.title}</Text>
        <MealDetails
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View>
            <SubTitle subTitleText="Ingredients" />
            <List data={meal.ingredients} />

            <SubTitle subTitleText="Steps" />
            <List data={meal.steps} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    screenContent: {
      flex: 1,
      paddingBottom: 65,
    },
    rootContainer: {
      marginBottom: 10,
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
    isLoading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    error: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
