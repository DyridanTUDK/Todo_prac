import { useState } from 'react'
import './App.css'
import InputBar from './components/InputBar'
import TaskBox from './components/TaskBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl text-center bg-slate-400 text-white font-bold py-2'>Todo App</h1>
      <InputBar/>
      {/* <TaskBox/> */}
    </>
  )
}

export default App
