import React from 'react';
import './Card.css';

let cardBack = `https://www.pngkey.com/png/full/807-8072911_fashion-trend-photography-material-royalty-free-t-shirt.png`
const Card = (props) => (
  <div className="Card">
    {
      props.image ? 
    
    <img src={props.image} className="InnerCard"></img>
    :
    <img src={cardBack} className="InnerCard"></img>
    }
  </div>
);


export default Card;
