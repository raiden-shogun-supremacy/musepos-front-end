import '../../style.css';
import './NavBar.css';

function NavBar() {
    
    return (
        <div className="middle">
            <div>
                <p className='border2'></p> 
            </div>
            <div>
                <img src="..\Asset\img\dashboard.png" className="PicDash" />
                <p className="textDash">dashboard</p>  
                <img src="..\Asset\img\order.png" className="PicOrder" />
                <p className="textOrder">Order</p>  
                <img src="..\Asset\img\stock.png" className="PicStock" />
                <p className="textStock">Stock</p>  
                <img src="..\Asset\img\other.png" className="PicOther" />
                <p className="textOther">Other</p>
            </div>   
        </div>
    );
}

export default NavBar;