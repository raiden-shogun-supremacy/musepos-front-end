import '../../style.css'
import './Stock.css'
import ProductCard from '../ProductCard/ProductCard';
import dummy from '../../dummy/dummy.json'

function Stock() {
    const render_product_showcase = dummy.map((data, key) => {
        return <ProductCard detail={data} index={key} />
    });
    return (
        <div>
            <div className='stock'>
                <div>
                <h1 className='header'>Stock</h1>
                <p>Let's see your menu</p>
                </div>
                <select>Category</select>
                <div>
                    {render_product_showcase}
                </div>
            </div>
        </div>
    )
}

export default Stock;