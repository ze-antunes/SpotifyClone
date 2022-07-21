import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../hooks/apis/General.ts';

export default function Playlistpage() {
    const [playlistTracks, setPlaylistTracks] = useState('');
    const [playlistData, setPlaylistData] = useState('');
    const { id } = useParams();
    const api = useAPI();

    useEffect(() => {
        api
            .getPlaylist(id)
            .then((data) => {
                setPlaylistData(data);
                // console.log(data);
            })
            .catch(() => { });

        api
            .getPlaylistTracks(id)
            .then((data) => {
                setPlaylistTracks(data);
                // console.log(data);
            })
            .catch(() => { });
    }, [window.location.pathname]);

    return (
        <div className='tab'>
            <h1>{playlistData.name}</h1>
            <ul>
                {playlistTracks && playlistTracks.items?.map(item => {
                    return <li key={item.track.id}>
                        <h3>{item.track.name}</h3>
                        <p><a href={`/artist/${item.track.artists[0].id}`}>{item.track.artists[0].name}</a></p>
                    </li>
                })}
            </ul>
        </div>
    );
}
