import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../hooks/apis/General.ts';

const Artistpage = () => {
    const [artistData, setArtistData] = useState('');
    const [artistAlbumsData, setArtistAlbumsData] = useState('');
    const { id } = useParams();

    const artistRequest = useAPI(`/artists/${id}`);
    const artistAlbumsRequest = useAPI(`/artists/${id}/albums`);

    useEffect(() => {
        artistRequest
            .getEndpoint()
            .then((data) => {
                setArtistData(data);
                // console.log(data);
            })
            .catch(() => { });

        artistAlbumsRequest
            .getEndpoint()
            .then((data) => {
                setArtistAlbumsData(data);
                console.log(data);
            })
            .catch(() => { });
    }, []);

    return (
        <div className='tab'>
            <h1>Artistpage</h1>
            <h2>{artistData.name}</h2>

            <ul>
                {artistAlbumsData && artistAlbumsData.items?.map(album => {
                    return <li key={album.id}><a href={`/album/${album.id}`}>{album.name}</a></li>
                })}
            </ul>
        </div>
    );
}

export default Artistpage;