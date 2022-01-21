import '../style.css';
import './Login.css';

function Login() {
    return (
        <div className="middle">
            <img src="assets/logo/logo.png" className="logo" />
            <p className="light">Make your resturant easier</p>   
            <input className="ma-29" type='text' name='Username' />
            <input className="ma-29" type='text' next='Passward' />
            <div class="mt-64">
            <button class="button2">Log in!</button>
            </div>
            <div className="mt-34">
            <p>Or no have User ID? Register new one!</p>
            </div>
        </div>
    );
}

export default Login;