import React from "react";
import './Character.css';

function Character(props) {
  return (
    <div className="CharacterCard" key={props.character.id}>
      <img
        className="CharacterImage"
        src={props.character.PicUrl}
        alt={props.character.Name}
      ></img>
      <div className="CharacterInfoContainer">
      <p className="CharacterName"> Nombre : {props.character.Name}</p>
      </div>
    </div>
  );
}

export default Character;