import React from 'react'
import Card from './Card'

import { useEffect, useState } from 'react';
import { useAPI } from '../hooks/apis/General.ts';

export default function Display({ title, id }) {

    const [elements, setElements] = useState('');
    const [error, setError] = useState('');
    const api = useAPI(`/artists/${id}/albums?include_groups=single%2Cappears_on&market=ES&limit=20&offset=5`);

    useEffect(() => {
        api
            .getEndpoint()
            .then((data) => {
                setElements(data);
                console.log(data);
            })
            .catch(() => {
                setError(error);
            });
    }, []);

    return (
        <div className="display">
            <h3 className='display-title'>{title}</h3>
            <div className="display-grid">
                {elements.items?.map(item => {
                    // console.log(item)
                    return <Card key={item.id} cover={item.images[1].url} albumName={item.name} artist={item.artists[0].name} />
                })}
            </div>
        </div>
    )
}
