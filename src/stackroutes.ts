import { StackNavigationProp } from "@react-navigation/stack";
export type StackNavigatorParamsList = {
  MealsOverview: { categoryId: string };
};

export type CategoriesScreensNavigationProp = StackNavigationProp<
  StackNavigatorParamsList,
  "MealsOverview"
>;
