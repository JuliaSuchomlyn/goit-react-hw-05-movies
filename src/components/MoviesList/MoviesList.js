import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieItem, MovieLink, MoviesTitle, FilmList } from './MoviesList.styled';

const MoviesList = ({ movies, titlePage = null }) => {
  const location = useLocation();

  return (
    <div className='container__element'>
      {titlePage && <MoviesTitle>{titlePage}</MoviesTitle>}

      <FilmList>
        {movies.map(({ id, title, name }) => (
          <MovieItem key={id}>
            <MovieLink
              to={`/movies/${id}`}
              state={{ from: location }}>
              {title || name}
            </MovieLink>
          </MovieItem>
        ))}
      </FilmList>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
  titlePage: PropTypes.string,
};

export default MoviesList;