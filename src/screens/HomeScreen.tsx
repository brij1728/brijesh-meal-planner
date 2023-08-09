// screens/HomeScreen.tsx
import React from 'react';
import { Button, Text, View } from 'react-native';

export const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { itemId: '123' })}
      />
    </View>
  );
};

// Repeat a similar structure for other screen components (FavouriteScreen, DetailsScreen, MenuScreen).
