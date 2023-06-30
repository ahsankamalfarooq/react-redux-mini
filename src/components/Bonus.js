import React from 'react'
import { useState } from 'react'
import { incrementBonus } from '../actions'

const Bonus = (props) => {
  const bonus = props.bonus
  const store = props.store
  // const [bonus, setBonus] = useState({points:0})
  // const increment = ()=> {
  //   setBonus({points: bonus.points+1})
  // }

  return (
    <div className='card'>
        <div className="container">
        <h2>
                <b>Bonus Component</b>
            </h2>
            <h3>Bonus Points:{store.getState().bonus.points}</h3>
            <button onClick={()=>store.dispatch(incrementBonus())}>Increment +</button>
        </div>
    </div>
  )
}

export default Bonus
