import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import '../styles/wishlist.css';

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);

    return (
        <div className="wishlist-container">
            <h1>My Wishlist</h1>
            {wishlist.length > 0 ? (
                <div className="wishlist-items">
                    {wishlist.map((product) => (
                        <div key={product.id} className="wishlist-item">
                            <img src={product.thumbnail || product.image} alt={product.title} />
                            <div>
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                                <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default Wishlist;
