import Cookies from 'js-cookie'
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useAPI } from '../hooks/apis/General.ts';

export default function Menu() {

    const handleLogout = () => {
        Cookies.remove('spotifyAuthToken');
        window.location.reload();
    }

    const [playlists, setPlaylists] = useState('');
    const [error, setError] = useState('');
    const api = useAPI("/me/playlists");

    useEffect(() => {
        api
            .getEndpoint()
            .then((data) => {
                setPlaylists(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });
    }, []);

    return (
        <div className='sideMenu'>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu" className="icon">
                <div className="menu"></div>
            </label>
            <div className='patch'></div>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/" onClick={handleLogout}>Log out</Link></li>
                </ul>
                <br />

                <ul>
                    {playlists.items?.map(playlist => {
                        return <li key={playlist.id}><Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link></li>
                    })}
                </ul>
            </nav>
        </div>
    )
}
