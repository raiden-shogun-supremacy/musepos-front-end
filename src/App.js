import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

// import components
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js';
import Order from './Pages/Order/Order.js'
import CreatOrder from './Pages/Order/CreatOrder.js'
import NewOrder from './Pages/Order/NewOrder.js'
import NavBar from './Components/NavBar/NavBar.js'
import NewShop from './Pages/Shop/NewShop.js';
import StockPage from './Pages/Stock/StockPage.js';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/creatorder" element={<CreatOrder />} />
          <Route exact path="/neworder" element={<NewOrder />} />
          <Route exact path="/stock" element={<StockPage />} />
          <Route exact path="/newshop" element={<NewShop />} />
          <Route exact path="/navBar" element={<NavBar />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
