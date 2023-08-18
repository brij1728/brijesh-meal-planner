import {
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { ThemeType, useTheme } from '../theme';

import React from 'react';

interface Props {
  title: string;
  color: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const CategoryGridTileComponent: React.FC<Props> = ({
  title,
  color,
  onPress,
  style,
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={[styles.gridItem, style]}>
      <Pressable
        android_ripple={{ color: '#c15f5f' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 15,
      height: 150,
      borderRadius: 10,
      elevation: 3,
      shadowColor: theme.primaryColors.primaryShadow,
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
      flex: 1,
    },
    buttonPressed: {
      opacity: 0.5,
    },
    innerContainer: {
      flex: 1,
      padding: 16,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
    },
  });
};

export const CategoryGridTile = React.memo(CategoryGridTileComponent);
