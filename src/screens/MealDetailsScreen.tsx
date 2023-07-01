import { StackScreenProps } from '@react-navigation/stack';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { List, MealDetails, SubTitle } from '../components';
import { MEALS } from '../fixtures';
import { StackNavigatorParamsList } from '../screenRoutes';
import { Meal } from '../types';

type MealDetailsScreenProps = StackScreenProps<
  StackNavigatorParamsList,
  'MealDetails'
>;

export const MealDetailsScreen: React.FC<MealDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const mealId = route.params.mealId;

  const selectedMeal: Meal | undefined = MEALS.find(
    (meal) => meal.id === mealId,
  );

  if (!selectedMeal) {
    return (
      <View>
        <Text>Meal not found!</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}> {selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View>
          <SubTitle subTitleText="Ingredients" />
          <List data={selectedMeal.ingredients} />

          <SubTitle subTitleText="Steps" />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 24,
  },

  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontweight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
    color: 'white',
  },
  detailText: {
    color: 'black',
  },
  listOuterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
