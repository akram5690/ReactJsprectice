import { useState } from 'react'
import './App.css'
import Loginpage from './component/Loginpage'
import Register from './component/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-clifford">
      Hello world!
    </h1>
    <Router>
      <Routes>
        <Route element={<Loginpage />} path='/' ></Route>
        <Route element={<Register />} path='/Register' ></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
