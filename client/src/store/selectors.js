import { createSelector } from '@reduxjs/toolkit'

export const getTicker = createSelector(
  state => state?.ticker,
  ticker => ticker?.tickers || []
)

export const getInterval = createSelector(
  state => state?.ticker,
  ticker => ticker?.interval || 5
)