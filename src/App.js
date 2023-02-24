import { useState } from "react";
import { Stopwatch } from "./modules/Stopwatch";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  // const [time, setTime] = useState(0);

  return (
    <div>
      <Stopwatch
        seconds={seconds}
        setSeconds={setSeconds}
        minutes={minutes}
        setMinutes={setMinutes}
        hours={hours}
        setHours={setHours}
      />
    </div>
  );
}

export default App;
