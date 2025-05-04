

import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import Hero from './Hero';
import { useContext } from 'react';
import Features from './Features';
import Deals from './Deals';
import Categories from './Categories';
import PromoBanner from './Promobanner';
import Brand from './Brand';
import Navbar from './Navbar';
import Footer from './Footer';
import AuthContext from './AuthContext';
const Home = () => {
    const { user } = useContext(AuthContext); 
    return (
        <div style={{ padding: '40px' }}>
            <h1>Welcome to Snapcart</h1>
            <Hero />
            <Features />
            <Deals/>
            <Categories/>
            <PromoBanner/>
            <Brand/>
            <Footer/>
        </div>
    );
};
export default Home