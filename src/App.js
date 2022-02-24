import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

// import components
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js';
import Order from './Pages/Order/Order.js'
import Payment from './Pages/Order/Payment/Payment.js'
import ConfirmOrder from './Pages/Order/ConfirmOrder/ConfirmOrder.js'
import CreateOrder from './Pages/Order/CreateOrder.js'
import AddMenu from './Pages/Order/AddMenu.js'
import NewShop from './Pages/Shop/NewShop.js';
import StockPage from './Pages/Stock/StockPage.js';
import Other from './Pages/Other/Other.js';
import ChangeRole from './Pages/Other/ChangeRole.js';
import Dashboard from './Pages/Dashboard/Dashboard';
import LandingPage from './Pages/LandingPage/LandingPage.js';
import ShopSelect from './Pages/Shop/ShopSelect.js';
import Invite from './Pages/Other/Invite.js';
import AddStock from './Pages/Stock/AddStock.js';
import RemoveMenu from './Pages/Other/RemoveMenu.js';
import Inbox from './Pages/Inbox/Inbox.js';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/confirm-order" element={<ConfirmOrder />} />
          <Route exact path="/create-order" element={<CreateOrder />} />
          <Route exact path="/select-menu/:id" element={<AddMenu />} />
          <Route exact path="/stock" element={<StockPage />} />
          <Route exact path="/create-shop" element={<NewShop />} />
          <Route exact path="/other" element={<Other />} />
          <Route exact path="/change-role" element={<ChangeRole />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/landing/:id" element={<LandingPage />} />
          <Route exact path='/shop' element={<ShopSelect />} />
          <Route exact path='/invite' element={<Invite />} />
          <Route exact path='/inbox' element={<Inbox />} />
          <Route exact path='/create-menu' element={<AddStock />} />
          <Route exact path='/remove-menu' element={<RemoveMenu />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
