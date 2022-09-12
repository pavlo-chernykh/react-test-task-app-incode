import { getTicker, getInterval } from "./selectors";

describe('getTicker', () => {
  test('work with initial state', () => {
    expect(getTicker({})).toEqual([])
  })

  test('work with filled state', () => {
    expect(getTicker({
      ticker: {
        tickers: [{ticker: 'AAPL', exchange: 'NASDAQ', price: '168.22', change: '117.60', change_percent: '0.72'}]
      }
    })).toEqual([{ticker: 'AAPL', exchange: 'NASDAQ', price: '168.22', change: '117.60', change_percent: '0.72'}])
  })
})

describe('getInterval', () => {
  test('work with initial state', () => {
    expect(getInterval({})).toBe(5)
  })
  test('work with filled state', () => {
    expect(getInterval({
      ticker: {
        interval: 2
      }
    })).toBe(2)
  })
})