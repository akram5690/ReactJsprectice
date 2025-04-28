import './App.css';
import Login from './employeedata/Login';
import Register from './employeedata/Register';
import Navigation from './employeedata/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employee from './employeedata/admin/employee';
import Updatedata from './employeedata/admin/Updatedata';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Employee" element={<Employee />} />
        <Route path="/Updatedata" element={<Updatedata />} />
      </Routes>
    </Router>
  );
}

export default App;
