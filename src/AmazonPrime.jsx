import React from "react";

import Card from './Card';
import amazonPrimeData from './AmazonPrimeData';

const AmazonPrime = () => {
    return (
        amazonPrimeData.map((val) => {
            return (
                <Card key={val.id} imgsrc={val.imgsrc} title={val.title} link={val.link} />
            )
        })
    )
}

export default AmazonPrime;