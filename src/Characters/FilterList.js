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