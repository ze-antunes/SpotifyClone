import React from 'react'
import Card from './Card'

export default function Display({title}) {
    return (
        <div className="display">
            <h3 className='display-title'>{title}</h3>
            <div className="display-grid">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
