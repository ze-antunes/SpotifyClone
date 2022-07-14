import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {

    return (
        <div>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="icon">
                <div className="menu"></div>
            </label>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/playlists">Playlists</Link></li>
                </ul>
            </nav>
        </div>
    )
}
