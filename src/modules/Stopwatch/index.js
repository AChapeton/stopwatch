import { useState, useEffect, useRef } from "react";
import { Alert } from "../Alert";

const Stopwatch = ({
  seconds,
  setSeconds,
  minutes,
  setMinutes,
  hours,
  setHours,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Start");

  const secondsRef = useRef();
  const minutesRef = useRef();
  const hoursRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    secondsRef.current = setInterval(() => {
      if (isActive) {
        setSeconds((current) => current + 1);
        if (seconds >= 59) {
          setSeconds((current) => (current = 0));
          setMinutes((current) => current + 1);
          if (minutes >= 59) {
            setSeconds((current) => (current = 0));
            setMinutes((current) => (current = 0));
            setHours((current) => current + 1);
          }
        }
      }
    }, 1);
    return () => clearInterval(secondsRef.current);
  }, [isActive, seconds, minutes, setMinutes, setSeconds, setHours]);

  useEffect(() => {
    if (minutes === 3) {
      messageRef.current.innerHTML = "Alert!!!";
    }
  }, [minutes]);

  const onStartCount = () => {
    if (isActive) {
      if (seconds === 0 && minutes === 0 && hours === 0) {
        setButtonText("Start");
        setIsActive(false);
      } else {
        setButtonText("Continue");
        setIsActive(false);
      }
    } else {
      setButtonText("Stop");
      setIsActive(true);
    }
  };

  const onRestartCount = () => {
    setIsActive(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    onStartCount();
  };

  return (
    <div>
      <Alert messageRef={messageRef} />
      <span ref={hoursRef}>{hours < 10 ? `0${hours}` : hours}:</span>
      <span ref={minutesRef}>{minutes < 10 ? `0${minutes}` : minutes}:</span>
      <span ref={secondsRef}>{seconds < 10 ? `0${seconds}` : seconds}</span>
      <button onClick={onStartCount}>{buttonText}</button>
      <button onClick={onRestartCount}>Restart</button>
    </div>
  );
};

export { Stopwatch };
