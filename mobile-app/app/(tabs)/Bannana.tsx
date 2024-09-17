import { Text , View } from 'react-native';
import { Link } from 'expo-router';

export default function Bannana() {
  return (
    <View>
        <Text>This Is My Bannana Page</Text>
        <Link href="/Apple">Apple</Link>
    </View>
  );
}