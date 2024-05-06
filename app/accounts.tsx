import { Button, Text, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import AccountsList from '../components/AccountsList';
import { useState } from 'react';

const Accounts = () => {
  const [newAccountName, setNewAccountName] = useState('');

  const createAccount = () => {
    console.warn('create account');
  };

  return (
    <View>
      <View className='flex-row justify-between px-4 py-2'>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
      <AccountsList />
      <View className='flex-row justify-between px-4 py-2 mt-2 bg-white'>
        <TextInput placeholder='Name'></TextInput>
        <TextInput placeholder='CAP %'></TextInput>
        <TextInput placeholder='TAP %'></TextInput>
      </View>
      <Button title='Add account' onPress={createAccount} />
    </View>
  );
};

export default Accounts;
