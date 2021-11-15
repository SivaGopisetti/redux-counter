/**
 * importing required npm modules
 * importing redux tools from redux toolkits
 */


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    decrementAsync,
    selectCount,
} from './counterSlice';
import styles from './Struct.module.css';

/**
 * @description:
 * A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
This hook takes an optional equality comparison function as the second parameter that allows you to customize the way the selected state is compared to determine whether the component needs to be re-rendered.
If you do not want to have to specify the root state type for whenever you use this hook with an inline selector you can use the TypedUseSelectorHook interface to create a version of this hook that is properly typed for your root state.

@param selector — the selector function

@param equalityFn — the function that will be used to determine equality
 * @returns jsx element
 * 
 */


export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('');
    const [decrementAmount, setDecrementAmount] = useState('')

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
                    onChange={e => setIncrementAmount(e.target.value)}
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
                    onChange={e => setDecrementAmount(e.target.value)}
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
