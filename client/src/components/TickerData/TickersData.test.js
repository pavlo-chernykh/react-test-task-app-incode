import { render as rtlRender, fireEvent, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from "../../store/store";
import TickersData from "./TickersData";


const render = component => rtlRender(
  <Provider store={store} >
    {component}
  </Provider>
)

describe('TickerData rendering component', () => {
  it('renders tickers off button', () => {
    render(
      <TickersData/>
    )
    expect(screen.getByText(/Off Tickers/i)).toBeInTheDocument()
  })
  it('on tickers button is not displaying initially', () => {
    render(
      <TickersData/>
    )
    expect(screen.queryByTestId('test')).not.toBeInTheDocument()
  })
  it('renders without placeholder', () => {
    render(
      <TickersData/>
    )
    expect(screen.getByPlaceholderText(/Set New Interval/i)).toBeInTheDocument()
  })
})
describe('Interval Input Test', () => {
  const setup = () => {
    const utils = render(<TickersData />)
    const input = utils.getByLabelText('intervalInput')
    return {
      input,
      ...utils,
    }
  }
  test('input to be in the document', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: 23}})
    expect(input).toBeInTheDocument()
  })
  test('pass value from input to state', () => {
    const {input} = setup()
    fireEvent.change(input, {target: {value: 23}})
    expect(input.value).toBe('23')
  })
  test('input has correct className', () => {
    const {input} = setup()
    expect(input).toHaveClass('input_btn')
  })
})

