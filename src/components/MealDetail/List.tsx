import { StyleSheet, Text, View } from 'react-native';

interface ListProps {
  data: string[];
}
export const List: React.FC<ListProps> = ({ data }) => {
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

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: 'rgb(226, 230, 221)',
  },
  itemText: {
    color: '#0f3d5c',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
