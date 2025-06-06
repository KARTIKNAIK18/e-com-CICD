import React from 'react';
import ReactDOM from 'react-dom/client';
import CartProvider from './context/CartContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CartProvider> {/* Wrapping the entire app in CartProvider */}
            <App />
        </CartProvider>
    </React.StrictMode>
);
