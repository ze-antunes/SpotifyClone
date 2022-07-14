import React from 'react'
import Display from './Display'

export default function Homepage() {
    return (
        <div className='tab'>
            <Display title={"Good Afternoon"}/>
            <Display title={"New Releases"}/>
            <Display title={"Recent Played"}/>
        </div>
    )
}
