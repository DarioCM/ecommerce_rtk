import React from 'react';
import './ShoppingCart.css';
// Import useDispatch hook from react-redux
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice.jsx';
import SuperCoin from './SuperCoin.jsx';

const ShoppingCart = () => {

  // Get the cart items from the store
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce( ( total, item) => total + item.price * item.quantity, 0  );

    // Function to handle removing an item from the cart
  const handleRemoveItem = itemId => {
      dispatch(removeItemFromCart(itemId));
  };

    // Function to handle clearing the entire cart
  const handleClearCart = () => {
    dispatch(clearCart());
  } ;

    // Function to handle increasing the quantity of an item in the cart
   const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
   };

    // Function to handle decreasing the quantity of an item in the cart
    const handleDecreaseQuantity = itemId => {
      dispatch(decreaseItemQuantity(itemId));
    };

  return (
      <>
          <div className="shopping-cart">
              <h2 className="shopping-cart-title">Shopping Cart</h2>

              <ul className="cart-items">
                  {
                      cartItems.map(item => (
                          <li key={item.id} className="cart-item">
                              <span>{item.name} - ${item.price}</span>
                              <div className="quantity-controls">
                                  <button className="quantity-control-btn"
                                          onClick={() => handleDecreaseQuantity(item.id)}>-
                                  </button>
                                  <span className="quantity">{item.quantity}</span>
                                  <button className="quantity-control-btn"
                                          onClick={() => handleIncreaseQuantity(item.id)}>+
                                  </button>
                              </div>
                              <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove
                              </button>
                          </li>
                      ))
                  }
              </ul>

              <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
          </div>

          <div>{totalAmount ? <div>The total amount is {totalAmount}</div> : ''}</div>

          <div className="super-coins" style={{textAlign: 'center'}}>
              <div className="super-coins" style={{textAlign: 'center'}}>
                  <SuperCoin/>
              </div>
          </div>

      </>


  );
};

export default ShoppingCart;
