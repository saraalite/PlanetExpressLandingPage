import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="CardContainer">
        <p> { props.salesImage } </p>
     {/*    <div className="ExpirationDateContainer">
        <p> Fecha de caducidad de la oferta <br/> { props.expirationDate } </p>
        </div> */}
        { props.children } 
    </div>
  );
}

export default Card;