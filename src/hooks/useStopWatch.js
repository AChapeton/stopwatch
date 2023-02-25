import { useEffect, useRef, useState } from "react";

const useStopWatch = ({
  time,
  setTime,
  isActive,
  setIsActive,
  setUserTime,
}) => {
  const [buttonText, setButtonText] = useState("Start");
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
    if (!isActive) {
      setIsActive(true);
      setButtonText("Pause");
    } else {
      setIsActive(false);
      setButtonText("Start");
    }
  };

  const onHandleRestart = () => {
    setIsActive(false);
    setButtonText("Start");
    setTime(0);
    setUserTime(0);
  };

  return { buttonText, onHandleTime, onHandleRestart };
};

export { useStopWatch };
