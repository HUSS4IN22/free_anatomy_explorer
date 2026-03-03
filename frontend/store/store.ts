import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0 }

const firstSlice = createSlice({
  name: 'first',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
  }
})


const secondSlice = createSlice({
  name: "second",
  initialState: { isActive: false },
  reducers: {
    toggleActive(state) {
      !state.isActive
    }
  }
})


export const store = configureStore({
  reducer: {
    counter: firstSlice.reducer,
    activity: secondSlice.reducer
  }
})
