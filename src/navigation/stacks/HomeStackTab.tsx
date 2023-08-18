import {
  CategoriesScreen,
  MealDetailsScreen,
  MealsOverviewScreen,
} from '../../screens';
import { ThemeType, useTheme } from '../../theme';

import { StackNavigatorParamsList } from '../NavigationType';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<StackNavigatorParamsList>();
export const HomeStackTab = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.screenContent}>
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
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return {
    screenContent: {
      flex: 1,
      paddingBottom: 0,
    },
  };
};
