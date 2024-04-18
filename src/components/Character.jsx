import React from 'react'
import { Link } from 'react-router-dom';

const Character = ({ character }) => {
    const getIdFromUrl = (url) => url.substring(url.lastIndexOf('/', url.lastIndexOf('/') - 1) + 1, url.lastIndexOf('/'));

    const id = getIdFromUrl(character.url);

    return (
        <div>
            <Link to={`/character/${id}`}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
                <p>{character.name}</p>
            </Link>
        </div>
    )
}

export default Character