import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Link href="/(home)/">Home</Link>
      </Pressable>
      <Link href="/details">View details</Link>
      <Link href="/about">About</Link>
      <Link href="/user/[id]">View User</Link>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
