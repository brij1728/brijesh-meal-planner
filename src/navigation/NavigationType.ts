import { DrawerScreenProps } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackNavigatorParamsList = {
  CategoriesOverview: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};

export type DrawerNavigatorParamsList = {
  Home: NavigatorScreenParams<StackNavigatorParamsList>;
  Favourites: undefined;
};

export type CategoriesOverviewScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerNavigatorParamsList, 'Home'>,
  NativeStackScreenProps<StackNavigatorParamsList>
>;

export type MealsOverviewScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  'MealsOverview'
>;

export type MealDetailsScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  'MealDetails'
>;