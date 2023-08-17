import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MealItem, SearchInput } from '../../components';
import React, { useEffect, useState } from 'react';
import { ThemeType, useTheme } from '../../theme';

import { Meal } from '../../types';
import { SearchResultsScreenProps } from '../../navigation';
import { fetchAllRecipes } from '../../api';

export const SearchResultsScreen: React.FC<SearchResultsScreenProps> = ({
  route,
  navigation,
}) => {
  const searchQuery = route.params?.searchQuery || '';
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const [isLoading, setIsLoading] = useState(true);

  const [allMeals, setAllMeals] = useState<Meal[]>([]);
  const [currentSearch, setCurrentSearch] = useState(searchQuery);
  const [searchSuggestions, setSearchSuggestions] = useState<Meal[]>([]);
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      try {
        const data = await fetchAllRecipes();
        setAllMeals(data);
      } catch (error) {
        console.error('Failed to fetch meals:', error);
      }
    };
    setIsLoading(false);
    fetchMeals();
  }, []);

  useEffect(() => {
    if (currentSearch.length > 0) {
      const matchingMeals = allMeals.filter((meal) =>
        meal.title.toLowerCase().includes(currentSearch.toLowerCase()),
      );

      setFilteredMeals(matchingMeals);
      setShowSuggestions(false);
    } else {
      setFilteredMeals(allMeals.slice(0, 5));
    }
  }, [currentSearch, allMeals]);

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleSearch = (query: string) => {
    setCurrentSearch(query);

    if (query.length > 0) {
      const matchingSuggestions = allMeals.filter((meal) =>
        meal.title.toLowerCase().startsWith(query.toLowerCase()),
      );

      setSearchSuggestions(matchingSuggestions.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const navigateToMeal = (mealId: string) => {
    navigation.navigate('MealDetails', { mealId });
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
          {showSuggestions && searchSuggestions.length > 0 && (
            <FlatList
              data={searchSuggestions}
              renderItem={({ item }) => (
                <Text
                  onPress={() => handleSuggestionClick(item.title)}
                  style={styles.suggestionText}
                >
                  {item.title}
                </Text>
              )}
              keyExtractor={(item: Meal) => item.id}
              style={styles.suggestionsList}
              key="suggestions-list"
            />
          )}
          <FlatList
            data={filteredMeals}
            renderItem={({ item }) => renderMeal(item as Meal)}
            keyExtractor={(item: Meal) => item.id}
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
    suggestionsList: {
      height: 100, // Adjust this based on your needs
    },
    suggestionText: {
      padding: 10,
      backgroundColor: '#e0e0e0',
      marginVertical: 2,
    },
    // ... rest of your styles
  });
};
