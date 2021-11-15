/**
 * importing redux tools from redux toolkits
 * @author:Sai Karthik
 * @author:Siva Kumar
 * 
 * 
 */



import { createSlice } from '@reduxjs/toolkit';



/**
 * @description:This counterSlice is a reducer arguement with the initial state by creating reducer functions.
 * For a slice name it automatcially generates action creators and types that respond to reducers and state.
 * @
 */

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            state.value = state.value - action.payload
        }
    }
})


export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions // Action creators are generated for each case reducer function


export const decrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(decrementByAmount(amount));
    }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;



export default counterSlice.reducer;
// export default slice.reducer