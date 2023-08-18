import { MealDetailsScreen, SearchResultsScreen } from '../../screens';
import { ThemeType, useTheme } from '../../theme';

import { SearchStackParamsList } from '../NavigationType';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SearchStack = createNativeStackNavigator<SearchStackParamsList>();

export const SearchResultsStack = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.screenContent}>
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
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return {
    screenContent: {
      flex: 1,
      paddingBottom: 65,
    },
  };
};
