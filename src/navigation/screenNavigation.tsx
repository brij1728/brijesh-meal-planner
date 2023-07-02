import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CategoriesScreens,
  MealDetailsScreen,
  MealsOverviewScreens,
} from '../screens';
import { StackNavigatorParamsList } from './navigationType';

export const ScreenNavigation = () => {
  const Stack = createNativeStackNavigator<StackNavigatorParamsList>();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#0f3d5c',
            },
            headerTintColor: '#fff',
            contentStyle: {
              backgroundColor: '#be7242',
            },
          }}
        >
          <Stack.Screen
            name="CategoriesOverview"
            component={CategoriesScreens}
            options={{
              title: 'Meals Categories',
              headerStyle: {
                backgroundColor: '#0f3d5c',
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#e2d7d0',
              },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreens}
            options={{
              title: 'Meals Overview',
              headerStyle: {
                backgroundColor: '#4d7b2e',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
