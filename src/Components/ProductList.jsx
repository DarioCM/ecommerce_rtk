import React from 'react';
import './ProductList.css';
// Import useDispatch hook from react-redux
import { useDispatch } from 'react-redux';
import { useState } from 'react';
// In the above code, addItemToCart is used to get the reducer function detail to dispatch which product is added to the cart to store.js.
import { addItemToCart }  from "./CartSlice.jsx";

//  ProductList component
const ProductList = () => {

    const dispatch = useDispatch();
    const [ disabledProducts, setDisabledProducts ] = useState([]); // State to store disabled products

    // Array of products
  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

    // Function to handle adding a product to the cart
    const handleAddToCart = (product) => {
      dispatch(addItemToCart(product)); // Dispatching the action to add the product to the cart
        setDisabledProducts([...disabledProducts, product.id]); // Mark the product as disabled
    };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>

        {/* List of products */}
      <ul className="product-list-items">
          {
            // Mapping products array to list items
            products.map(product => (
                <li key={product.id} className="product-list-item">
                    <span>{product.name} - ${product.price}</span>

                    <button
                        className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
                         onClick={ () => handleAddToCart(product) }
                        disabled={disabledProducts.includes(product.id)}
                    >
                        Add to Cart
                    </button>
                </li>
            )) // End of map
          }
      </ul>

    </div>
  );
};

export default ProductList;
