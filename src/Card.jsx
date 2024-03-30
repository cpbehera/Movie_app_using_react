import React from 'react';
import './Card.css';
import Images from './Images';

function Card(props){
    // console.log(props);
    return(
      <>
      <div className='cards'>
        <div className='card'>
           <Images imgsrc={props.imgsrc}/>
            <div className='card_info'>
                <span className='card_category'>Hindi movie</span>
                <h3 className='card_title'>{props.title}</h3>
                <a href={props.link} target='_blank'>
                  <button>Download Now</button>
                </a>
            </div>
        </div>
      </div>
      </>
    );
  }

  export default Card;