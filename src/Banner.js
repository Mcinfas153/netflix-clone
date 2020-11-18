import React, { useEffect, useState } from 'react';
import axios from './axios';
import request from './requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import './banner.css'


function Banner() {
    const [movie, setMovie] = useState([]);
    const [isOpen, setOpen] = useState(false)
    const [fetchTrailerUrl, setFetchTrailerUrl] = useState('');
    const randomNumber = 0;
    const autoplay = 1;
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(request.fetchGenere);
            console.log(response.data)
            setMovie(response.data.results[getRandomInt(randomNumber, response.data.results.length - 1)]);
        }
        fetchData();
    }, []);

    const handleClick = (movie) => {
        //console.log(movie);
        if (fetchTrailerUrl) {
            setFetchTrailerUrl('');
            setOpen(false);
        } else {
            movieTrailer(movie?.original_title, movie?.release_date.split('-')[0])
                .then(
                    url => {
                        const fullUrl = new URL(url);
                        let params = new URLSearchParams(fullUrl.search);
                        let urlCode = params.get("v"); // is the string "Jonathan"
                        setFetchTrailerUrl(urlCode);
                    }
                );
            setOpen(true);
        }
    }


    return (
        /* Banner */
        <header
            className="banner"
            style={{
                backgroundImage: `url(${imageBaseUrl + movie?.backdrop_path})`,
                height: '400px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                objectFit: 'contain',
                backgroundPosition: 'center center'
            }}>
            <div className="banner__content">
                <h1 className="banner__title">{movie?.original_title || movie?.name}</h1>
                <button className="banner__button" onClick={() => handleClick(movie)}>Play</button>
                <button className="banner__button">My List</button>
                <p className="banner__decsription">{truncate(movie?.overview, 300)}</p>
            </div>
            <div className="banner__fade__bottom"></div>
            <ModalVideo channel='youtube' autoplay={autoplay} isOpen={isOpen} videoId={fetchTrailerUrl} onClose={() => setOpen(false)} />
        </header>


    )
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function truncate(str, n) {
    return (str?.length > n) ? str.substr(0, n - 1) + '...' : str;
};

export default Banner
