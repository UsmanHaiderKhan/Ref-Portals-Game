import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeExpired, setTimeExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);



  function handleStart() {

   timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
 
    setTimerStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.current); 
 
  }

  return (
    <>
   {<ResultModal ref={dialog} result="failed" targetTime={targetTime} />}
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>Time is up!</p>}
      <p className="chanllenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"}Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active': undefined}>
        {timerStarted ? "Time is runnning ..." : "Timer Inactive"}
      </p>
    </section>
    </>
  );
}
