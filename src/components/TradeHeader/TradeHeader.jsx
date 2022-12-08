import React from 'react';
import './TradeHeader.scss';

const TradeHeader = () => {
  return (
    <div className='trade-header'>
      <ul className='trade-header__items'>
        <li className='trade-header__item trade-header__item_title'>Ход</li>
        <li className='trade-header__item trade-header__item_title'>
          Параметры и требования
        </li>
        <li className='trade-header__item'>
          Наличие комплекса мероприятий, повышающих стандарты
          качества изготовления
        </li>
        <li className='trade-header__item'>Срок изготовления лота, дней</li>
        <li className='trade-header__item'>Гарантийные обязательства, мес</li>
        <li className='trade-header__item'>Условия оплаты</li>
        <li className='trade-header__item trade-header__item_price'>
          Стоимость изготовления лота, руб (без НДС)
        </li>
        <li className='trade-header__item'>Действия:</li>
      </ul>
    </div>
  );
};

export default TradeHeader;