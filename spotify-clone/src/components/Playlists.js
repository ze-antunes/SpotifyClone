import React, { useEffect, useState } from 'react';
import { useAPI } from '../hooks/apis/General.ts';
import Display from './Display';

export default function Playlists() {

    const [fetchData, setFetchData] = useState('');
    const [error, setError] = useState('');
    const api = useAPI("/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6");

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
            {fetchData.artists?.map(artist => {
                // console.log(artist)
                return <Display title={artist.name} key={artist.id} id={artist.id} />
            })}
            {/* <Display items={artists.items} title={"Daft Punk"} /> */}
        </div>
    );
}
