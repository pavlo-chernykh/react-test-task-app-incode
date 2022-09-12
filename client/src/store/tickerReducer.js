import { createSlice } from '@reduxjs/toolkit';

const tickerSlice = createSlice({
  name: 'tickerSlice',
  initialState: {
    tickers: [],
    interval: 5
  },
  reducers: {
    addTickers: (state, {payload}) => {
      state.tickers = payload;
    },
    setRefreshInterval: (state, {payload}) => {
      state.interval = payload;
    }
  }
})


export const { addTickers, setRefreshInterval } = tickerSlice.actions;
export default tickerSlice.reducer;