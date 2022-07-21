import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../hooks/apis/General.ts';

export default function Playlistpage() {
    const [playlistTracks, setPlaylistTracks] = useState('');
    const [playlistData, setPlaylistData] = useState('');
    const { id } = useParams();

    const playlistTracksRequest = useAPI(`/playlists/${id}/tracks`);
    const playlistDataRequest = useAPI(`/playlists/${id}`);

    useEffect(() => {
        playlistTracksRequest
            .getEndpoint()
            .then((data) => {
                setPlaylistTracks(data);
                // console.log(data);
            })
            .catch(() => { });

        playlistDataRequest
            .getEndpoint()
            .then((data) => {
                setPlaylistData(data);
                // console.log(data);
            })
            .catch(() => { });
    }, []);

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
