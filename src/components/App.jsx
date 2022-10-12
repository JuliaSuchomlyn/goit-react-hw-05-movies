// import Home from 'pages/Home';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
// import {Home} from '../pages/Home'

const Home = lazy(() => import('../pages/Home'));
const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const CastMovie = lazy(() => import('../pages/CastMovie/CastMovie'));
const ReviewsMovie = lazy(() => import('../pages/ReviewsMovie/ReviewsMovie'));
const PageNotFoud = lazy(() => import('../pages/PageNotFound/PageNotFound'));


export const App = () => {
  return (
    <div className='container__element'>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<MovieSearch />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastMovie />} />
            <Route path="reviews" element={<ReviewsMovie />} />
          </Route>

          <Route path="*" element={<PageNotFoud />} />
        </Route>
      </Routes>
    </div>


    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
