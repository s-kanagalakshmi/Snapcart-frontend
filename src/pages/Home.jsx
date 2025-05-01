

import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import Hero from './Hero';
import Features from './Features';
import Deals from './Deals';
import Categories from './Categories';
import PromoBanner from './Promobanner';
import Brand from './Brand';
import Footer from './Footer';
const Home = () => {
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