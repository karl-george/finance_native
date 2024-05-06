import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View>
      <Text>Allocations</Text>
      <Link href='/accounts'>Go to accounts</Link>
      <StatusBar style='auto' />
    </View>
  );
}
