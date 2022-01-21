import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

// import components
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Order from './Components/Order/Order.js'
import NavBar from './Components/NavBar/NavBar.js'
import NewShop from './Components/Shop/NewShop.js';
import StockPage from './Components/Stock/StockPage.js';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/stock" element={<StockPage />} />

          <Route exact path="/newshop" element={<NewShop />} />
          <Route exact path="/navBar" element={<NavBar />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
