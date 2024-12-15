import { Text, View } from 'react-native';
import { Link, router } from 'expo-router';

export default function HomeIndex() {
  return (
    <View>
      <Text>Welcome to the Home Page!</Text>
      <Link href="/(home)/details">Go to Details</Link>
    </View>
  );
}
