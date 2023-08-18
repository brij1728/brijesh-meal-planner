import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { ThemeType, useTheme } from '../../theme';

import { Ionicons } from '@expo/vector-icons'; // Or any other icon library you prefer

interface MealDetailsProps {
  duration: number;
  complexity: string;
  affordability: string;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const MealDetails: React.FC<MealDetailsProps> = ({
  duration,
  complexity,
  affordability,
  viewStyle,
  textStyle,
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const affordabilityIcon = getAffordabilityIcon(affordability);
  const affordabilityColor = getAffordabilityColor(affordability);
  const { icon, description } = getAffordabilityRepresentation(affordability);

  return (
    <View style={[styles.container, viewStyle]}>
      <View style={styles.details}>
        <Ionicons
          name="time"
          size={18}
          color={theme.primaryColors.primaryText}
        />
        <Text style={[styles.detailsItem, textStyle, styles.durationText]}>
          {duration}m
        </Text>

        <Ionicons
          name={getComplexityIcon(complexity)}
          size={18}
          color={theme.primaryColors.primaryText}
        />
        <Text style={[styles.detailsItem, textStyle]}>
          {complexity.toUpperCase()}
        </Text>
      </View>

      <Text
        style={[
          styles.affordabilityText,
          textStyle,
          { color: affordabilityColor },
        ]}
      >
        {icon} {description}
      </Text>
    </View>
  );
};

const getComplexityIcon = (complexity: string) => {
  switch (complexity.toLowerCase()) {
    case 'easy':
      return 'star';
    case 'medium':
      return 'star-half';
    case 'intermediate':
      return 'star-outline';
    default:
      return 'help-circle';
  }
};

const getAffordabilityIcon = (affordability: string) => {
  switch (affordability.toLowerCase()) {
    case 'cheap':
      return '$';
    case 'moderate':
      return '$$';
    case 'expensive':
      return '$$$';
    default:
      return 'Affordable';
  }
};

const getAffordabilityColor = (affordability: string) => {
  switch (affordability.toLowerCase()) {
    case 'cheap':
      return 'green';
    case 'moderate':
      return 'yellow';
    case 'expensive':
      return 'red';
    default:
      return 'black';
  }
};

const getAffordabilityRepresentation = (affordability: string) => {
  switch (affordability.toLowerCase()) {
    case 'cheap':
      return { icon: '😊', description: 'Budget Friendly' };
    case 'affordable':
      return { icon: '😐', description: 'Average Priced' };
    case 'expensive':
      return { icon: '😞', description: 'Premium Priced' };
    default:
      return { icon: '🤔', description: 'Affordable' };
  }
};

const getStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    details: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    detailsItem: {
      color: theme.primaryColors.primaryText,
      fontSize: 16,
      marginHorizontal: 5,
    },
    affordabilityText: {
      marginTop: 5,
      alignSelf: 'center',
      fontSize: 16,
    },
    durationText: {
      marginRight: 15, // Adjust this value to control the spacing between duration and complexity
    },
  });
};
