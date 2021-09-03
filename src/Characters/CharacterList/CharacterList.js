import React from "react";
import Character from "../Character/Character";
import './CharacterList.css';


function CharacterList(props) {
  const sortByName = (a, b) => (a.name < b.name ? -1 : 1);
  console.log(props.characters)
  const list = props.characters.sort(sortByName).map((character) => {
    return <Character character={character} key={character.Name} />;
  });

  return (
    <>
      <div className="GridListContainer">{list}</div>
    </>
  );
}

export default CharacterList;