import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './componetnt/main/Home'
import Register from './componetnt/register and login/Regestar'
import Login from './componetnt/register and login/Login'
import Navigationbar from './componetnt/main/Navigationbar'
import Bookingpage from './componetnt/main/Bookingpage'
import Selecttheter from './componetnt/main/Selecttheter'
import Selectseats from './componetnt/main/Selectseats'
import ReceiptPage from './componetnt/main/Reciptpage'
import Addmovies from './componetnt/admin/Addmovies'
import Protectrouts from './componetnt/protect/protectrouts'

function App() {

  return (
    <>
   <Router>
    <Navigationbar />
    <Routes>
      <Route element={<Home />} path='/'></Route>
      <Route element={<Register />} path='/Regestar'></Route>
      <Route element={<Login />} path='/Login'></Route>

      <Route element={<Protectrouts />} path='/Bookingpage'>
      <Route element={<Bookingpage />} path='/Bookingpage'></Route>
      </Route>
      
      <Route element={<Protectrouts />} path='/Selecttheter'>
      <Route element={<Selecttheter />} path='/Selecttheter'></Route>
      </Route>

      <Route element={<Protectrouts />} path='/Selectseats'>
      <Route element={<Selectseats />} path='/Selectseats'></Route>
      </Route>

      <Route element={<Protectrouts />} path='/ReceiptPage'>
      <Route element={<ReceiptPage />} path='/ReceiptPage'></Route>
      </Route>

      <Route element={<Protectrouts />} path='/Addmovies'>
      <Route element={<Addmovies />} path='/Addmovies'></Route>
      </Route>

    </Routes>
   </Router>
    </>
  )
}

export default App
