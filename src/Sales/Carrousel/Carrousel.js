import React, { useState } from 'react';
import './Carrousel.css';
import CountDownTimer from './CountDownTimer/CountDownTimer';
import Card from './Card/Card';
import moment from 'moment';

function Carrousel() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const salesCards = [
    {
      salesImage: <img className="OfertaImg" src="/oferta_peligrosa.png" alt="Oferta bono 5 entregas de mercancía peligrosa."/>,
      expirationDate: '2021-12-01'
    },
    {
      salesImage: <img className="OfertaImg" src="/oferta_bono10.png" alt="Oferta bono 5 entregas de mercancía peligrosa."/>,
      expirationDate: '2021-11-01'
    },
    {
      salesImage: <img className="OfertaImg" src="/oferta_gratis.png" alt="Oferta bono 5 entregas de mercancía peligrosa."/>,
      expirationDate: '3000-01-01'
    },
    {
      salesImage: <img className="OfertaImg" src="/oferta_ilegales.png" alt="Oferta bono 5 entregas de mercancía peligrosa."/>,
      expirationDate: '2021-12-24'
    },
    {
      salesImage: <img className="OfertaImg" src="/oferta_mudanza.png" alt="Oferta bono 5 entregas de mercancía peligrosa."/>,
      expirationDate: '2021-12-31'
    }
  ]

  function isLastElement(index, list) {
    return currentCardIndex === salesCards.length - 1
  }
  function isFirstElement(index, list) {
    return currentCardIndex === 0
  }

  function nextCard(currentCardIndex) {
    if (isLastElement(currentCardIndex, salesCards)) 
      setCurrentCardIndex(0)
    else 
      setCurrentCardIndex(currentCardIndex + 1)
  }
  function previousCard(currentCardIndex) {
    if (isFirstElement(currentCardIndex, salesCards)) 
      setCurrentCardIndex(salesCards.length - 1)
    else 
      setCurrentCardIndex(currentCardIndex -1)
  }

  return (
    <div className="CardWrapper">
      <button className="ArrowButton" onClick={() => previousCard(currentCardIndex)}> { "<" } </button>
      {
        salesCards.filter((_, index) => index === currentCardIndex).map((salesCard) =>
          <Card salesImage={salesCard.salesImage} expirationDate={salesCard.expirationDate} key={salesCard.expirationDate}>
            <div className="ExpirationDateContainer"> Tiempo restante:  <CountDownTimer expirationDate={moment(salesCard.expirationDate, 'YYYY-MM-DD')} /> </div> 
          </Card>
        )
      }
      <button className="ArrowButton" onClick={() => nextCard(currentCardIndex)}> { ">" } </button>
    </div>
  );
}

export default Carrousel;

