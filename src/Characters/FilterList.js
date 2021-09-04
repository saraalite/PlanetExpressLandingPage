import React from "react";
import CharacterList from "./CharacterList/CharacterList";
import FilterByName from "./FilterByName";
import './FilterList.css';


function FilterList(props) {

  const error = (
    <div className="error-general">
      <p className="error-text">
        En nuestra empresa no trabaja nadie llamado {props.filterByName}
      </p>
      <img
        src="/Fry.png"
        alt="Fry with suspicious face"
      />
    </div>
  );

  return (
    <div className="CharactersWrapper">
    <h1 className="CharactersTitle">Quiénes somos</h1>
    <h2 className="WebPlainText"> Conoce a nuestra plantilla de profesionales más que cualificados. Verás que somos una compañía diversa porque entre nuestras filas hay mutantes, crustáceos, burócratas, tercera (más bien cuarta) edad, robots y hasta algún que otro inútil. Estamos a tu servicio para todo tipo de entregas.</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FilterByName
          handleFilter={props.handleFilter}
          filterByName={props.filterByName}
        />
      </form>
      {props.characters.length > 0 ? (
        <CharacterList characters={props.characters} />
      ) : (
        error
      )}
    </div>
  );
}

export default FilterList;