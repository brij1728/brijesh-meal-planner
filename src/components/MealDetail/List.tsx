import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../../theme';

interface ListProps {
  data: string[];
}
export const List: React.FC<ListProps> = ({ data }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    listItem: {
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginVertical: 4,
      marginHorizontal: 12,
      backgroundColor: theme.secondaryColors.ingredientTextBackground,
    },
    itemText: {
      color: theme.primaryColors.primaryText,
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  });
  return (
    <>
      {data.map((ingredient) => (
        <View key={ingredient} style={styles.listItem}>
          <Text style={styles.itemText}>{ingredient}</Text>
        </View>
      ))}
    </>
  );
};
