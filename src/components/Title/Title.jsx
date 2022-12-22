import React from 'react';
import './Title.scss';

const Title = React.memo(() => {

  return (
    <div className='title'>
      <h1 className='title__text'>
        Ход торгов&nbsp;
        <span className='title__info'>
          Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)
        </span>
      </h1>
    </div>
  );
});

export default Title;