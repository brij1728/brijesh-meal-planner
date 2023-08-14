import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Category } from '../../types';
import { SearchInput } from '../../components';
import { SearchResultsScreenProps } from '../../navigation';
import { fetchAllCategories } from '../../api';

export const SearchResultsScreen: React.FC<SearchResultsScreenProps> = ({
  route,
  navigation,
}) => {
  const searchQuery = route.params?.searchQuery || '';

  const [categories, setCategories] = useState<Category[]>([]);
  const [searchResults, setSearchResults] = useState<Category[]>([]);
  const [currentSearch, setCurrentSearch] = useState(searchQuery);

  useEffect(() => {
    (async () => {
      const data = await fetchAllCategories();
      setCategories(data);
    })();
  }, []);

  useEffect(() => {
    const matchingCategories = categories.filter((category) =>
      category.title.toLowerCase().includes(currentSearch.toLowerCase()),
    );
    setSearchResults(matchingCategories);
  }, [currentSearch, categories]);

  return (
    <View style={styles.container}>
      <SearchInput
        onSearch={(searchText: string) => setCurrentSearch(searchText)}
      />
      <Text style={styles.resultText}>Search Results for: {searchQuery}</Text>
      <FlatList
        data={searchResults}
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
