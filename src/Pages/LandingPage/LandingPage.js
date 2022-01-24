import { useState } from 'react';
import '../style.css';
import NavBar from '../../Components/NavBar/NavBar.js'
import Dashboard from '../Dashboard/Dashboard.js'
import Order from '../Order/Order.js';
import StockPage from '../Stock/StockPage.js'


function LandingPage() {
    //set useState
    const [pageIndex, setPageIndex ] = useState('');

    //set firstPage
    let render_sideview = <Dashboard />

    //set change page function by using switch
    switch(pageIndex) {
        case 'Dashboard':
            render_sideview = <Dashboard />
            break;
        case 'Order':
            render_sideview = <Order />
            break;
        case 'Stock':
            render_sideview = <StockPage />
            break;
        case 'Others':
            render_sideview = <Dashboard />
            break;
    }

    //set Onclick function
    function onNavBarClicked(x) {
        setPageIndex(x)
    } 
    return(
        <div>
            <NavBar passingIndex={onNavBarClicked}/>
            {render_sideview}
        </div>
    )
}

export default LandingPage;