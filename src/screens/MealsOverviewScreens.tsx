import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { MEALS } from "../fixtures";
import { Meal } from "../types";
import { MealItem } from "../components";
import { MealsOverviewScreenProps } from "../stackroutes";

export const MealsOverviewScreens: React.FC<MealsOverviewScreenProps> = ({
  route,
}) => {
  const categoryId = route.params.categoryId;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = ({ item }: ListRenderItemInfo<Meal>) => {
    return <MealItem title={item.title} />;
  };

  return (
    <View>
      <Text>MealsOverviewScreens -{categoryId}</Text>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
