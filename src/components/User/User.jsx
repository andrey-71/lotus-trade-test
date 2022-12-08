import React from 'react';
import './User.scss';

const User = () => {
  return (
    <div className='user'>
      <ul className='user__items'>
        <li className='user__item user__item_title'>Место для таймера</li>
        <li className='user__item user__item_title'>
          <span>Участник №1</span>
          <span>ООО "Компания"</span>
        </li>
        <li className='user__item'>-</li>
        <li className='user__item'>80</li>
        <li className='user__item'>24</li>
        <li className='user__item'>30%</li>
        <li className='user__item_price'>
          <span className='user__item-price user__item-price'>
            3700000 руб.
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