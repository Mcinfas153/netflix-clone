import React, { useState, useEffect } from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import queryString from 'query-string';
import './row.css';


function Row({ title, fetchUrl, isLargerRow }) {
    const [movies, setMovies] = useState([]);
    const [fetchTrailerUrl, setFetchTrailerUrl] = useState('');
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //console.log(request.data.results);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        console.log(movie);
        fetchTrailerUrl ?
            setFetchTrailerUrl('')
            :
            movieTrailer(movie?.original_title, movie?.release_date.split('-')[0])
                .then(
                    url => {
                        const fullUrl = new URL(url);
                        let params = new URLSearchParams(fullUrl.search);
                        let urlCode = params.get("v"); // is the string "Jonathan"
                        setFetchTrailerUrl(urlCode);
                    }
                );
    }



    return (
        <div className="row">
            <h1 className="row__title">{title}</h1>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargerRow && 'row__poster__big'}`}
                        src={`${imageBaseUrl}${isLargerRow ? movie.poster_path : movie.poster_path}`}
                        alt={movie.original_title}
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>
            {fetchTrailerUrl && <YouTube videoId={fetchTrailerUrl} opts={opts} />}

        </div>
    );
}

export default Row;