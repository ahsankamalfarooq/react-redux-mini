import React, { useState } from 'react'


// const Account = (increment, decrement, incrementByAmount, account) => { why cant this
const Account = (props) => {
    // const [account, setAccount] = useState({amount:0})
    const [value, setValue] = useState(0)
    const account = props.account
    const decrement = props.decrement
    const increment = props.increment
    const incrementByAmount = props.incrementByAmount

    // const increment = ()=> {
    //     setAccount({amount:account.amount+1})
    // }

    // const decrement = ()=> {
    //     setAccount({amount:account.amount-1})
    // }

    // const incrementByAmount = (value)=> {
    //     setAccount({amount:account.amount+value})
    // }
  return (
    <div className='card'>
        <div className="container">
            <h2>
                <b>Account Component</b>
            </h2>
            <h3>Amount:${account.amount}</h3>
            <button onClick={increment}>Increment +</button>
            <button onClick={decrement}>Decrement -</button>
            <input type="text" onChange={(e)=>setValue(+e.target.value)}></input>
            <button onClick={()=>incrementByAmount(value)}>Increment By Amount</button>

        </div>
    </div>
  )
}

export default Account
