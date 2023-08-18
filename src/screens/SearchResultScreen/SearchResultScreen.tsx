import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MealItem, SearchInput } from '../../components';
import React, { useEffect, useRef } from 'react';
import { ThemeType, useTheme } from '../../theme';
import { useFetchAllMeals, useSearch } from './hooks';

import { Meal } from '../../types';
import { SearchResultsScreenProps } from '../../navigation';

export const SearchResultsScreen: React.FC<SearchResultsScreenProps> = ({
  route,
  navigation,
}) => {
  const searchQuery = route.params?.searchQuery || '';
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const { allMeals, isLoading } = useFetchAllMeals();
  const {
    currentSearch,
    setCurrentSearch,
    filteredMeals,
    searchByMealNameOrCategory,
  } = useSearch(allMeals);

  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      if (searchQuery) {
        setCurrentSearch(searchQuery);
      }
      hasMounted.current = true;
    }
  }, [searchQuery, setCurrentSearch]);

  useEffect(() => {
    if (currentSearch) {
      searchByMealNameOrCategory();
    }
  }, [currentSearch, searchByMealNameOrCategory]);

  const handleSearch = (query: string) => {
    setCurrentSearch(query);
  };

  const navigateToMeal = (mealId: string) => {
    navigation.navigate('MealDetails', {
      mealId,
      source: 'SearchResults',
    });
  };

  const renderMeal = (meal: Meal) => (
    <MealItem
      key={meal.id}
      title={meal.title}
      imageUrl={meal.imageUrl}
      onPress={() => navigateToMeal(meal.id)}
      duration={meal.duration}
      complexity={meal.complexity}
      affordability={meal.affordability}
      id={meal.id}
    />
  );

  const renderSuggestionMessage = () => {
    if (currentSearch && !filteredMeals.length) {
      return (
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={{ color: theme.primaryColors.primaryText }}>
            No results found for {currentSearch}. Try searching for something
            else.
          </Text>
        </View>
      );
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <SearchInput onSearch={handleSearch} />
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={theme.primaryColors.primaryText}
        />
      ) : (
        <>
          {renderSuggestionMessage()}
          <FlatList
            data={filteredMeals}
            renderItem={({ item }) => renderMeal(item)}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#F6F6F6',
    },
  });
};
