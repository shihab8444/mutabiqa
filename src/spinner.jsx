import React from 'react'
import DotLoader from 'react-spinners/DotLoader'
import './spinner.css'
function spinner() {
  return (
    <div className='spinner'>
      <DotLoader color='cyan' size={150} speedMultiplier={2} />
    </div>
  )
}

export default spinner
