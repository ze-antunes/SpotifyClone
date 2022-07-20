import React from 'react'
import Display from './Display'
import SearchBar from './SearchBar'
import { useEffect, useState } from 'react';
import { useAPI } from '../hooks/apis/General.ts';

export default function Homepage() {

    const [playlists, setPlaylists] = useState('');
    const [error, setError] = useState('');
    const api = useAPI("/me/playlists");

    useEffect(() => {
        api
            .getEndpoint()
            .then((data) => {
                setPlaylists(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });
    }, []);

    return (
        <div className='tab'>
            <SearchBar />
            <Display title="My playlists" data={playlists.items} />
        </div>
    )
}