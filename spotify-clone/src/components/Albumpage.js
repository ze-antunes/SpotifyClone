import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../hooks/apis/General.ts';

const Albumpage = () => {
    const [albumTracks, setAlbumTracks] = useState('');
    const { id } = useParams();

    const api = useAPI(`/albums/${id}/tracks`);

    useEffect(() => {
        api
            .getEndpoint()
            .then((data) => {
                setAlbumTracks(data);
                // console.log(data);
            })
            .catch(() => { });
    }, []);

    return (
        <div className='tab'>
            <h1>Albumspage</h1>
            <ul>
                {albumTracks && albumTracks.items?.map(item => {
                    return <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p><a href={`/artist/${item.artists[0].id}`}>{item.artists[0].name}</a></p></li>
                })}
            </ul>
        </div>
    );
}

export default Albumpage;