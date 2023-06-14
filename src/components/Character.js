// Write your Character component here
import react, { useState, useEffect } from 'react';
import axios from 'axios';
import { handlers } from '../mocks/handlers';
console.log(handlers)

const Character = () => {
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(resp => {
                setCharacter(resp.data)
            })
            .catch(error => {
                console.error('Error fetching character data:', error);
            })
    }, [])

    return (
        <div className ="character">
            <h1>Characters of the force</h1> 
        </div>
    )
}

export default Character;