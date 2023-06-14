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
        <div className ="character">
            <h1>Characters of the force</h1>
            {characters.map(character => {
                return 
            })}
            
        </div>
    )
}

export default Character;