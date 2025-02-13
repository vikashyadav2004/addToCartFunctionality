"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../reducer/counterSlice'  

export function Counter() {
  const count = useSelector(state => state.counter.value)
  
  const dispatch = useDispatch()  
  
  return (
    <div>
      <div>
        <button
         className='border rounded p-2'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button> 
        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by 2
        </button>{" "} */}        
        {" "}<span>{count}</span>{" "}
        <button
        className='border rounded p-2'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        
      </div> 
    </div>
  )
}