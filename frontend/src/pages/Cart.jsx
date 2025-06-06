import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/cart.css';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cart.length > 0 ? (
                <div className="cart-items">
                    {cart.map((product) => (
                        <div key={product.id} className="cart-item">
                            <img src={product.thumbnail || product.image} alt={product.title} className="cart-image" />
                            <div>
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                                <button onClick={() => removeFromCart(product.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <h2>Total: ${totalPrice}</h2>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
