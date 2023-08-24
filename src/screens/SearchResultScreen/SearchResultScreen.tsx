import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MealItem, SearchInput } from '../../components';
import React, { useEffect, useRef } from 'react';
import { ThemeType, useTheme } from '../../theme';

import { Meal } from '../../types';
import { SearchResultsScreenProps } from '../../navigation';
import { useMeals } from '../../store';
import { useSearch } from './hooks';

export const SearchResultsScreen: React.FC<SearchResultsScreenProps> = ({
  route,
  navigation,
}) => {
  const searchQuery = route.params?.searchQuery || '';
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const { allMeals, isLoading } = useMeals();
  const {
    currentSearch,
    setCurrentSearch,
    filteredMeals,
    searchByMealNameOrCategory,
    searchCompleted,
    setSearchCompleted,
    noResultsFound,
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
    setSearchCompleted(false); // reset search Completed state
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

  const renderLoadingMessage = () => {
    if (isLoading) {
      return (
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={{ color: theme.primaryColors.primaryText }}>
            Loading...
          </Text>
        </View>
      );
    }
    return null;
  };

  const renderSuggestionMessage = () => {
    if (currentSearch && searchCompleted && !isLoading) {
      if (noResultsFound) {
        return (
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: theme.primaryColors.primaryText }}>
              We could not find results for {currentSearch}.
            </Text>
            <Text
              style={{ color: theme.primaryColors.primaryText, marginTop: 8 }}
            >
              Do not worry! Here are some popular meals you might like:
            </Text>
          </View>
        );
      } else {
        return (
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text
              style={{
                color: theme.primaryColors.primaryText,
                paddingBottom: 5,
              }}
            >
              Here are the results for {currentSearch}:
            </Text>
          </View>
        );
      }
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <SearchInput onSearch={handleSearch} />

      {renderLoadingMessage()}
      {renderSuggestionMessage()}

      <FlatList
        data={filteredMeals}
        renderItem={({ item }) => renderMeal(item)}
        keyExtractor={(item) => item.id.toString()}
      />
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
