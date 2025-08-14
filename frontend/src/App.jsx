import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login'
import Signup from './pages/Signup';
import WishlistProvider from './context/WishlistContext'; // ✅ Import WishlistProvider
import './styles/global.css';

function App() {
    return (
        <WishlistProvider> {/* ✅ Wrap everything inside WishlistProvider */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/login" element= {<Login/>}/>
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </WishlistProvider>
    );
}

export default App;
