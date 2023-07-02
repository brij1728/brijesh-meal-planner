import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MealDetailsScreen, MealsOverviewScreens } from '../screens';
import { DrawerNavigation } from './DrawerNavigation';
import { StackNavigatorParamsList } from './NavigationType';

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
            component={DrawerNavigation}
            options={{
              // title: 'Meals Categories',
              headerShown: false,
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
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
