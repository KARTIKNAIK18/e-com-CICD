import React from 'react';
import '../styles/productFilters.css';

const ProductFilters = ({ setSortOrder, setCategory }) => {
    return (
        <div className="filters-container">
            <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>

            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
            </select>
        </div>
    );
};

export default ProductFilters;
