import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Start");

  const secondsRef = useRef();
  const minutesRef = useRef();
  const hoursRef = useRef();

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
    }, 50);
    return () => clearInterval(secondsRef.current);
  }, [isActive, seconds, minutes]);

  const onStartCount = () => {
    if (isActive) {
      setButtonText("Continue");
    } else {
      setButtonText("Stop");
    }
    setIsActive(!isActive);
  };

  const onRestartCount = () => {
    setIsActive(false);
    onStartCount();
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <div>
      <span ref={hoursRef}>{hours < 10 ? `0${hours}` : hours}:</span>
      <span ref={minutesRef}>{minutes < 10 ? `0${minutes}` : minutes}:</span>
      <span ref={secondsRef}>{seconds < 10 ? `0${seconds}` : seconds}</span>
      <button onClick={onStartCount}>{buttonText}</button>
      <button onClick={onRestartCount}>Restart</button>
    </div>
  );
};

export { Stopwatch };
