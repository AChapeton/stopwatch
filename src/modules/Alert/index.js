import { useEffect, useRef } from "react";

const Alert = ({ time, setIsActive }) => {
  let messageRef = useRef();

  useEffect(() => {
    if (time === 1000) {
      messageRef.current.innerHTML = "Alert!!!";
      setIsActive(false);
    }
  }, [time, setIsActive]);

  if (time === 1000) {
    return <p ref={messageRef}></p>;
  }
  // return <p ref={messageRef}></p>;
};

export { Alert };
