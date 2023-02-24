import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Start");

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
    if (isActive) {
      setButtonText("Continue");
    } else {
      setButtonText("Stop");
    }
    setIsActive(!isActive);
  };

  return (
    <div>
      <p ref={intervalRef}>Seconds: {seconds}</p>
      <span>00:</span>
      <span>00:</span>
      <span>00</span>
      <button onClick={onStartCount}>{buttonText}</button>
    </div>
  );
};

export { Stopwatch };
