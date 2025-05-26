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

function App() {

  return (
    <>
   <Router>
    <Navigationbar />
    <Routes>
      <Route element={<Home />} path='/'></Route>
      <Route element={<Bookingpage />} path='/Bookingpage'></Route>
      <Route element={<Register />} path='/Regestar'></Route>
      <Route element={<Login />} path='/Login'></Route>
      <Route element={<Selecttheter />} path='/Selecttheter'></Route>
      <Route element={<Selectseats />} path='/Selectseats'></Route>
      <Route element={<ReceiptPage />} path='/ReceiptPage'></Route>
      <Route element={<Addmovies />} path='/Addmovies'></Route>

    </Routes>
   </Router>
    </>
  )
}

export default App
