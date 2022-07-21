import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../hooks/apis/General.ts';
import Display from './Display';

export default function Categorypage() {
    const [playlistsData, setPlaylistsData] = useState('');
    const { id } = useParams();
    const api = useAPI();

    useEffect(() => {
        api
            .getCategoryPlaylists(id)
            .then((data) => {
                setPlaylistsData(data);
                console.log(data);
            })
            .catch(() => { });
    }, []);

    return (
        <div className='tab'>
            <h1>{id}</h1>
            <Display data={playlistsData?.playlists?.items} />
        </div>
    );
}
