import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface MealDetailsProps {
  duration: number;
  complexity: string;
  affordability: string;
  viewStyle?: StyleProp<ViewStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
}

export const MealDetails: React.FC<MealDetailsProps> = ({
  duration,
  complexity,
  affordability,
  viewStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.details, viewStyle]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration} m</Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  detailsItem: {
    color: 'black',
    fontSize: 16,
    marginHorizontal: 5,
  },
});
