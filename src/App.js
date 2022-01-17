import './style.css';
import './Components/Login/Login.css';
import './Components/Register/Register.css';
import './Components/Order/Order.css';
import './Components/navigationBar/navigationBar.css';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Order from './Components/Order/Order.js'
import navigationBar from'./Components/navigationBar/navigationBar.js'

function App() {
  return (
    <div className="middle">
    <Login/>
    {/* <Register/> */}
    {/* <Order/>  */}
    {/* <navigationBar/>  */}
    </div>
    
    
);
}

export default App;
