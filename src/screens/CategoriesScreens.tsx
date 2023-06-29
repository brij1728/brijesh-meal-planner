import { FlatList, ListRenderItemInfo } from "react-native";

import { CATEGORIES } from "../fixtures";
import { CategoriesOverviewScreenProps } from "../stackroutes";
import { Category } from "../types";
import { CategoryGridTile } from "../components";
import React from "react";

export const CategoriesScreens: React.FC<CategoriesOverviewScreenProps> = ({
  navigation,
}) => {
  const renderCategoryItem = ({ item }: ListRenderItemInfo<Category>) => {
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
