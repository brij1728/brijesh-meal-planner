import { StyleSheet, Text, View } from "react-native";

import { CategoriesScreens } from "./screens";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app! h</Text>
    //   <StatusBar style="auto" />

    // </View>

    <CategoriesScreens />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
