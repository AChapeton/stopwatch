import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (isActive) {
        setSeconds((current) => current + 1);
      }
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  const onStartCount = () => {
    setIsActive(true);
  };

  const onStopCount = () => {
    setIsActive(false);
  };

  return (
    <div>
      <p ref={intervalRef}>Seconds: {seconds}</p>
      <span>00:</span>
      <span>00:</span>
      <span>00</span>
      <button onClick={onStartCount}>Start</button>
      <button onClick={onStopCount}>Stop</button>
    </div>
  );
};

export { Stopwatch };
