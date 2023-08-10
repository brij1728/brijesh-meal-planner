import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Searchbar as RNSearchBar } from 'react-native-paper';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (searchText: string) => void;
  onSubmitEditing: () => void;
  style: StyleProp<ViewStyle>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ ...props }) => {
  return (
    <View style={props.style}>
      <RNSearchBar
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};
