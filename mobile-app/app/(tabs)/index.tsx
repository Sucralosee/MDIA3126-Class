import { Text , View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View>
        <Text>This Is My Index Page</Text>
        <Link href="/Apple">Apple</Link>
        <Link href="/Bannana">Bannana</Link>
    </View>
  );
}