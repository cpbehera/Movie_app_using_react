import React from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import MoviesWrapper from './components/MoviesWrapper';
import Footer from './components/Footer';


const App = () => {
    return (
        <>
            <Navbar />
            <Categories />
            <MoviesWrapper />
            <Footer />
        </>
    )
};

export default App;