import { FlatList, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../fixtures";
import { Meals } from "../types";

export const MealsOverviewScreens = ({ route }: any) => {
  const categoryId = route.params.categoryId;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = ({ itemData }: { itemData: Meals }) => {
    return (
      <View>
        <Text>{itemData.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>MealsOverviewScreens -{categoryId}</Text>
      {/* <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
