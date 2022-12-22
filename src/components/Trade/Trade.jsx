import React from 'react';
import './Trade.scss';
import TradeHeader from '../TradeHeader/TradeHeader';
import UsersList from '../UsersList/UsersList';

const Trade = React.memo(() => {

  return (
    <div className='trade'>
      <TradeHeader/>
      <UsersList />
    </div>
  );
});

export default Trade;