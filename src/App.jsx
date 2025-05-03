import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ No BrowserRouter here
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Electronics from './pages/Electronics';
import Categories from './pages/Categories';
import CategoryPage from './pages/Categorypage';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import { AuthProvider } from './pages/AuthContext';
import Cart from './pages/Cart';
function App() {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/electronics" element={<Electronics />} />

        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
