import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const Alert = ({ time, setIsActive, userTime }) => {
  let messageRef = useRef();

  useEffect(() => {
    if (time > 0 && userTime > 0) {
      if (time === userTime) {
        messageRef.current.innerHTML = "Time Reached";
        // messageRef.current.innerHTML = message;
        setIsActive(false);
      }
    }
  }, [time, setIsActive, userTime]);

  if ((time === 0) & (userTime === 0)) {
    return <></>;
  }

  if (time === userTime) {
    return (
      <>
        <p className={styles.message} ref={messageRef}></p>
      </>
    );
  }
};

export { Alert };
