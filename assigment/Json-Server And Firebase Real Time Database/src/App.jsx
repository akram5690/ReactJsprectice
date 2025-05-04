import './App.css'
import Navigationbar from './component/Navigationbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loginpage from './Login/Loginpage'
import Registerpage from './Login/Registerpage'
import Homepage from './component/Homepage'
import Addproduct from './component/Addproduct'
import Addtocard from './component/Addtocard'
import Protectedrouts from './component/protectedrouts'
import Footer from './component/Footer'

function App() {
  

  return (
    <>
    <Router>
    <Navigationbar />
      <Routes>
        <Route element={<Homepage />} path='/'></Route>

        <Route element={<Protectedrouts />} path='Addproduct'>
        <Route element={<Addproduct />} path='/Addproduct'></Route>
        </Route>
        <Route element={<Addtocard />} path='/Addtocard'></Route>
        <Route element={<Loginpage />} path='/Loginpage'></Route>
        <Route element={<Registerpage />} path='/Registerpage'></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
