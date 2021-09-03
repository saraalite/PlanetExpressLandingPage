import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="CardContainer">
        <p> { props.salesImage } </p>
        { props.children } 
    </div>
  );
}

export default Card;