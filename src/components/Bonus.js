import React from 'react'
import { useState } from 'react'

const Bonus = () => {
  const [points, setPoints] = useState({value:0})
  const increment = ()=> {
    setPoints({value: points.value+1})
  }

  return (
    <div className='card'>
        <div className="container">
          
        </div>
    </div>
  )
}

export default Bonus
