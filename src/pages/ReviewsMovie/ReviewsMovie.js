import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../service/api'

const ReviewsMovie = () => {
  const [reviewMovie, setReviewMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieReviews(movieId)
      .then(data => {
        setReviewMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  if (!reviewMovie) {
    return;
  }

  return (
    <div className='container__element'>
      {reviewMovie.length > 0 ? (
        <ul>
          {reviewMovie.map(({ id, author, content }) => (
            <li key={id}>
              Author: <b>{author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Reviews not found</div>
      )}
    </div>
  );
};

export default ReviewsMovie;