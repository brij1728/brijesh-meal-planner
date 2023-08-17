import {
  Image,
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ThemeType, useTheme } from '../../theme';

import { MealDetails } from '../MealDetail';
import { StackNavigatorParamsList } from '../../navigation';

type MealItemNavigationProp = NavigationProp<
  StackNavigatorParamsList,
  'MealsOverview'
>;

interface MealItemProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const MealItem: React.FC<MealItemProps> = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  style,
  onPress,
}) => {
  const navigation = useNavigation<MealItemNavigationProp>();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const pressHandler = () => {
    if (onPress) {
      // If an onPress prop is provided, use that
      onPress();
    } else {
      // If not, default to navigation
      console.log('pressed press');
      navigation.navigate('MealDetails', {
        mealId: id,
      });
    }
  };

  return (
    <View style={[styles.mealItem, style]}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.detailsItem}>
              <MealDetails
                duration={duration}
                complexity={complexity}
                affordability={affordability}
              />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    mealItem: {
      margin: 16,
      borderRadius: 8,
      backgroundColor: theme.primaryColors.primaryBackground,
      elevation: 4,
      shadowOpacity: 0.35,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
      borderRadius: 8,
      overflow: 'hidden',
    },
    buttonPressed: {
      opacity: 0.5,
    },
    image: {
      width: '100%',
      height: 200,
      paddingTop: 16,
      paddingBottom: 16,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      margin: 8,
    },
    details: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      backgroundColor: theme.primaryColors.primaryHeader,
    },
    detailsItem: {
      marginHorizontal: 4,
      fontSize: 12,
    },
  });
};
