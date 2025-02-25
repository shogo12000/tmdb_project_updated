import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, setBannerData } from './movieSlice'

export function Counter() {
  const count = useSelector((state) => state.counterx.value)
  const dispatch = useDispatch()

  
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          IncrementByAmount
        </button>
        <button
          aria-label="adiciona"
          onClick={() => dispatch(setBannerData(["abc"]))}
        >
          adicionar
        </button>
      </div>
    </div>
  )
}