import { MealDetailsScreen, SearchResultsScreen } from '../../screens';

import { SearchStackParamsList } from '../NavigationType';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../../theme';

const SearchStack = createNativeStackNavigator<SearchStackParamsList>();

export const SearchResultsStack = () => {
  const { theme } = useTheme();
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primaryColors.primaryHeader,
        },
      }}
    >
      <SearchStack.Screen
        name="SearchResults"
        component={SearchResultsScreen}
        options={{ title: 'Search Results' }}
      />
      <SearchStack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{ title: 'Meal Details' }}
      />
    </SearchStack.Navigator>
  );
};
