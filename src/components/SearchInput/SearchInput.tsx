import { StyleSheet, View } from 'react-native';

import { SearchBar } from '../SearchBar';
import { ThemeType } from '../../theme/ThemeType';
import { useState } from 'react';
import { useTheme } from '../../theme';

interface SearchProps {
  onSearch: (searchText: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchProps> = ({
  onSearch,
  placeholder = 'Search',
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const { theme } = useTheme();
  const styles = getStyles(theme);

  const handleSearch = () => {
    console.log('Search for', searchQuery);
    onSearch(searchQuery);
  };
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder={placeholder}
        onChangeText={(searchQuery: string) => setSearchQuery(searchQuery)}
        value={searchQuery}
        style={styles.searchBar}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: 10,
      marginBottom: 20,
      marginTop: 10,
    },
    searchBar: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      borderColor: theme.primaryColors.primaryActive,
      borderWidth: 1,
      backgroundColor: theme.primaryColors.primaryBackground,
      elevation: 2,
      shadowColor: theme.primaryColors.primaryShadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
    },
  });
};
