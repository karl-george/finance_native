import { View, Text } from 'react-native';

const AccountListItem = () => {
  return (
    <View className='flex-row justify-between px-4 py-2 bg-white rounded-md'>
      <Text className='font-bold'>Profit</Text>
      <Text>10%</Text>
      <Text>20%</Text>
    </View>
  );
};

export default AccountListItem;
