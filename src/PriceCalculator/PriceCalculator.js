import React, { useState } from 'react';
import './PriceCalculator.css';
import { v4 as uuidv4 } from 'uuid';
import '../Common.css';

function PriceCalculator() {

  const shippingTypes = [
    {
      type: "Mercancía estándar",
      value: 0,
    },
    {
      type: "Mercancía frágil (+5€)",
      value: 5,
    },
    {
      type: "Mercancía peligrosa (+10€)",
      value: 10,
    },
    {
      type: "Mercancía ilegal (+50€)",
      value: 50,
    },
    {
      type: "Animales vivos (+100€)",
      value: 100,
    },
    {
      type: "Animales muertos (+200€)",
      value: 200,
    },
    {
      type: "Animales medio muertos (+300€)",
      value: 300,
    },
    {
      type: "Prefiero no decirlo (+1000€)",
      value: 1000,
    },
  ]

  const [listOfPackagesOrders, setListOfPackagesOrders] = React.useState([]);
  const [numberOfPackages, setNumberOfPackages] = useState('');
  const [weightOfPackages, setWeightOfPackages] = useState('');
  const [shippingType,setShippingType]=useState(shippingTypes[0]);

  function handleAdd() {
    const pricePerKg = 3;
    const newList = listOfPackagesOrders.concat(
      { 
        numberOfPackages,
        weightOfPackages,
        shippingType,
        total: ((numberOfPackages * weightOfPackages) * pricePerKg) + shippingType.value,
        id: uuidv4() 
      }
    );
    setListOfPackagesOrders(newList);
    setShippingType(shippingTypes[0]);
    setNumberOfPackages('');
    setWeightOfPackages('');
  }

  function calculateTotal (listOfPackagesOrders){
      return listOfPackagesOrders.length > 0
        ? listOfPackagesOrders.map(
            ({total}) => total
          ).reduce(
            (accumulator, currentValue) => accumulator + currentValue
          )
        : 0
  }

  const handleSelect=(e)=>{
    const selectedShippingType = shippingTypes.filter(
      shippingType => shippingType.type === e.target.value
    )
    setShippingType(selectedShippingType[0]);
  }

  return (
    <>
      <div className="anchor" id="PriceCalculator"></div>
      <div className="MainDiv">
        <h1 className="Title">Calcula el precio de entrega de tu paquete</h1>
          <div className="Wrapper">
            <div>
              <div className="PlainText">
                Selecciona el tipo de mercancía que quieres transportar
              </div>
            <br></br>
            <select name="ShippingType" className="PlainTextInput"onChange={handleSelect} value={shippingType.type}>
              {
                shippingTypes.map(shippingType => <option key={shippingType.type}>{shippingType.type}</option>)
              }
            </select>  
            <div className="ImageWrapper">
              <img className="TakeMoney" src={process.env.PUBLIC_URL + '/takeMoney.png'} alt="Fry with a bunch of dollars in his hand."/>
            </div>
            </div>
            <div className="FormWrapper">
              <form className="PlainText">
                Número de paquetes:
                <br></br>
                <input className="PlainTextInput" type="text" value={numberOfPackages} onChange={(event) => setNumberOfPackages(event.target.value)}/>
                <br/>
                Peso de cada paquete:
                <br></br>
                <input className="PlainTextInput"  type="text" value={weightOfPackages} onChange={(event) => setWeightOfPackages(event.target.value)}/>
              </form>
              <button className="AddShippingButton" type="button" onClick={handleAdd}>Añadir a la lista</button>
            </div>
            <div className="TableWrapper">
            <table>
                <tbody>
                  <tr>
                    <th>Número de paquetes </th>
                    <th>Peso por paquete </th>
                    <th>Tipo de mercancía</th>
                    <th>Total</th>
                  </tr>
                  {listOfPackagesOrders.map(item =>
                    <tr>
                      <td>{item.numberOfPackages}</td>
                      <td>{item.weightOfPackages}</td>
                      <td>{item.shippingType.type}</td>
                      <td>{item.total}€</td>
                    </tr>
                  )}
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{calculateTotal(listOfPackagesOrders)}€</td>
                    </tr>
                </tbody>
              </table>
            </div>

          </div>
      </div>
    </>
  );
}

export default PriceCalculator;
