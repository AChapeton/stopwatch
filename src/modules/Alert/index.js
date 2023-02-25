import { useEffect, useRef } from "react";

const Alert = ({ time, setIsActive, userTime }) => {
  let messageRef = useRef();
  console.log("Time" + time);
  console.log("Usertime" + userTime);

  useEffect(() => {
    if (time > 0 && userTime > 0) {
      if (time === userTime) {
        messageRef.current.innerHTML = "Alert!!!";
        setIsActive(false);
      }
    }
  }, [time, setIsActive, userTime]);

  if (time === userTime) {
    return <p ref={messageRef}></p>;
  }
};

export { Alert };
