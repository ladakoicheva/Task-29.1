import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { INCREMENT ,DECREMENT} from './store/actions';

function App() {
 const dispatch = useDispatch();
  const value = useSelector((state) => state.counter);
  const incr = () => dispatch({ type: INCREMENT });
  const decr = () => dispatch({ type: DECREMENT });
  return (
    <>
      <h1>Counter</h1>
      <div>value : {value}
        <button onClick = {incr}>+</button> <button onClick={decr}>-</button>
      </div>
    </>

  )
}

export default App
