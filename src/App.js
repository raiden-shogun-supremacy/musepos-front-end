import './style.css';
import './Components/Login/Login.css';

function App() {
  return (
    <div>
      <div className="middle">
        <img src="..\Aeests\img\logo.png" className="logo" />
        <p className="light">Make your resturant easier</p>
      </div>
      <div className="middle">      
        <input className="ma-29" type='text' name='Username' />
        <input className="ma-29" type='text' next='Passward' />
      </div>
      <div className="middle">
        <div class="mt-64">
          <button class="button2">Log in!</button>
        </div>
        <div className="mt-34">
          <p>Or no have User ID? Register new one!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
