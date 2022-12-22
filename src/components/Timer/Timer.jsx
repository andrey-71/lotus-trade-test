import React from 'react';
import './Timer.scss';
import { TimerContext } from '../../contexts/TimerContext';

const Timer = ({ index }) => {
  const timer = React.useContext(TimerContext);

  return (
    <div
      className={timer.list[index] ? 'timer timer_visible' : 'timer'}
    >
      <p className='timer__time'>{timer.time}</p>
      <div className='timer__hourglass'></div>
    </div>
  );
};

export default Timer;
