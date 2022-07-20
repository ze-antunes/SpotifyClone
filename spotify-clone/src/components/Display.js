import React from 'react'
import Card from './Card'

export default function Display({ title, data }) {

    const cards = data ?? [];
    console.log(data)

    return (
        <div className="display">
            <h3 className='display-title'>{title}</h3>
            <div className="display-grid">
                {cards?.map(card => {
                    return <Card key={card.id} cover={card.images[1].url} albumName={card.name} idLink={card.id} owner={card.owner.display_name} />
                })}
            </div>
        </div>
    )
}
