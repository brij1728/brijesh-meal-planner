// screens/MenuScreen.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Search } from '../components';

export const MenuScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu Screen</Text>
      <Search
        onSearch={function (searchText: string): void {
          throw new Error('Function not implemented.');
        }}
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
  text: {
    fontSize: 20,
  },
});
