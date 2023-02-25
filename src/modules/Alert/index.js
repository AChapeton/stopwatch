import { useEffect, useRef } from "react";

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
        <p ref={messageRef}></p>
      </>
    );
  }
};

export { Alert };
