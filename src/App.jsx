import React from 'react';
import Netflix from './Netflix';
import AmazonPrime from './AmazonPrime';

const favSeries = 'netflix';

// const favS = () => {
//     if (favSeries === 'netflix') {
//         return (
//             <Netflix />
//         )
//     } else {
//         return (
//             <AmazonPrime />
//         )
//     }
// }


const App = () => {
    return (
        <>
            <div className='heading_wrapper'>
            { (favSeries === 'netflix') ? 
            <h1 className='heading'>List of Top 6 Netflix movies of 2023</h1> : 
            <h1 className='heading'>List of Top 6 Amazon Prime movies of 2023</h1> }
            </div>

            <div className='container'>
                { (favSeries === 'netflix') ? <Netflix /> : <AmazonPrime /> }
            </div>
        </>
    )
};

export default App;