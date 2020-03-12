import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
   // console.log(props);

    const { img, name, seller, price, stock } = props.product;
    return (
        <div class="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 class="product-name">{props.product.name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button
                     className="main-btn"
                     onClick={() => props.handleAddProduct(props.product)}
                     > 
                     <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>

        </div>
    );
};

export default Product;