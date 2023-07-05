import React from 'react'
import { incrementBonus } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const Bonus = () => {

  const points = useSelector(state=>state.bonus.points)
  const amount = useSelector(state=>state.account.amount)
  const dispatch = useDispatch()


  return (
    <div className='card'>
        <div className="container">
        <h2>
                <b>Bonus Component</b>
            </h2>
            <h3>Total Amount:${amount}</h3>
            <h3>TOtal Points:${points}</h3>
            <button onClick={()=>dispatch(incrementBonus())}>Increment +</button>
        </div>
    </div>
  )
}

export default Bonus