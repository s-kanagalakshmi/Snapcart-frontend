// import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Electronics from './pages/Electronics';
import CategoryPage from './pages/Categorypage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AuthContext from './pages/AuthContext';
import ContactUs from './pages/Contact';
function App() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* Render Navbar only if the user is logged in */}
      {user && <Navbar />}

      <Routes>
        {/* Public routes for login and signup */}
        {!user && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}

        {/* Protected routes for authenticated users */}
        {user && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<ContactUs />} />

          </>
        )}
      </Routes>
    </>
  );
}

export default App;
