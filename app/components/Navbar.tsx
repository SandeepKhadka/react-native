import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Link href="/home" style={styles.links}>Home</Link>
      <Link href="/matches" style={styles.links}>Matches</Link>
      <Link href="/modes" style={styles.links}>Modes</Link>
      <Link href="/profile" style={styles.links}>Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "black",
    alignItems: "center",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100
  },

  links: {
    color: "white",
    fontWeight : "bold"
  }
});
