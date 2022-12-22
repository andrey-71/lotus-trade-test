import React from 'react';
import './Timer.scss';

const Timer = ({ time, timer }) => {

  return (
    <div
      className={timer ? 'timer timer_visible' : 'timer'}
    >
      <p className='timer__time'>{time}</p>
      <div className='timer__hourglass'></div>
    </div>
  );
};

export default Timer;
