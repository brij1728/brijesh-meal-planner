import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { fetchAllCategories } from '../api';
import { SearchResultsRouteProp } from '../navigation';
import { Category } from '../types';

interface SearchResultsProps {
  route: SearchResultsRouteProp; // Replace with the actual type if available
}

export const SearchResultsScreen: React.FC<SearchResultsProps> = ({
  route,
}) => {
  const { searchQuery } = route.params;

  const [categories, setCategories] = useState<Category[]>([]);

  const matchingCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    (async () => {
      const data = await fetchAllCategories();
      setCategories(data);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Search Results for: {searchQuery}</Text>
      <FlatList
        data={matchingCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.resultItem}>{item.title} (Category)</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
