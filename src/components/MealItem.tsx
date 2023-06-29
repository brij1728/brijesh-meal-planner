import { Text, View } from 'react-native';

interface MealItemProps {
  title: string;
}

export const MealItem: React.FC<MealItemProps> = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
