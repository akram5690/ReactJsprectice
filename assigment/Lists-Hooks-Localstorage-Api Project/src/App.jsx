import './App.css'
import Addtocard from './product/Addtocard'
import Navigationbar from './product/navigationbar'
import Product from './product/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Navigationbar />
      <Routes>
        <Route element={<Product />} path='/'></Route>
        <Route element={<Addtocard />} path='/Addtocard'></Route>
      </Routes>
    </Router>     
      
    </>
  )
}

export default App
