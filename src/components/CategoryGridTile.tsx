import { Pressable, Text, View } from "react-native";

import { Category } from "../types";

export const CategoryGridTile = ({ title, color }: Category) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
