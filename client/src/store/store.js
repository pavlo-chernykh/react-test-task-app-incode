import { configureStore } from '@reduxjs/toolkit'
import tickerReducer from './tickerReducer'

export const store = configureStore({
  reducer: {
    ticker: tickerReducer
  }
})