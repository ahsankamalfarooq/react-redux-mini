import { useState } from 'react';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';

function App(props) {
  const store = props.store
  const [account, setAccount] = useState({amount:0})
  const [bonus, setBonus] = useState({points:0})
  const increment = ()=> {
    setAccount({amount:account.amount+1})
}
const decrement = ()=> {
    setAccount({amount:account.amount-1})
}
const incrementByAmount = (value)=> {
    setAccount({amount:account.amount+value})
}

///////////////////////////////////////////////////////////

// const incrementBonus = ()=> {
//   setBonus({points: bonus.points+1})
// }

///////////////////////////////////////////////////////////
  return (
    <div className="App">
      <h1>App</h1>
      <h3>Current Amount : {store.getState().account.amount}</h3>
      <h3>Total Bonus : {store.getState().bonus.points}</h3>

    <Account increment={increment} decrement={decrement} 
    incrementByAmount={incrementByAmount} account={account}></Account>
    <Bonus store={store}></Bonus>
    </div>
  );
}
export default App;
