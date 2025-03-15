import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  
  const [timeRemainig, setTimeRemanining]=useState(targetTime*1000);
  const isTimerActive = timeRemainig > 0 && timeRemainig <= targetTime * 1000;

  if(timeRemainig <= 0) {
     clearInterval(timer.current);
     dialog.current.open();
  }

  function handleReset() {
    setTimeRemanining(targetTime * 1000);
  }

  function handleStart() {

   timer.current = setInterval(() => {

    setTimeRemanining (prevTimeRemaining => prevTimeRemaining - 10);
      
    }, 10);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current); 
  }

  return (
    <>
   <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemainig} onReset={handleReset} />
    <section className="challenge">
      <h2>{title}</h2>
      {/* {isTimerActive && <p>Time is up!</p>} */}
      <p className="chanllenge-time">
        {targetTime} second{targetTime > 1 ? "s" : " "}
      </p>
      <p>
        <button onClick={isTimerActive ? handleStop : handleStart}>
          {isTimerActive ? "Stop" : "Start"}Challenge
        </button>
      </p>
      <p className={isTimerActive ? 'active': undefined}>
        {isTimerActive ? "Time is runnning ..." : "Timer Inactive"}
      </p>
    </section>
    </>
  );
}
