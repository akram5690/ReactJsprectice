import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Componets/Homesec/Home'
import About from './Componets/Aboutesec/About'
import Gellary from './Componets/Gallerysec/Gellary'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Gallery' element={<Gellary />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
