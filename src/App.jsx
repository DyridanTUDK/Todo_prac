import { useState } from 'react'
import './App.css'
import InputBar from './components/InputBar'
import TaskBox from './components/TaskBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HEllo</h1>
      <InputBar/>
      {/* <TaskBox/> */}
    </>
  )
}

export default App
