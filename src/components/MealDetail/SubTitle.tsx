import { StyleSheet, Text, View } from 'react-native';

interface SubTitleProps {
  subTitleText: string;
}
export const SubTitle: React.FC<SubTitleProps> = ({ subTitleText }) => {
  return (
    <View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{subTitleText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    color: 'rgb(226, 230, 221)',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  subTitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    textAlign: 'center',
    borderBottomColor: 'rgb(226, 230, 221)',
    borderBottomWidth: 2,
  },
});
