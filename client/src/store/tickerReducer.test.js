import reducer, { addTickers, setRefreshInterval } from "./tickerReducer"
//npm test tickerReducer.test.js

describe('tickerReducer', () => {
  test('work with initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({"interval": 5, "tickers": []})
  })

  test('should handle tickers being added to an empty list', () => {
    const previousState = {}
    expect(reducer(previousState, addTickers(
      [{ticker: 'AAPL', exchange: 'NASDAQ'},{ticker: 'GOOGL', exchange: 'NASDAQ'}])))
      .toEqual({"tickers": [{"exchange": "NASDAQ", "ticker": "AAPL"}, {"exchange": "NASDAQ", "ticker": "GOOGL"}]})
  })

  test('should handle to set refresh interval', () => {
    const previousState = {'interval': 5}
    expect(reducer(previousState, setRefreshInterval(2))).toEqual({"interval": 2})
  })
})