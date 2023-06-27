import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <h3>Current Amount : </h3>
      <h3>Total Bonus : </h3>

    <Account></Account>
    <Bonus></Bonus>
    </div>
  );
}

export default App;
