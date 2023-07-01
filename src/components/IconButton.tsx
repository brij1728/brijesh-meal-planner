import { Pressable, PressableProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps extends PressableProps {
  iconName: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}
export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={iconName} size={24} color="white" />
    </Pressable>
  );
};
