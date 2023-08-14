import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';

export type StackNavigatorParamsList = {
  CategoriesOverview: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
  Favourites: { mealId: string };
  SearchResults: { searchQuery: string };
  Menu: undefined;
  CraftMeal: undefined;
};

export type DrawerNavigatorParamsList = {
  HomeDrawer: NavigatorScreenParams<StackNavigatorParamsList>;
  FavouriteDrawer: { mealId: string };
  SearchResults: { searchQuery: string };
};

export type BottomNavigatorParamsList = {
  HomeBottom: NavigatorScreenParams<StackNavigatorParamsList>;
  FavouriteBottom: { mealId: string };
  MenuBottom: undefined;
  CraftMealBottom: undefined;
  SearchBottom: { searchQuery: string };
};

export type CategoriesOverviewScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomNavigatorParamsList, 'HomeBottom'>,
  NativeStackScreenProps<StackNavigatorParamsList, 'CategoriesOverview'>
>;

export type MealsOverviewScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  'MealsOverview'
>;

export type MealDetailsScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  'MealDetails'
>;

export type FavouritesScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomNavigatorParamsList, 'FavouriteBottom'>,
  NativeStackScreenProps<StackNavigatorParamsList, 'Favourites'>
>;

export type SearchResultsScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomNavigatorParamsList, 'SearchBottom'>,
  NativeStackScreenProps<StackNavigatorParamsList, 'SearchResults'>
>;
