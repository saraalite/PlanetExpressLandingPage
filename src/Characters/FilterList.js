import React from "react";
import CharacterList from "./CharacterList/CharacterList";
import FilterByName from "./FilterByName";
import './FilterList.css';
import '../Common.css';


function FilterList(props) {

  const error = (
    <div className="error-general">
      <p className="error-text">
        En nuestra empresa no trabaja nadie llamado {props.filterByName}
      </p>
      <img
        src={process.env.PUBLIC_URL + '/fry.png'}
        alt="Fry con cara sospechosa"
      />
    </div>
  );

  return (
    <>
      <div className="anchor" id="Characters"></div>
      <div className="CharactersWrapper">
      <h1 className="Title">Quiénes somos</h1>
      <h2 className="PlainText ChactersText"> Conoce a nuestra plantilla de profesionales más que cualificados. Verás que somos una compañía diversa porque entre nuestras filas hay mutantes, crustáceos, burócratas, tercera (más bien cuarta) edad, robots y hasta algún que otro inútil. Estamos a tu servicio para todo tipo de entregas.</h2>
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
    </>
  );
}

export default FilterList;