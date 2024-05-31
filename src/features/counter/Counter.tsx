import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Counter.module.css";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from "./counterSlice";

export default function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <h1 className={styles.title}>Counter</h1>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.input}
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
