import './App.css';
import React, { useState, useEffect} from 'react';
import Hero from './Hero/Hero';
import BarMenu from './BarMenu/BarMenu';
import PriceCalculator from './PriceCalculator/PriceCalculator';
import Sales from './Sales/Sales';
import Newsletter from './Newsletter/Newsletter';
import getCharactersFromApi from './Services/getCharactersFromApi';
import FilterList from "./Characters/FilterList";
import Footer from "./Footer/Footer"

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterByName, setFilterByName] = useState("");

  useEffect(() => {
    Promise.all(getCharactersFromApi()).then(function(values) {
      const charactersFromApi = values.flatMap(value => value) 
      setCharacters(charactersFromApi);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterByName(data.value);
    } 
  };

  const filteredList = characters
    .filter(
      (character) =>
        filterByName === "" ||
        character.Name.match(new RegExp(filterByName, "i"))
    )
    

  return (
    <div className="App">
      <BarMenu/>
      <Hero/>
      <PriceCalculator/>
      <Sales/>
      <Newsletter/>
      <div>
        <FilterList
          characters={filteredList}
          filterByName={filterByName}
          setFilterByName={setFilterByName}
          handleFilter={handleFilter}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
