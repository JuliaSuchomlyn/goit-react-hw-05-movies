import { useState, useEffect } from 'react';
import * as API from '../service/api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    API.getTrandingMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(console.log);
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <MoviesList movies={movies} titlePage={'Trending today'} />
    </>
  );
};

export default Home;