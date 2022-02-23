import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

// import components
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js';
import Order from './Pages/Order/Order.js'
import OrderList from './Pages/Order/OrderList.js'
import Payment from './Pages/Order/Payment/Payment.js'
import ConfirmOrder from './Pages/Order/ConfirmOrder/ConfirmOrder.js'
import CreateOrder from './Pages/Order/CreateOrder.js'
import AddMenu from './Pages/Order/AddMenu.js'
import NavBar from './Components/NavBar/NavBar.js'
import NewShop from './Pages/Shop/NewShop.js';
import StockPage from './Pages/Stock/StockPage.js';
import Other from './Pages/Other/Other.js';
import Dashboard from './Pages/Dashboard/Dashboard';
import LandingPage from './Pages/LandingPage/LandingPage.js';
import ShopSelect from './Pages/Shop/ShopSelect.js';
import Inbox from './Pages/Inbox/inbox.js'
import InviteBox from './Pages/Inbox/InviteBox.js'
import Shopselect from './Pages/Shop/ShopSelect.js';
import Invite from './Pages/Other/Invite.js';
import AddStock from './Pages/Stock/AddStock.js';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/orderlist" element={<OrderList />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/confirmorder" element={<ConfirmOrder />} />
          <Route exact path="/createorder" element={<CreateOrder />} />
          <Route exact path="/addmenu" element={<AddMenu />} />
          <Route exact path="/stock" element={<StockPage />} />
          <Route exact path="/newshop" element={<NewShop />} />
          <Route exact path="/other" element={<Other />} />
          <Route exact path="/navBar" element={<NavBar />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/landing" element={<LandingPage />} />
          <Route exact path='/shopselect' element={<ShopSelect />} />
          <Route exact path='/inbox' element={<Inbox />} />
          <Route exact path='/invitebox' element={<InviteBox />} />
          <Route exact path='/shopselect' element={<Shopselect />} />
          <Route exact path='/invite' element={<Invite />} />
          <Route exact path='/addstock' element={<AddStock />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
