import { useEffect, useState } from 'react';
import { useAPI } from '../hooks/apis/General.ts';
import Display from './Display';
import React from 'react'
import SearchBar from './SearchBar'

export default function Searchpage() {
    const [categoriesData, setCategoriesData] = useState('');
    const [featuredPlaylistsData, setfeaturedPlaylistsData] = useState('');
    const [newReleasesData, setNewReleasesData] = useState('');
    const [recommendationsData, setRecommendationsData] = useState('');
    const [error, setError] = useState('');
    const categoriesDataRequest = useAPI("/browse/categories");
    const featuredPlaylistsDataRequest = useAPI("/browse/featured-playlists");
    const newReleasesDataRequest = useAPI("/browse/new-releases");
    const recommendationsDataRequest = useAPI("/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA");

    useEffect(() => {
        categoriesDataRequest
            .getEndpoint()
            .then((data) => {
                setCategoriesData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });
        featuredPlaylistsDataRequest
            .getEndpoint()
            .then((data) => {
                setfeaturedPlaylistsData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });
        newReleasesDataRequest
            .getEndpoint()
            .then((data) => {
                setNewReleasesData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });
        recommendationsDataRequest
            .getEndpoint()
            .then((data) => {
                setRecommendationsData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });
    }, []);

    return (
        <div className='tab'>
            <SearchBar />
            <Display title="Categories" blocks={categoriesData?.categories?.items} />
            <Display title="Featured Playlists" data={featuredPlaylistsData?.playlists?.items} />
            {/* <Display title="New Releases" blocks={newReleasesData?.albums?.items} /> */}
        </div>
    );
}
