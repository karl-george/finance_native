import { View, Text, FlatList } from 'react-native';
import AccountListItem from './AccountListItem';

const AccountsList = () => {
  return (
    <FlatList
      data={[1, 2, 3]}
      contentContainerStyle={{ gap: 8 }}
      renderItem={() => <AccountListItem />}
    />
  );
};

export default AccountsList;
