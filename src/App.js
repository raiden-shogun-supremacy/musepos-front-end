import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import './style.css';
import './Components/Login/Login.css';
import './Components/Register/Register.css';
import './Components/Order/Order.css';
import './Components/navigationBar/navigationBar.css';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Order from './Components/Order/Order.js'
import NewShop from './Components/Shop/NewShop';



function App() {
  return (
    <div className="middle">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/NewShop" element={<NewShop />} />
          <Route exact path="/Order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
    
);
}
export default App;
