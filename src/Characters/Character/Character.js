import React from "react";
import './Character.css';

function Character(props) {
  return (
    <div className="CharactersMainWrapper">
      <li>
        <div className="CharacterCard" key={props.character.id}>
          <img
            className="CharacterImage"
            src={props.character.PicUrl}
            alt={props.character.Name}
          ></img>
          <div className="CharacterInfoContainer">
          <p className="character-name"> Name : {props.character.Name}</p>
          <p className="character-species">
            Species: {props.character.Species}
          </p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Character;