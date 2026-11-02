import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementby5, incrementbyamount } from './Redux/features/CounterSlice'
import { useState } from 'react'

const App = () => {
  // useDispatch() actions ko dispatch karega on a click
  // useSelector() count ki current value ko showcase karega in the UI
  const dispatch = useDispatch()   
  const count = useSelector((state) => state.counter.value)

  const [num, setNum] = useState(5)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}>Increment</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>Decrement</button>

      {/* two way binding */}

      <input type="number" value={num} onChange={(e) => {
        setNum(e.target.value);
      }} />


      <button onClick={() => {
        dispatch(incrementby5())
      }}>Increment By 5</button>
      <button onClick={() => {
        dispatch(incrementbyamount(Number(num)))
      }}>Increment By Amount</button>
    </div>
  )
}

export default App
