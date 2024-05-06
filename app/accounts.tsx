import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import AccountsList from '../components/AccountsList';

const Accounts = () => {
  const [name, setName] = useState('');
  const [cap, setCap] = useState('');
  const [tap, setTap] = useState('');

  const createAccount = () => {
    console.warn('create account', name);
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
        <TextInput
          placeholder='Name'
          value={name}
          onChangeText={(e) => setName(e)}
        ></TextInput>
        <TextInput
          placeholder='CAP %'
          value={cap}
          onChangeText={(e) => setCap(e)}
        ></TextInput>
        <TextInput
          placeholder='TAP %'
          value={tap}
          onChangeText={(e) => setTap(e)}
        ></TextInput>
      </View>
      <Button title='Add account' onPress={createAccount} />
    </View>
  );
};

export default Accounts;
