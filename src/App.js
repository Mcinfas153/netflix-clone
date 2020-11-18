import React from 'react';
import './App.css';
import Row from './Row';
import request from './requests';
import Nav from './Nav';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Row
        title="UPCOMING MOVIES"
        fetchUrl={request.ftechUpcomingMovies}
        isLargerRow={true}>
      </Row>
      <Row
        title="POPULAR MOVIES"
        fetchUrl={request.fetchPopularMovies}>
      </Row>
      <Row
        title="TOP RATED"
        fetchUrl={request.fetchTopRated}>
      </Row>
      <Row
        title="NOW PLAYING"
        fetchUrl={request.fetchNowPlaying}>
      </Row>
      <Row
        title="GENERE"
        fetchUrl={request.fetchGenere}>
      </Row>
    </div>
  );
}

export default App;
