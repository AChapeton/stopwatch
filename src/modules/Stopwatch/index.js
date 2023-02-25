import { useStopWatch } from "../../hooks/useStopWatch";
import styles from "./styles.module.css";

const Stopwatch = ({ time, setTime, isActive, setIsActive, setUserTime }) => {
  const { buttonText, onHandleTime, onHandleRestart } = useStopWatch({
    time,
    setTime,
    isActive,
    setIsActive,
    setUserTime,
  });

  return (
    <>
      <div className={styles.timerContainer}>
        <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button className={styles.button} onClick={onHandleTime}>
          {buttonText}
        </button>
        <button className={styles.button} onClick={onHandleRestart}>
          Restart
        </button>
      </div>
    </>
  );
};

export { Stopwatch };
