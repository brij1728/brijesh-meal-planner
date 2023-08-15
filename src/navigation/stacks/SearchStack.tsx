import { SearchResultsScreen } from '../../screens';
import { SearchStackParamsList } from '../NavigationType';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SearchStack = createNativeStackNavigator<SearchStackParamsList>();

export const SearchResultsStack = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchResults"
        component={SearchResultsScreen}
        options={{ title: 'Search Results' }}
      />
    </SearchStack.Navigator>
  );
};
