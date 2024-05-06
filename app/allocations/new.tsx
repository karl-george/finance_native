import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

const NewAllocation = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'New Allocation' }} />
      <Text>New allocation</Text>
    </View>
  );
};

export default NewAllocation;
