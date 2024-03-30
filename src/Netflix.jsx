import React from "react";
import Card from './Card';
import moviesData from './Data';

const Netflix = () => {
    return (
        moviesData.map((val) => {
            return (
                <Card key={val.id} imgsrc={val.imgsrc} title={val.title} link={val.link} />
            )
        })
    )
}

export default Netflix;