import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/(home)/">Home</Link>
      <Link href="/details">View details</Link>
      <Link href="/about">About</Link>
      <Link href="/user/[id]">View User</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
