import React, { useState } from 'react';
import './PriceCalculator.css';
import { v4 as uuidv4 } from 'uuid';

function PriceCalculator() {

  const [listOfPackagesOrders, setListOfPackagesOrders] = React.useState([]);
  const [numberOfPackages, setNumberOfPackages] = useState('');
  const [weightOfPackages, setWeightOfPackages] = useState('');
  const [value,setValue]=useState('');

/*   const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  console.log("valor", value)
 
  function handleAdd() {
    const newList = listOfPackagesOrders.concat({ numberOfPackages, weightOfPackages, id: uuidv4() });
    setListOfPackagesOrders(newList);
    setNumberOfPackages('');
    setWeightOfPackages('');
  }
 */
  function calculateTotal (listOfPackagesOrders){
      const pricePerKg = 3;
      
      return listOfPackagesOrders.length > 0
        ? listOfPackagesOrders.map(
            ({numberOfPackages, weightOfPackages}) => numberOfPackages * weightOfPackages
          ).reduce(
            (accumulator, currentValue) => accumulator + currentValue
          ) * pricePerKg
        : 0
  }
/*    function handleShipping (calculateTotal){
    const handleChange = (ev) => {
      handleFilter({
        value: ev.target.value,
      });
  }
}  */
  return (
    <div className="MainDiv">
      <h1 className="MainTitle">Calcula el precio de tu paquete</h1>
        <div className="Wrapper">
          <div>
          Selecciona el tipo de mercancía que quieres transportar
          <br></br>
          <select name="ShippingType" /* onChange={handleSelect} */ /* value={filterByGender} onChange={handleChange} */>
            <option>Mercancía estándar</option>
            <option>Mercancía frágil (+5€)</option>
            <option>Mercancía peligrosa (+10€)</option>
            <option>Mercancía ilegal (+50€)</option>
            <option>Animales vivos (+100€)</option>
            <option>Animales muertos (+200€)</option>
            <option>Animales medio muertos (+300€)</option>
            <option>Prefiero no decirlo (+1000€)</option>
          </select>
          </div>
          <div className="FormWrapper">
            <form>
              Número de paquetes:
              <input type="text" value={numberOfPackages} onChange={(event) => setNumberOfPackages(event.target.value)}/>
              <br/>
              Peso de cada paquete:
              <input type="text" value={weightOfPackages} onChange={(event) => setWeightOfPackages(event.target.value)}/>
            </form>
            <button type="button">Añadir a la lista</button>
            <ul className="OrdersList">
              Número de paquetes / Peso por paquete
              {listOfPackagesOrders.map((item) => (
                <li key={item.id}>{item.numberOfPackages} / {item.weightOfPackages}</li>
              ))}
            </ul>
          </div>
          <div className="TotalWrapper">El precio total es: {calculateTotal(listOfPackagesOrders)}€</div>
          <div className="ImageWrapper">
            <img className="TakeMoney" src="/takeMoney.png" alt="Fry with a bunch of dollars in his hand."/>
          </div>
        </div>
    </div>
  );
}

export default PriceCalculator;
