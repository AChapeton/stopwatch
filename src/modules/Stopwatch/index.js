import { useEffect, useRef } from "react";

const Stopwatch = ({ time, setTime, isActive, setIsActive }) => {
  const intervalRef = useRef();

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTime((current) => current + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isActive, setTime]);

  const onHandleTime = () => {
    setIsActive(true);
  };

  const onHandleRestart = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div>
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
