import React from 'react'
import Card from './Card'

export default function Display({ title, data, categoryBlocks }) {

    const cards = data ?? [];

    return (
        <div className="display">
            <h3 className='display-title'>{title}</h3>
            <div className="display-grid">
                {cards?.map(card => {
                    return <Card key={card.id} cover={card.images[0].url} albumName={card.name} idLink={card.id} owner={card.owner.display_name} />
                })}
                {categoryBlocks?.map(block => {
                    return <Card key={block.id} cover={block.icons[0].url} albumName={block.name} categoryLink={block.id} />
                })}
            </div>
        </div>
    )
}
