import './App.css'
import Addtocard from './product/Addtocard'
import Navigationbar from './product/navigationbar'
import Product from './product/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './userlogin/login'
import Register from './userlogin/Register'
import Protectrouts from './product/protectrouts'

function App() {

  return (
    <>
    <Router>
      <Navigationbar />
      <Routes>
        <Route element={<Product />} path='/'></Route>

        <Route element={<Protectrouts/>} path="Addtocard">
        <Route element={<Addtocard />} path='/Addtocard'></Route>
        </Route>

        <Route element={<Login />} path='/Login'></Route>
        <Route element={<Register />} path='/Register'></Route>
      </Routes>
    </Router>     
      
    </>
  )
}

export default App
