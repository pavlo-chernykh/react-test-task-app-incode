import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import { useSelector } from 'react-redux'
import { getInterval } from '../store/selectors'


const SERVER_URL = "http://localhost:4000"

export const useSocket = () => {
  const intervalTime = useSelector(getInterval)
  const [quotes, setQuotes] = useState([])
  const socketRef = useRef(null)

  useEffect(() => {
    socketRef.current = io(SERVER_URL)
    socketRef.current.emit('start')
    
    socketRef.current.emit("setInterval", intervalTime);

    socketRef.current.on('ticker', (tickers) => {
      setQuotes(tickers);
    })
    return () => {
      socketRef.current.disconnect()
    }
  }, [intervalTime])

  return {
    quotes
  }
}