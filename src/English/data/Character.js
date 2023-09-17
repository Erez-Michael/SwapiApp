import React, { useEffect, useState } from "react";

const Character= () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/ ")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {data.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Character;
