import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import './style.css';
import Login from './Components/Login/Login.js';
import NewShop from './Components/Shop/NewShop.js';
import Register from './Components/Register/Register.js';



function App() {
  return (
    <div className="middle">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/" element={<NewShop />} />
        </Routes>
      </BrowserRouter>
    
    </div>
    
);
}
export default App;
