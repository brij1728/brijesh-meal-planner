import {
  OpaqueColorValue,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps extends PressableProps {
  iconName: keyof typeof Ionicons.glyphMap;
  color: string | OpaqueColorValue;
  onPress: () => void;
}
export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  onPress,
  color,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={iconName} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
