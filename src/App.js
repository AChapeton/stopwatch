import { useState } from "react";
import { Stopwatch } from "./modules/Stopwatch";
import { Alert } from "./modules/Alert";
import { Form } from "./modules/Form";

function App() {
  const [time, setTime] = useState(0);
  const [userTime, setUserTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Alert time={time} setIsActive={setIsActive} userTime={userTime} />
      <Stopwatch
        time={time}
        setTime={setTime}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Form setUserTime={setUserTime} setIsActive={setIsActive} />
    </div>
  );
}

export default App;
