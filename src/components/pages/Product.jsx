import PropTypes from 'prop-types';

const Product = ({ product }) => {
    console.log(product);
    const {title, image, price, ratting} = product
    return (
        <div className=''>
            <img className='h-[100px]' src={image} alt="" />
            <div>
                <h2>{title}</h2>
                <p>{price}</p>
                <p><small>{ratting?.rate}</small></p>
                <p><small>{ratting?.count}</small></p>
            </div>
        </div>
    );
};

// Props types
Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;