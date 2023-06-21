import { CATEGORIES } from "../fixtures";
import { Category } from "../types";
import { CategoryGridTile } from "../components";
import { FlatList } from "react-native";
import React from "react";

export const CategoriesScreens = () => {
  const renderCategoryItem = ({ item }: { item: Category }) => {
    return (
      <CategoryGridTile id={item.id} title={item.title} color={item.color} />
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
