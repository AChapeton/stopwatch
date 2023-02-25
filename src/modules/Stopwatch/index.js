import { useState, useEffect, useRef } from "react";
import { Alert } from "../Alert";

const Stopwatch = ({
  miliseconds,
  setMiliseconds,
  seconds,
  setSeconds,
  minutes,
  setMinutes,
}) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Start");

  const milisecondsRef = useRef();
  const secondsRef = useRef();
  const minutesRef = useRef();
  const intervalRef = useRef();

  // useEffect(() => {
  //   milisecondsRef.current = setInterval(() => {
  //     if (isActive) {
  //       setMiliseconds((current) => current + 1);
  //       if (miliseconds >= 99) {
  //         setMiliseconds((current) => (current = 0));
  //         setSeconds((current) => current + 1);
  //         if (seconds >= 59) {
  //           setMiliseconds((current) => (current = 0));
  //           setSeconds((current) => (current = 0));
  //           setMinutes((current) => current + 1);
  //         }
  //       }
  //     }
  //   }, 10);
  //   return () => clearInterval(milisecondsRef.current);
  // }, [isActive, miliseconds, seconds, setMiliseconds, setSeconds, setMinutes]);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTime((current) => current + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isActive]);

  const onHandleTime = () => {
    setIsActive(true);
  };

  // const onStartCount = () => {
  //   if (isActive) {
  //     if (miliseconds === 0 && seconds === 0 && minutes === 0) {
  //       setButtonText("Start");
  //       setIsActive(false);
  //     } else {
  //       setButtonText("Continue");
  //       setIsActive(false);
  //     }
  //   } else {
  //     setButtonText("Stop");
  //     setIsActive(true);
  //   }
  // };

  const onHandleRestart = () => {
    setIsActive(false);
    setTime(0);
    // setMiliseconds(0);
    // setSeconds(0);
    // setMinutes(0);
    // onStartCount();
  };

  return (
    <div>
      <Alert time={time} setIsActive={setIsActive} />
      <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      <button onClick={onHandleTime}>Start</button>
      <button onClick={() => setIsActive(false)}>Pause</button>
      <button onClick={onHandleRestart}>Restart</button>
    </div>
  );
};

export { Stopwatch };
