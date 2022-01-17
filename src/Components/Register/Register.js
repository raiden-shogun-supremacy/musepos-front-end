import '../src/style.css';
import './src/Components/Register/Register.css';

function Register() {
    return (
        <div>
           
           <h1 className='Re'> Register</h1> 
           <h5>
            <div>
                <p className="Le">Let's earn money together!</p> 
                <p className="We">Can we know you?</p> 
            </div>
            
            </h5> 

            <div>
            <form>
                <div>
                    <input type="text"  id="Firstname" placeholder='Firstname' />
                </div>
                    <div>
                        <input type="text"  id="Lastname" placeholder='Lastname' />
                    </div>
                    <div>
                        <input type="text"  id="PhoneNum" placeholder='PhoneNum'/>
                    </div>
                    <div>
                        <input type="text"  id="Username" placeholder='Username'/>
                    </div>
                    <div>
                        <input type="text"  id="Password" placeholder='Password'/>
                    </div>
            </form>

            </div>     
            
            <button id="RegisBut">Register</button>
            
            <img src="..\Aeests\img\BG.png" className='BG'  />
            <img src="..\Aeests\img\BG2.png" className='BG2'  />            
        </div>
        
           
    )

}

export default Register