
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from '../../hooks/useSocket';
import { addTickers, setRefreshInterval } from '../../store/tickerReducer';
import Ticker from '../Ticker/Ticker';
import { getInterval, getTicker } from '../../store/selectors';
import React, { useState } from 'react';

const TickersData = () => {
  let {quotes} = useSocket()
  const [interval, setNewInterval] = useState('');
  const dispatch = useDispatch();
 
  const buttonClass = 'bg-blue-500 hover:bg-blue-400 text-sm max-w-xs text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2'

  const tickers = useSelector(getTicker);
  const intervalTime = useSelector(getInterval)

  const content = quotes.map((item, index) => {
    return (
      <Ticker
        key={index}
        {...item}
      />
    )
  })
  const contentHeader = quotes.map((item, index) => {
    const numberColor = (item.yield > 0 ? 'text-green-600' : 'text-red-600')
    return (
      <div key={index}> 
        <div className='heading-item m-2'>
          <div>{ item.ticker }</div>
          <div>
              <div className={numberColor}>{item.dividend}%</div>
              <div className={numberColor}>{ item.yield }</div>
          </div>
        </div>
      </div>
    )
  })
  const addAllHandler = () => {
    dispatch(addTickers(quotes))
  }
  const deleteAllHandler = () => {
    dispatch(addTickers([]))
  }
  const setNewIntervalHandler = (e) => {
    if ((e.key === "Enter" || e.key === "Tab") && interval.trim()) {
      if (interval > 0) {
        setTimeout(() => {
          dispatch(setRefreshInterval(intervalTime));
        }, 100);
        e.preventDefault();
        dispatch(setRefreshInterval(interval));
        setNewInterval('');        
      } else {
        alert('Interval should be a positive natural number')
      }
    }
  };
  // const setDefaultHandler = () => {
  //   setTimeout(() => {
  //     dispatch(setRefreshInterval(intervalTime));
  //   }, 100);
  // }
  return (
    <>
      {tickers.length === 0 && <button className={buttonClass} onClick={addAllHandler}>Off Tickers</button>}
      {tickers.length !== 0 && <button data-testid='test' className={buttonClass} onClick={deleteAllHandler}>On Tickers</button>}
      {tickers.length === 0 && <input
        value={interval}
        className={`${buttonClass} input_btn`}
        placeholder="Set New Interval (seconds)"
        onChange={(e) => setNewInterval(e.target.value)}
        onKeyDown={setNewIntervalHandler}
        type='number'
        aria-label="intervalInput"
        
      /> }
      {/* {tickers.length === 0 && <button className={buttonClass} onClick={setDefaultHandler}>Apply Changes</button>} */}
      {tickers.length === 0 && <div className="heading-block max-w-3xl">
        {contentHeader}
      </div>}
      <div className="ticker-block max-w-3xl">
        {tickers.length === 0 && content}
      </div>      
    </>
  )
}

export default TickersData