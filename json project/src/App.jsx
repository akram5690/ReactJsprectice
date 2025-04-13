import './App.css';
import Navigation from './component/Navigation';
import Addproduct from './component/product seller/Addproduct';
import Login from './component/product seller/Login';
import Register from './component/product seller/Register';
import Protectedrouts from './component/Protectedrouts';
import Shopcard from './component/Shopcard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Shopcard />} />

        <Route element={<Protectedrouts />} path='/Addproduct'>
          <Route path="/Addproduct" element={<Addproduct />} />
        </Route>

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
