import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // Not increase the value greater than 20
    counter >= 20 ? alert("Limit 20") : setCounter(counter + 1)
  }

  const removeValue = () => {
    counter <= 0 ? alert("Don't decrease the value negative") : setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >
        Add Value
      </button>
      <br />
      <button
        onClick={removeValue}
      >
        Remove Value
      </button>
    </>
  )
}

export default App
