import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { Searchbar as RNSearchBar } from 'react-native-paper';
import React from 'react';
import { ThemeType } from '../../theme/ThemeType';
import { useTheme } from '../../theme';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (searchText: string) => void;
  onSubmitEditing: () => void;
  style: StyleProp<ViewStyle>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ ...props }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  return (
    <RNSearchBar
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      onSubmitEditing={props.onSubmitEditing}
      style={[styles.container, props.style]}
    />
  );
};

const getStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: 10,
      elevation: 2,
      shadowColor: theme.primaryColors.primaryShadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
    },
  });
};
