/**
 * importing required npm modules
 * importing redux tools from redux toolkits
 * @author:Sai Karthik
 * @author:Siva Kumar
 */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementAsync,
  selectCount,
} from "./counterSlice";
import styles from "./Struct.module.css";

/**
 * @description:Selector function acts as an argument then it is called with store state.
 * Dispatch is hook to acess the redux store  and returns to redux store dispatch function
 * @param selector — the selector function
 * @returns jsx element
 */

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(""); // Returns a stateful value, and a function to update it.
  const [decrementAmount, setDecrementAmount] = useState("");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
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
        <input
          className={styles.textbox}
          aria-label="Set decrement amount"
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(e.target.value)}
        />
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(decrementAsync(Number(decrementAmount) || 0))}
        >
          Minus Amount
        </button>
      </div>
    </div>
  );
}
