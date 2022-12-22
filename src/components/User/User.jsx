import React from 'react';
import './User.scss';
import Timer from '../Timer/Timer';

const User = ({ index, user, time, timer }) => {

  return (
    <div className='user'>
      <ul className='user__items'>
        <li className='user__item user__item_title'>
          <Timer time={time} timer={timer} />
        </li>
        <li className='user__item user__item_title'>
          <span>Участник {index+1}</span>
          <span>{user.name}</span>
        </li>
        <li className='user__item'>{user.quality ? user.quality : '-'}</li>
        <li className='user__item'>{user.productionDays}</li>
        <li className='user__item'>{user.warrantyMonths}</li>
        <li className='user__item'>{user.payPercentage}%</li>
        <li className='user__item_price'>
          <span className='user__item-price user__item-price'>
            {user.price} руб.
          </span>
          <span className='user__item-price user__item-price_type_discount'>
            -250000 руб.
          </span>
          <span className='user__item-price user__item-price_type_total'>
            2475000 руб.
          </span>
        </li>
        <li className='user__item'>Пусто</li>
      </ul>
    </div>
  );
};

export default User;