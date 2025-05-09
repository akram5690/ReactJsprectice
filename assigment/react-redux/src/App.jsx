import React from 'react';
import Counter from './features/counter/Counter';
import Addtodo from './features/counter/Addtodo';
import Crudapplication from './features/counter/Crudapplication';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigationbar from './features/counter/Navigationbar';

const App = () => {
  return (
    <>
    <Router>
    <Navigationbar />
      <Routes>
        <Route element={<Counter />} path='/counter'></Route>
        <Route element={<Addtodo />} path='/Addtodo'></Route>
        <Route element={<Crudapplication />} path='/Crudapplication'></Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;
