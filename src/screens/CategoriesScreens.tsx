import { CATEGORIES } from "../fixtures";
import { CategoriesScreensNavigationProp } from "../stackroutes";
import { Category } from "../types";
import { CategoryGridTile } from "../components";
import { FlatList } from "react-native";
import React from "react";

interface CategoriesScreensProps {
  navigation: CategoriesScreensNavigationProp;
}
export const CategoriesScreens: React.FC<CategoriesScreensProps> = ({
  navigation,
}) => {
  const renderCategoryItem = ({ item }: { item: Category }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
