import React from 'react';
import './PageTrade.scss';
import Trade from '../Trade/Trade';

const PageTrade = () => {

  return (
    <div className='page-trade'>
      <p className='page-trade__notice'>
        Уважаемые участники, во время вашего хода вы можете
        изменить параметры торгов, указанных в таблице:
      </p>
      <Trade />
    </div>
  );
};

export default PageTrade;