import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/productCard.css';

const ProductCard = ({ product }) => {
    const { addToWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <img src={product.thumbnail || product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description.substring(0, 100)}...</p>
            <p><strong>${product.price}</strong></p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="wishlist-button" onClick={() => addToWishlist(product)}>❤️ Add to Wishlist</button>
            <Link to={`/product/${product.id}`} className="product-link">View Details</Link>
        </div>
    );
};

export default ProductCard;
