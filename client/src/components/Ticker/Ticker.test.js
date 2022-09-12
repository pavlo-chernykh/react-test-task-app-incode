import { render as rtlRender, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from "../../store/store";
import Ticker from "./Ticker";

const startingState =  [
  {
    ticker: "AAPL",
    exchange: "NASDAQ",
    price: 204.74,
    change: 78.25,
    change_percent: 0.02,
    dividend: 0.35,
    yield: 0.92,
    last_trade_time: "2022-09-12T10:34:45.000Z",
  },
  {
    ticker: "GOOGL",
    exchange: "NASDAQ",
    price: 284.01,
    change: 198.27,
    change_percent: 0.23,
    dividend: 0.35,
    yield: 0.52,
    last_trade_time: "2022-09-12T10:34:45.000Z",
  },
];
const item = startingState[0]

const render = component => rtlRender(
  <Provider store={store} >
    {component}
  </Provider>
)
describe('Ticker component renders all data correctly', () => { 
  it('renders Ticker name', async () => {
    render(<Ticker {...item} />);
    expect(screen.getByTestId('custom-element-ticker')).toHaveTextContent(startingState[0].ticker);
  })
  it('renders Ticker exchange', async () => {
    render(<Ticker {...item} />);
    expect(screen.getByTestId('custom-element-exchange')).toHaveTextContent(startingState[0].exchange);
  })
  it('renders Ticker price', async () => {
      render(<Ticker {...item} />);
      expect(screen.getByTestId('custom-element-price')).toHaveTextContent(startingState[0].price);
  })
  it('renders Ticker change number', async () => {
    render(<Ticker {...item} />);
    expect(screen.getByTestId('custom-element-changeNum')).toHaveTextContent(
      (startingState[0].price - startingState[0].change).toFixed(2));
  })
  it('renders Ticker change percent', async () => {
    render(<Ticker {...item} />);
    expect(screen.getByTestId('custom-element-change_percent')).toHaveTextContent(startingState[0].change_percent);
  })
})

