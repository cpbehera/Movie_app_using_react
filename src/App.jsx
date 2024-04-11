import React from 'react';
import Netflix from './Netflix';
import AmazonPrime from './AmazonPrime';

const favSeries = 'netfli';


const App = () => {
    return (
        <>
            <div className='heading_wrapper'>
            { (favSeries === 'netflix') ? 
            <h1 className='heading'>List of Top 7 Netflix movies of 2023</h1> : 
            <h1 className='heading'>List of Top 7 Amazon Prime movies of 2023</h1> }
            </div>

            <div className='container'>
                { (favSeries === 'netflix') ? <Netflix /> : <AmazonPrime /> }
            </div>
        </>
    )
};

export default App;