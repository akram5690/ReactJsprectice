
import './App.css'
import Adminlog from './component/employee/Adminlog'
import Empdata from './component/employee/Empdata'
import Home from './component/Home'
import Loginpage from './component/Loginpage'
import Register from './component/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <> 
    <Router>
      <Routes>
        <Route element={<Loginpage />} path='/' ></Route>
        <Route element={<Adminlog />} path='/Adminlog' ></Route>
        <Route element={<Register />} path='/Register' ></Route>
        <Route element={<Home />} path='/Home'></Route>
        <Route element={<Empdata />} path='/Empdata'></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
