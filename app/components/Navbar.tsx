import { Link } from "expo-router";
import { View } from "react-native";

export default function Navbar() {
    return (
        <View>
            <Link href="/home">Home</Link>
            <Link href="/matches">Matches</Link>
            <Link href="/modes">Modes</Link>
            <Link href="/profile">Profile</Link>
        </View>
    )
}