import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  // let counter = 5;
  const addValue = () => {
    if(count < 20)
    setCount(count+1);
  }

  const removeValue = () => {
    if(count > 0)
    setCount(count-1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {count}</h2>

      <button onClick={addValue}>Increse Value (+)</button> <br/>
      <button onClick={removeValue}>Decrese Value (-)</button>
    </>
  )
}

export default App
