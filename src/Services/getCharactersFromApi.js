const getCharacterFromApi = (characterName) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/v2/characters?search=${characterName}`)
    .then((response) => response.json())
    .then((data) => {
      return data.map((character) => {
        return {
          Name: character.Name,
          Species: character.Species,
          PicUrl: character.PicUrl,
        };
      }).filter((character, index) => character.Name === characterName && index === 0);
    });
};

const getCharactersFromApi = () => {
  const characters = ['Hubert J. Farnsworth','Philip J. Fry', 'Turanga Leela', 'Hermes Conrad', 'John A. Zoidberg', 'Bender Bending Rodríguez', 'Amy Kroker', 'Scruffy Scruffington']
  return characters.map(character =>
      getCharacterFromApi(character)
    )
}

export default getCharactersFromApi;