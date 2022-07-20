import { useEffect, useState } from 'react';
import { useAPI } from '../hooks/apis/General.ts';
import Display from './Display';
import React from 'react'
import SearchBar from './SearchBar'

export default function Searchpage() {
    const [fetchData, setFetchData] = useState('');
    const [error, setError] = useState('');
    // const api = useAPI("playlists/06O8xK0n7B5Nqy0oZaRgOl/tracks?market=ES&fields=items(added_by.id%2Ctrack(name%2Chref%2Calbum(name%2Chref)))&offset=5");
    const api = useAPI("/artists/7oPftvlwr6VrsViSDV7fJY");

    useEffect(() => {
        api
            .getEndpoint()
            .then((data) => {
                setFetchData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });
    }, []);

    return (
        <div className='tab'>
            <SearchBar />
        </div>
    );
}
