import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline mb-4">
        Hello world!
      </h1>

      <Card title="Test 1" btnText="Click me" />
      <Card title="Test 2" btnText="Visit me" />
    </>
  )
}

export default App
