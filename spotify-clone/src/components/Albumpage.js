import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../hooks/apis/General.ts';

const Albumpage = () => {
    const [albumTracks, setAlbumTracks] = useState('');
    const [albumData, setAlbumData] = useState('');
    const { id } = useParams();

    const albumTracksRequest = useAPI(`/albums/${id}/tracks`);
    const albumDataRequest = useAPI(`/albums/${id}`);

    useEffect(() => {
        albumTracksRequest
            .getEndpoint()
            .then((data) => {
                setAlbumTracks(data);
                // console.log(data);
            })
            .catch(() => { });

        albumDataRequest
            .getEndpoint()
            .then((data) => {
                setAlbumData(data);
                console.log(data);
            })
            .catch(() => { });
    }, []);

    return (
        <div className='tab'>
            <h1>{albumData.name}</h1>
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