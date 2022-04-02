import {useSelector, useDispatch} from 'react-redux'
import { action } from './store/Index';
import './App.css';

function App() {
  const counter = useSelector( (store) => store.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(action.increment())
  }

  const decrement = () => {
    dispatch(action.decrement())
  }

  const addBy = () => {
    dispatch(action.AddBy(10))
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>addBy 100</button>
    </div>
  );
}

export default App;
