import '../../style.css'
import './ProductCard.css'

const  ProductCard = ({detail}) => {
    return (
        <div className='product-card'>
            <img src={detail.img} alt={detail.Name} />
            <p>{detail.Name}</p>
        </div>
    )
}

export default ProductCard;