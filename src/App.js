import { useState } from "react";
import { Stopwatch } from "./modules/Stopwatch";

function App() {
  const [miliseconds, setMiliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  // const [time, setTime] = useState(0);

  return (
    <div>
      <Stopwatch
        miliseconds={miliseconds}
        setMiliseconds={setMiliseconds}
        seconds={seconds}
        setSeconds={setSeconds}
        minutes={minutes}
        setMinutes={setMinutes}
      />
    </div>
  );
}

export default App;
