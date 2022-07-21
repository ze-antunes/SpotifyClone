import { useEffect, useState } from 'react';
import { useAPI } from '../hooks/apis/General.ts';
import Display from './Display';
import React from 'react'
import SearchBar from './SearchBar'

export default function Searchpage() {
    const [categoriesData, setCategoriesData] = useState('');
    const [featuredPlaylistsData, setfeaturedPlaylistsData] = useState('');
    const [newReleasesData, setNewReleasesData] = useState('');
    // const [recommendationsData, setRecommendationsData] = useState('');
    const [error, setError] = useState('');
    const api = useAPI();

    useEffect(() => {
        api
            .getCategories()
            .then((data) => {
                setCategoriesData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });

        api
            .getFeaturedPlaylists()
            .then((data) => {
                setfeaturedPlaylistsData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });

        api
            .getNewReleases()
            .then((data) => {
                setNewReleasesData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });
    }, []);

    return (
        <div className='tab'>
            <SearchBar />
            <Display title="Categories" categoryBlocks={categoriesData?.categories?.items} />
            <Display title="Featured Playlists" data={featuredPlaylistsData?.playlists?.items} />
            {/* <Display title="New Releases" blocks={newReleasesData?.albums?.items} /> */}
        </div>
    );
}
