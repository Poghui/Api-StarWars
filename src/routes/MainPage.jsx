import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from '../components/Character';
import { Link } from 'react-router-dom';

const MainPage = () => {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [links, setLinks] = useState([]);

    const getPaginationLinks = (elementsAmount, elementsPerPage) => {
        const pagesAmount = elementsAmount / elementsPerPage;
        const linksData = []
        for (let i = 0; i < pagesAmount; i++) {
            linksData.push(i);
        }
        return linksData;
    };

    const getCharacters = async () => {
        const response = await axios.get('https://swapi.dev/api/people/?page=' + page);
        setCharacters(response.data.results)
        const paginationLink = getPaginationLinks(response.data.count, 10);
        setLinks(paginationLink)
    }


    useEffect(() => {
        getCharacters();
    }, [])
    return (
        <>
            {characters.map((char, key) => {
                return (
                    <Character character={char} key={key} />
                )
            })}
            {links.map((link, key) => <Link key={key} to={'?page=' + link}>{link}</Link>)
            }
        </>
    )
}

export default MainPage