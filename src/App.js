import { useState } from "react";
import { Stopwatch } from "./modules/Stopwatch";
import { Alert } from "./modules/Alert";
import { Form } from "./modules/Form";
import styles from "./styles.module.css";

function App() {
  const [time, setTime] = useState(0);
  const [userTime, setUserTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      <Stopwatch
        time={time}
        setTime={setTime}
        setUserTime={setUserTime}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Alert time={time} setIsActive={setIsActive} userTime={userTime} />
      <Form setUserTime={setUserTime} setIsActive={setIsActive} />
    </div>
  );
}

export default App;
