// Write your Character component here
import react, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = () => {
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(resp => {
                setCharacter(resp.data)
                // console.log(resp.data)
            })
            .catch(error => {
                console.error('Error fetching character data:', error);
            })
    }, [])

    return (
        <div>
            {character ? (
              <div>
                <h2>{character.name}</h2>  
                <p>{character.height}</p>
              </div>  
            ) : (
                <p>Loading Character Data...</p>
            )}
        </div>
    )
}

export default Character;