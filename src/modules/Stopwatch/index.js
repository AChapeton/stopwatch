import { useStopWatch } from "../../hooks/useStopWatch";

const Stopwatch = ({ time, setTime, isActive, setIsActive, setUserTime }) => {
  const { buttonText, onHandleTime, onHandleRestart } = useStopWatch({
    time,
    setTime,
    isActive,
    setIsActive,
    setUserTime,
  });

  return (
    <div>
      <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      <button onClick={onHandleTime}>{buttonText}</button>
      <button onClick={onHandleRestart}>Restart</button>
    </div>
  );
};

export { Stopwatch };
