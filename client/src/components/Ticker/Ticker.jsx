import { useRef } from "react"

const Ticker = ({price, change, ticker, exchange, change_percent, last_trade_time}) => {
  const tickerDivRef = useRef(null)
  const changeNum = (price - change).toFixed(2)
  const numberColor = (changeNum > 0 ? 'text-green-600 p-3' : 'text-red-600 p-3')
  const buttonStyle = 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-6 px-4 border border-blue-500 hover:border-transparent rounded'
  const hideHandler = (e) => {
    tickerDivRef.current.className = 'hidden'
  }
  return (
    <div> 
      <div ref={tickerDivRef} className='ticker-item bg-white rounded-xl m-2 shadow-lg '>
        <button className={buttonStyle} onClick={hideHandler}>Remove</button>
        <div data-testid="custom-element-ticker" className="text-l font-medium text-black" >{ticker }</div>
        <div data-testid="custom-element-exchange" className="text-l font-medium text-black mr-20" >{ exchange }</div>
        <div data-testid="custom-element-price" >{`${price} `}$</div>
        <div data-testid="custom-element-changeNum" className={numberColor}>{ changeNum }$</div>
        <div data-testid="custom-element-change_percent" className={numberColor}>{`${change_percent} `}%</div>
        <div className="text-xs">{ (new Date ( Date.parse(last_trade_time))).toLocaleTimeString('uk-UA',{day:'numeric', month:'long', year:'numeric', weekday:'long', hour:'2-digit', minute:'2-digit'}) }</div>
      </div>
    </div>
  )
}

export default Ticker