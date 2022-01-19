import './ProductDetail.css';

const ProductDetail = ({detail}) => {
    return(
        <div>
            <div className="popup">
                {detail.Name}
            </div>
        </div>        
    )
}

export default ProductDetail;