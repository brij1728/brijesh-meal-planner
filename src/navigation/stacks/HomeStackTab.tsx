import {
  CategoriesScreen,
  MealDetailsScreen,
  MealsOverviewScreen,
} from '../../screens';

import { StackNavigatorParamsList } from '../NavigationType';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../../theme';

const Stack = createNativeStackNavigator<StackNavigatorParamsList>();
export const HomeStackTab = () => {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="CategoriesOverview"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primaryColors.primaryHeader,
        },
      }}
    >
      <Stack.Screen
        name="CategoriesOverview"
        component={CategoriesScreen}
        options={{
          title: 'Meals Categories',
        }}
      />
      <Stack.Screen
        name="MealsOverview"
        component={MealsOverviewScreen}
        options={{
          title: 'Meal',
        }}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{
          title: 'Meal Details',
        }}
      />
    </Stack.Navigator>
  );
};
