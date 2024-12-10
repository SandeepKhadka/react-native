import { Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function DetailsPage() {
  const router = useRouter();

  return (
    <View>
      <Text>Details Page</Text>
      {/* <Button title="Go Back" onPress={() => router.push())} /> */}
    </View>
  );
}
