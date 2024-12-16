import { View, Text, StyleSheet } from "react-native";

export default function Matches() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Matches Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    backgroundColor: "red"
  },
});
