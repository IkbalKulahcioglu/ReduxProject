import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MuffinList from './components/MuffinList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <MuffinList/>
    </>
  )
}

export default App
