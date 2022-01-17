import React from 'react'
import '../../style.css'
import './Order.css'
import 'C:/Users/chana/Desktop/CPE/CPE_2_2021/SE/musepos-front-end/src/Components/Order/Order.js'

function Order() {
    
    return (
        <div className='midle'>
            <div>
                <h1 className='order'>
                    Order
                </h1>
                <p className='text'>
                    Check who going to sit in your resturant
                </p>
            </div>
            <div className='mt-150'>
                <button class="buttonLarge">+ New Order!</button>
            </div>
            <div>
                <p className='border'>
                    <p className='descript'>
                        No customer sit in your resturant yet...
                    </p>
                </p>
            </div>
        </div>

    )
}

export default Order