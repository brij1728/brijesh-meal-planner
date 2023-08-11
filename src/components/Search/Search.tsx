import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { SearchBar } from '../SearchBar';

interface SearchProps {
  onSearch: (searchText: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    console.log('Search for', searchQuery);
    onSearch(searchQuery);
  };
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        onChangeText={(searchQuery: string) => setSearchQuery(searchQuery)}
        value={searchQuery}
        style={styles.searchBar}
        onSubmitEditing={handleSearch}
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
  searchBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
});
