import { useRef } from "react";
import styles from "./styles.module.css";

const Form = ({ setUserTime, setIsActive }) => {
  // 1. Obtener los valores por ref en cada input
  const hoursRef = useRef();
  const minutesRef = useRef();
  const secondsRef = useRef();

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let secondsToMs = 0;
  let minutesToMs = 0;
  let hoursToMs = 0;
  let totalMs = 0;

  const onSetTime = () => {
    hours = parseInt(hoursRef.current.value);
    minutes = parseInt(minutesRef.current.value);
    seconds = parseInt(secondsRef.current.value);
    // 2. Cambiar todos los valores a su valor en milisegundos
    secondsToMs = seconds * 1000;
    minutesToMs = minutes * 60000;
    hoursToMs = hours * 3600000;
    // 3. Sumar todos los valores de milisegundos
    totalMs = secondsToMs + minutesToMs + hoursToMs;
    console.log(totalMs);
    // 4. Guardar en un estado global
    setUserTime(totalMs);
    // 5. Clean Inputs;
  };

  return (
    <>
      <label className={styles.label}>Hours</label>
      <input className={styles.input} ref={hoursRef} type="number" />
      <label className={styles.label}>Minutes</label>
      <input className={styles.input} ref={minutesRef} type="number" />
      <label className={styles.label}>Seconds</label>
      <input className={styles.input} ref={secondsRef} type="number" />
      <button className={styles.button} onClick={onSetTime}>
        Set Time
      </button>
    </>
  );
};

export { Form };
