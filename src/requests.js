const API_KEY = 'ce0c0e31b66477bafa508e1f115e80a4';

const requests = {
    fetchEnglishMovies: 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY + '&language=en-US',
    fetchPopularMovies: 'movie/popular?api_key=' + API_KEY + '&language=en-US&page=1',
    ftechUpcomingMovies: '/movie/upcoming?api_key=' + API_KEY + '&language=en-US&page=1',
    fetchNowPlaying: 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY + '&language=en-US&page=1',
    fetchTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1',
    fetchGenere: 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&language=en-US&with_genres=28',
}

export default requests;