import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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

export type MealDetailsScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  'MealDetails'
>;

export type FavouritesScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  'Favourites'
>;

export type SearchResultsScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  'SearchResults'
>;

export type SearchStackParamsList = {
  SearchResults: { searchQuery: string };
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
