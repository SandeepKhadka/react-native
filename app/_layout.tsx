import { Stack } from "expo-router";
import { View } from "react-native";
import Navbar from "./components/Navbar";

export default function RootLayout() {
  return (
    <View>
      <Navbar />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
