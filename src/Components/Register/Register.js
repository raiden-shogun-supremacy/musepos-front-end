import React from 'react'
import '../../style.css'
import './Register.css'

/*import Login from '../Login/Login.js';*/

 
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
            
            <form>
                <div>
                    <input type="text"  id="Firstname" />
                </div>

                    <div>
                        <input type="text"  id="Lastname" />
                    </div>

                    <div>
                        <input type="text"  id="PhoneNum" />
                    </div>

                    <div>
                        <input type="text"  id="Username" />
                    </div>

                    <div>
                        <input type="text"  id="Password" />
                    </div>
            </form>
            <button id="RegisBut">Register</button>
            
            <img src="..\Aeests\img\BG.png" className='BG'  />
            <img src="..\Aeests\img\BG2.png" className='BG2'  />
            
            
           
        </div>
        
           
    )

}

export default Register