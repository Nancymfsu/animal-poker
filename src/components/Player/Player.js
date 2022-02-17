import React from 'react';
import './Player.css';
import Card from '../Card/Card'



const Player = (props) => (
  <div className="Player">
    <div className="PlayerName">
      {props.name}
    </div>
    <div className="PlayerCard">  
      {props.show ? 
        (props.vote && (
          <Card animal={props.vote.animal} image={props.vote.image}/>
        ))
        :
          <Card />
      }
    </div>
  </div>
);



export default Player;
