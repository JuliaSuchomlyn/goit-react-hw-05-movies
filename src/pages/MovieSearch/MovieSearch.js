import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../service/api'
import MoviesList from 'components/MoviesList/MoviesList';
import Loading from 'components/Loading/Loading';
import { FormLabel, FormRequest } from './MovieSearch.styled';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovie] = useState(null);
  const [totalRezultMovie, setTotalRezMovie] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState(query);

  useEffect(() => {
    if (query === '') return;

    setMovie(null);
    setTotalRezMovie(null);
    setShowLoading(true);

    API.getMoviesQuery(query)
      .then(data => {
        setMovie(data.results);
        setTotalRezMovie(data.total_results);
        setShowLoading(false);
      })
      .catch(console.log);
  }, [query]);

  const handleInputChange = e => {
    setInputSearch(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const queryNormalized = form.query.value.toLowerCase().trim();

    setSearchParams({ query: queryNormalized });
    // form.reset();
  };

  return (
    <>
      <FormRequest onSubmit={handleSubmit} >
        <FormLabel>
          <input
            type="text"
            name="query"
            
            value={inputSearch}
            onChange={handleInputChange}
            placeholder="Enter movie name"
          />
        </FormLabel>
        

        <button type="submit" >
          Search
        </button>
      </FormRequest>

      {showLoading && <Loading />}
      {movies && <MoviesList movies={movies} />}

      {totalRezultMovie === 0 && <div>Not found movies</div>}
    </>
  );
};

export default MovieSearch;