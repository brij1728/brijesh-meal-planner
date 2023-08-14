import { MealDetailsScreen, MealsOverviewScreens } from '../screens';
import { customTheme, useTheme } from '../theme';

import { BottomNavigation } from './BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorParamsList } from './NavigationType';
import { TabContextProvider } from '../store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelectedTab } from '../hooks';

const Stack = createNativeStackNavigator<StackNavigatorParamsList>();

export const AppNavigation = () => {
  const { theme } = useTheme();
  const { selectedTab } = useSelectedTab();

  return (
    <>
      <NavigationContainer theme={customTheme}>
        <TabContextProvider>
          <Stack.Navigator initialRouteName="CategoriesOverview">
            <Stack.Group
              screenOptions={{
                headerStyle: {
                  backgroundColor: `${theme.primaryColors.primaryHeader}`,
                },
                headerTintColor: `${theme.primaryColors.primaryText}`,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                title:
                  selectedTab === 'HomeBottom'
                    ? 'Meal Categories'
                    : selectedTab === 'FavouriteBottom'
                    ? 'Favourites'
                    : selectedTab === 'SearchBottom'
                    ? 'Search'
                    : selectedTab === 'MenuBottom'
                    ? 'Menu'
                    : selectedTab === 'CraftMealBottom'
                    ? 'Craft Meal'
                    : '',
                headerShown: true,
              }}
            >
              <Stack.Screen
                name="CategoriesOverview"
                component={BottomNavigation}
                options={({ route }) => ({
                  headerShown: true,
                })}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreens}
              />
              <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </TabContextProvider>
      </NavigationContainer>
    </>
  );
};
