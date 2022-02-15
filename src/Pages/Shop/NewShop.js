import '../style.css';
import './NewShop.css';

function NewShop(){
    return(
        <div className='Dis'>
            <div className='middle'>
                <h1 className='Header'> New Shop</h1> 
                    <div >
                        <p >Welcome new owner.</p> 
                        <p >Let's tell us something about your new business.</p> 
                    </div>            
            <div className='f-cen'>
                    <input type="text" placeholder='Name'></input>
                    <select>
                    <option value='Type'>Type</option>    
                    <option value='Cafe'>Cafe</option>
                    <option value='Resturant'>Restaurant</option>    
                    </select>                
            </div>           
            </div>
        </div>
    )
}

export default NewShop