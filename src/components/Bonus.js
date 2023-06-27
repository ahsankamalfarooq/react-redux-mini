import React from 'react'
import { useState } from 'react'

const Bonus = () => {
  const [bonus, setBonus] = useState({points:0})
  const increment = ()=> {
    setBonus({points: bonus.points+1})
  }

  return (
    <div className='card'>
        <div className="container">
        <h2>
                <b>Bonus Component</b>
            </h2>
            <h3>Bonus Points:{bonus.points}</h3>
            <button onClick={increment}>Increment +</button>
        </div>
    </div>
  )
}

export default Bonus
