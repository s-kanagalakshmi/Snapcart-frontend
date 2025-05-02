import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Electronics from './pages/Electronics';
import Categories from './pages/Categories';
import CategoryPage from './pages/Categorypage';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
    <Router>
      <Navbar />
      {/* <Products/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App
