import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Link href="/details">View details</Link>
      <Link href="/about">About</Link>
      <Link href="/about">About</Link>
      <Link href="/about">About</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: 10
  },
});
