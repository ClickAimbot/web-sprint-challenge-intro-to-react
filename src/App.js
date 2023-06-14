import React, { useState, useEffect} from 'react';
import Character from "./components/Character"
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(res => {
                setCharacter(res.data)
            })
            .catch(error => {
                console.error('Error fetching character data:', error);
            })
    }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters of the force:</h1>
      { character.map(character => {
        return <Character info={character} />
      })}
    </div>
  );
}

export default App;
