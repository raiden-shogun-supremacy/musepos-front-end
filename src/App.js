import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import './style.css';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Order from './Components/Order/Order.js'
import NavBar from './Components/NavBar/NavBar.js'
import NewShop from './Components/Shop/NewShop.js';
import Stock from './Components/Stock/Stock.js';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/NewShop" element={<NewShop />} />
          <Route exact path="/Order" element={<Order />} />
          <Route exact path="/Stock" element={<Stock />} />
          <Route exact path="/NavBar" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </div>

);
}
export default App;
