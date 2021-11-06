import React from 'react';

import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';
import Title from './helpers/Tittle';

import user from '../assets/user.json';
import statisticalData from '../assets/statistical-data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';

const App = () => {
  return (
    <>
      <Title text="TASK 1" />
      <Profile {...user} />
      <Title text="TASK 2" />
      <Statistics title="UPLOAD STATS" stats={statisticalData} />
      <Title text="TASK 3" />
      <FriendList friends={friends} />
      <Title text="TASK 4" />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
