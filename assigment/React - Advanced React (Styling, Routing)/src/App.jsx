
import './App.css';
import Navigationbar from './component/Navigationbar';
import Discountcart from './component/Discountcart';
import Card from './component/Card';
import Footer from './component/footer';
import Homepage from './component/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/About';


function App() {
  return (
    <>
    <Router>
      <Navigationbar />
      <Routes>
        <Route element={<Homepage />} path="/"></Route>
        <Route element={<About />} path="/About"></Route>
        <Route element={<Discountcart />} path="/Discountcart"></Route>
        <Route element={<Card />} path="/Card"></Route>
      </Routes>
      <Footer />
    </Router>
      
      
      
    </>
  );
}

export default App;
