import { Text, View } from 'react-native';
import AccountsList from '../components/AccountsList';

const Accounts = () => {
  return (
    <View>
      <View className='flex-row justify-between px-4 py-2'>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
      <View className='flex-col'>
        <AccountsList />
      </View>
    </View>
  );
};

export default Accounts;
