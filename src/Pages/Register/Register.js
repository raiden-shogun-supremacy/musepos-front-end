import '../style.css'
import './Register.css'

function Register() {
    return (
        <div className='middle'>
           
           <h1> Register</h1> 
           <h5>
            <div>
                <p className="">Let's earn money together!</p> 
                <p className="">Can we know you?</p> 
            </div>
            
            </h5> 

            <div className='Form'>
                <div >
                    <input type="text"  id="" placeholder='Firstname' />
                </div>
                    <div>
                        <input type="text"  id="" placeholder='Lastname' />
                    </div>
                    <div>
                        <input type="text"  id="" placeholder='PhoneNum'/>
                    </div>
                    <div>
                        <input type="text"  id="" placeholder='Username'/>
                    </div>
                    <div>
                        <input type="text"  id="" placeholder='Password'/>
                    </div>
                   
            </div>     
            <button>Register</button>
            
            
                       
        </div>
        
           
    );

}

export default Register;