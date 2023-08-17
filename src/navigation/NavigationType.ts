import type { CompositeScreenProps, RouteProp } from '@react-navigation/native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';

export type StackNavigatorParamsList = {
  CategoriesOverview: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
  Favourites: { mealId: string };
  SearchResults: { searchQuery: string };
  Menu: undefined;
  CraftMeal: undefined;
  HomeTab: undefined;
};

export type BottomNavigatorParamsList = {
  HomeTab: undefined;
  FavouritesTab: { mealId: string };
  MenuTab: undefined;
  CraftMealTab: undefined;
  SearchResultsTab: { searchQuery: string };
};

export type HomeTabProps = CompositeScreenProps<
  BottomTabScreenProps<BottomNavigatorParamsList, 'HomeTab'>,
  NativeStackScreenProps<StackNavigatorParamsList, 'CategoriesOverview'>
>;

export type CategoriesOverviewScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  'CategoriesOverview'
>;
export type MealsOverviewScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  'MealsOverview'
>;

export type MealDetailsScreenProps = {
  route: RouteProp<SearchStackParamsList, 'MealDetails'>;
  navigation: StackNavigationProp<SearchStackParamsList, 'MealDetails'>;
};

export type FavouritesScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  'Favourites'
>;

export type SearchResultsScreenProps = NativeStackScreenProps<
  SearchStackParamsList,
  'SearchResults'
>;

export type SearchStackParamsList = {
  SearchResults: { searchQuery: string };
  MealDetails: {
    mealId: string;
    source: string;
  };
};

export type FavouriteStackParamsList = {
  Favourites: { mealId: string };
};

export type MenuStackParamsList = {
  Menu: undefined;
};

export type CraftMealStackParamsList = {
  CraftMeal: undefined;
};
