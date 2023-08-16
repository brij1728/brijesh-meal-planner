import { Button, FlatList, StyleSheet, View } from 'react-native';
import { Category, Meal } from '../../types';
import { CategoryGridTile, MealItem, SearchInput } from '../../components';
import React, { useEffect, useState } from 'react';
import { ThemeType, useTheme } from '../../theme';
import { fetchAllCategories, fetchAllRecipes } from '../../api';

import { SearchResultsScreenProps } from '../../navigation';

export const SearchResultsScreen: React.FC<SearchResultsScreenProps> = ({
  route,
  navigation,
}) => {
  const searchQuery = route.params?.searchQuery || '';
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [allMeals, setAllMeals] = useState<Meal[]>([]);
  const [currentSearch, setCurrentSearch] = useState(searchQuery);
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchAllCategories();
        setAllCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    const fetchMeals = async () => {
      try {
        const data = await fetchAllRecipes();
        setAllMeals(data);
      } catch (error) {
        console.error('Failed to fetch meals:', error);
      }
    };

    fetchCategories();
    fetchMeals();
  }, []);

  useEffect(() => {
    const matchingCategories = currentSearch
      ? allCategories.filter((category) =>
          category.title.toLowerCase().includes(currentSearch.toLowerCase()),
        )
      : [];

    const matchingMeals = currentSearch
      ? allMeals.filter((meal) =>
          meal.title.toLowerCase().includes(currentSearch.toLowerCase()),
        )
      : [];

    setFilteredCategories(matchingCategories);
    setFilteredMeals(matchingMeals);
  }, [currentSearch, allCategories, allMeals]);

  const navigateToCategory = (categoryId: string) => {
    navigation.navigate('MealsOverview', { categoryId });
  };

  const navigateToMeal = (mealId: string) => {
    navigation.navigate('MealDetails', { mealId });
  };

  const renderCategory = (category: Category) => (
    <CategoryGridTile
      title={category.title}
      color={category.color}
      onPress={() => navigateToCategory(category.id)}
    />
  );

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

  const handleSearch = (query: string) => {
    setCurrentSearch(query);
  };

  return (
    <View style={styles.container}>
      <SearchInput onSearch={handleSearch} />
      <FlatList
        data={filteredMeals}
        renderItem={({ item }) => renderMeal(item as Meal)}
        keyExtractor={(item: Meal) => item.id}
      />
      <Button title="Toggle Categories" onPress={toggleCategories} />
      {showCategories && (
        <FlatList
          data={filteredCategories}
          renderItem={({ item }) => renderCategory(item as Category)}
          keyExtractor={(item: Category) => item.id}
          numColumns={2}
          style={styles.categoriesList}
        />
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
    resultText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 15,
      color: theme.primaryColors.primaryText,
    },
    sectionHeader: {
      fontSize: 22,
      fontWeight: '600',
      color: theme.primaryColors.primaryHeader,
      marginBottom: 10,
    },
    categoryItem: {
      flex: 0.5,
      margin: 5,
      height: 150,
    },
    mealItem: {
      flex: 1,
      marginVertical: 10,
    },
    categoriesList: {
      flex: 1,
    },
  });
};
