import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function user() {
  <View style= {styles.container}>
    <Text>I am a user</Text>
    <Link href="/user/details">Go to details</Link>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
