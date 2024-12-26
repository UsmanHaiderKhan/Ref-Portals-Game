import { useState } from "react";
export default function TimerChallange({ title, targetTime }) {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  function handleClick() {

    setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>Time is up!</p>}
      <p className="chanllenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleClick}>
         
          {timerStarted ? "Stop" : "Start"}Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active': undefined}>
        {timerStarted ? "Time is runnning ..." : "Timer Inactive"}
      </p>
    </section>
  );
}
