import React from 'react'
import spin from'./Spinner.gif'
export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={spin} alt="Loading" />
    </div>
  )
}
