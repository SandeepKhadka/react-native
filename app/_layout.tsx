import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import Navbar from "./components/Navbar";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
  },
});
