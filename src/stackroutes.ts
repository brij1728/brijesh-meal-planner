// import { StackScreenProps } from "@react-navigation/stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackNavigatorParamsList = {
  CategoriesOverview: undefined;
  MealsOverview: { categoryId: string };
};

export type CategoriesOverviewScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  "CategoriesOverview"
>;

export type MealsOverviewScreenProps = NativeStackScreenProps<
  StackNavigatorParamsList,
  "MealsOverview"
>;
