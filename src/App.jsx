import React, { useEffect, useState } from 'react';
import Title from './components/Title/Title';
import PageTrade from './components/PageTrade/PageTrade';
import api from './utils/api';
import { serverUrl, users } from './utils/constants';

function App() {
  const [timerList, setTimerList] = useState(users.map(() => false));
  const [timerTime, setTimerTime] = useState(0);
  console.log(timerTime);

  useEffect(() => {
    api.startTimer(timerList.length)
      .then(() => getTime())
      .catch(err => console.log(`При загрузке таймера произошла ошибка: ${err}`))
  }, [])

  function getTime() {
    let eventSource = new EventSource(`${serverUrl}/timer`);
    eventSource.onmessage = function(evt) {
      const data = JSON.parse(evt.data);
      if(data?.time > 0) {
        timeConversion(data.time, data.oneTime);
      } else {
        setTimerList(users.map(() => false))
        eventSource.close();
      }
    }
  }

  function timeConversion(currentTime, oneTime) {
    const timers = users.map(() => false);
    const amount = timerList.length;

    for(let i=0; i<amount; i++) {
      if(currentTime <= oneTime * (amount - i) && currentTime > oneTime * (amount - (i+1))) {
        const time = currentTime - (oneTime * (timerList.length - (i+1)));
        let hours = Math.floor(time/60/60/1000) % 24;
        hours = hours < 10 ? `0${hours}` : hours;
        let minutes = Math.floor(time/60/1000) % 60;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        let seconds = Math.floor(time/1000) % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        timers[i] = true;
        setTimerList(timers);
        setTimerTime(`${hours}:${minutes}:${seconds}`);
      }
    }
  }

  return (
    <div className="app">
      <Title />
      <PageTrade time={timerTime} timerList={timerList}/>
    </div>
  );
}

export default App;
