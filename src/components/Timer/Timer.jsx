import React, {useState, useEffect} from 'react';
import './Timer.scss';
import { users, time } from '../../utils/constants';

const Timer = ({ index }) => {

  const [timerList, setTimerList] = useState(users.map(() => false));
  const [timerTime, setTimerTime] = useState(0);

  function getTime() {
    const date = new Date();
    const timers = users.map(() => false);
    const timersAmount = timerList.length;
    const timeAllTimers = (date / time / timersAmount - Math.trunc(date / time / timersAmount)) * time * timersAmount / 1000;
    let h, m, s = 0;
    for (let i = 0; i <= users.length; i++) {
      if (time / 1000 * i < timeAllTimers && timeAllTimers < time / 1000 * (i + 1)) {
        const hours = Math.trunc((time / 1000 * (i + 1) - timeAllTimers) / 360);
        const minutes = Math.trunc((time / 1000 * (i + 1) - timeAllTimers - hours * 60) / 60);
        const seconds = Math.trunc(time / 1000 * (i + 1) - timeAllTimers - minutes * 60);
        h = hours < 10 ? '0' + hours : hours;
        m = minutes < 10 ? '0' + minutes : minutes;
        s = seconds < 10 ? '0' + seconds : seconds;

        timers[i] = true;
        setTimerList(timers);
        setTimerTime(`${h}:${m}:${s}`);
      }
    }
  }

  useEffect(() => {
    const timer = setInterval(getTime, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div
      className={timerList[index] ? 'timer timer_visible' : 'timer'}
    >
      <p className='timer__time'>{timerTime}</p>
      <div className='timer__hourglass'></div>
    </div>
  );
};

export default Timer;