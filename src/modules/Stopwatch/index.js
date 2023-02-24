import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <p ref={intervalRef}>Seconds: {seconds}</p>
      <span>00:</span>
      <span>00:</span>
      <span>00</span>
    </div>
  );
};

export { Stopwatch };
