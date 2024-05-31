import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const selectCount = (state: RootState) => state.counter.value;

export const incrementAsync =
    (amount: number): AppThunk =>
        (dispatch) => {
            setTimeout(() => {
                dispatch(incrementByAmount(amount))
            }, 1000)
        }

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer