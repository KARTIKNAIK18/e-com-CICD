import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import SearchBar from '../components/SearchBar';
import '../styles/home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get('https://dummyjson.com/products?limit=100');
            let filteredProducts = res.data.products;

            if (category) {
                filteredProducts = filteredProducts.filter(p =>
                    p.category.toLowerCase().includes(category.toLowerCase())
                );
            }

            if (searchQuery) {
                filteredProducts = filteredProducts.filter(p =>
                    p.title.toLowerCase().includes(searchQuery)
                );
            }

            if (sortOrder === "asc") {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else {
                filteredProducts.sort((a, b) => b.price - a.price);
            }

            setProducts(filteredProducts);
        };

        fetchProducts();
    }, [searchQuery, category, sortOrder]);

    const categories = ["TV", "Audio", "Laptop", "Mobile", "Gaming", "Appliances"];

    return (
        <div className="home-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h3>Categories</h3>
                <ul>
                    {categories.map((cat, index) => (
                        <li key={index} onClick={() => setCategory(cat)}>
                            {cat}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <SearchBar setSearchQuery={setSearchQuery} />

                {/* Banner */}
                

                {/* Filter chips */}
               

                {/* Product Grid */}
                
                <div className="product-grid">
                    {products.length > 0 ? (
                        products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <h2>No products found.</h2>
                    )}
                    </div>
                </div>
            </div>
        
    );
};

export default Home;
