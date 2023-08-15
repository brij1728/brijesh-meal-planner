import { StyleSheet, Text, View } from 'react-native';

import { ThemeType } from '../../theme/ThemeType';
import { useTheme } from '../../theme';

interface SubTitleProps {
  subTitleText: string;
}
export const SubTitle: React.FC<SubTitleProps> = ({ subTitleText }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  return (
    <View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{subTitleText}</Text>
      </View>
    </View>
  );
};

const getStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    subTitle: {
      color: theme.primaryColors.primaryActive,
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    subTitleContainer: {
      marginHorizontal: 12,
      marginVertical: 4,
      padding: 6,
      textAlign: 'center',
      borderBottomColor: theme.primaryColors.primaryActive,
      borderBottomWidth: 2,
    },
  });
};
