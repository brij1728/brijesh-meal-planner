import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import type { CompositeScreenProps, RouteProp } from '@react-navigation/native';
import { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackNavigatorParamsList = {
  CategoriesOverview: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
  Favourites: { mealId: string };
};

export type DrawerNavigatorParamsList = {
  HomeDrawer: NavigatorScreenParams<StackNavigatorParamsList>;
  FavouriteDrawer: undefined;
  SearchResults: { searchQuery: string };
};

export type BottomNavigatorParamsList = {
  HomeBottom: NavigatorScreenParams<StackNavigatorParamsList>;
  FavouriteBottom: undefined;
  MenuBottom: undefined;
  CraftMealBottom: undefined;
};

export type CategoriesOverviewScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomNavigatorParamsList, 'HomeBottom'>,
  CompositeScreenProps<
    DrawerScreenProps<DrawerNavigatorParamsList, 'HomeDrawer'>,
    NativeStackScreenProps<StackNavigatorParamsList>
  >
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

export type SearchResultsRouteProp = RouteProp<
  DrawerNavigatorParamsList,
  'SearchResults'
>;
