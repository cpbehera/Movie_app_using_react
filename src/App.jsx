import { useState } from 'react';

import Navbar from './components/Navbar';
import Categories from './components/Categories';
import MoviesWrapper from './components/MoviesWrapper';
import Footer from './components/Footer';


const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <>
            <Navbar />
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <MoviesWrapper selectedCategory={selectedCategory} />
            <Footer />
        </>
    )
};

export default App;