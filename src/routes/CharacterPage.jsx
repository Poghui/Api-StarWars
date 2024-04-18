import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export const CharacterPage = () => {
    const { id } = useParams();

    const [character, setCharacter] = useState({});

    const getCharacter = async () => {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        setCharacter(response.data);
    }
    useEffect(() => {
        getCharacter();
    }, [])

    return (
        <div>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
            <p>Name: {character.name}</p>
            <p>Height: {character.height}</p>
            <p>Hair: {character.hair_color}</p>
            <p>Skin: {character.skin_color}</p>
            <p>Gender: {character.gender}</p>
        </div>
    )
}
