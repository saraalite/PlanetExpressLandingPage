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

  const shippingDestinations = [
    {
      type: "Vía Láctea",
      value: 0,
    },
    {
      type: "Enana del Can Mayor (+500€)",
      value: 500,
    },
    {
      type: "Enana Elíptica de Sagitario (+600€)",
      value: 600,
    },
    {
      type: "Gran Nube de Magallanes (+700€)",
      value: 700,
    },
    {
      type: "Enana de Boötes (+800€)",
      value: 800,
    },
    {
      type: "Pequeña Nube de Magallanes (+900€)",
      value: 900,
    },
    {
      type: "Enana de la Osa Menor (+1000€)",
      value: 1000,
    },
    {
      type: "Enana de Draco (+1100€)",
      value: 1100,
    },
    {
      type: "Más allá (+1500€)",
      value: 1500,
    },
  ]

  const [listOfPackagesOrders, setListOfPackagesOrders] = React.useState([]);
  const [numberOfPackages, setNumberOfPackages] = useState('');
  const [weightOfPackages, setWeightOfPackages] = useState('');
  const [shippingType,setShippingType]=useState(shippingTypes[0]);
  const [shippingDestination, setShippingDestination]=useState(shippingDestinations[0])

  function handleAdd() {
    const pricePerKg = 3;
    const newList = listOfPackagesOrders.concat(
      { 
        numberOfPackages,
        weightOfPackages,
        shippingType,
        shippingDestination,
        total: (((numberOfPackages * weightOfPackages) * pricePerKg) + shippingType.value)+shippingDestination.value,
        id: uuidv4() 
      }
    );
    setListOfPackagesOrders(newList);
    setShippingType(shippingTypes[0]);
    setShippingDestination(shippingDestinations[0]);
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

  function isButtonDisabled () {
    const regexNumbers = /^[0-9]+$/
    return !(regexNumbers.test(numberOfPackages) && regexNumbers.test(weightOfPackages))
  }

  const handleSelectType=(e)=>{
    const selectedShippingType = shippingTypes.filter(
      shippingType => shippingType.type === e.target.value
    )
    setShippingType(selectedShippingType[0]);
  }

  const handleSelectDestination=(e)=>{
    const selectedDestinationType = shippingDestinations.filter(
      shippingDestination => shippingDestination.type === e.target.value
    )
    setShippingDestination(selectedDestinationType[0]);
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
                <select name="ShippingType" className="PlainTextInput"onChange={handleSelectType} value={shippingType.type}>
                  {
                    shippingTypes.map(shippingType => <option key={shippingType.type}>{shippingType.type}</option>)
                  }
                </select>  
              </div>
              <div>
                  <div className="PlainText">
                    Selecciona el destino de tu mercancía
                  </div>
                <br></br>
                <select name="ShippingDestination" className="PlainTextInput"onChange={handleSelectDestination} value={shippingDestination.type}>
                  {
                    shippingDestinations.map(shippingDestination => <option key={shippingDestination.type}>{shippingDestination.type}</option>)
                  }
                </select>  
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
              <button className="AddShippingButton" type="button" onClick={handleAdd} disabled={isButtonDisabled()}>Añadir a la lista</button>
            </div>
          
            <div className="TableWrapper">
            <table className="PriceTable">
                <tbody>
                  <tr>
                    <th>Número de paquetes </th>
                    <th>Peso por paquete </th>
                    <th>Tipo de mercancía</th>
                    <th>Destino</th>
                    <th>Total</th>
                  </tr>
                  {listOfPackagesOrders.map(item =>
                    <tr>
                      <td>{item.numberOfPackages}</td>
                      <td>{item.weightOfPackages}</td>
                      <td>{item.shippingType.type}</td>
                      <td>{item.shippingDestination.type}</td>
                      <td>{item.total}€</td>
                    </tr>
                  )}
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>{calculateTotal(listOfPackagesOrders)}€</td>
                    </tr>
                </tbody>
              </table>
            </div>
      </div>
    </>
  );
}

export default PriceCalculator;
