import { Routes, Route } from "react-router-dom";
import Home from 'pages/Home/Home';
import SharedLayout from "./SharedLayout/SharedLayout";
import NotFoundPage from "./NotFoundMessage/NotFoundPage";
import MovieDetails from "./MovieDetails/MovieDetails";
import Cast from './MovieDetails/Cast/Cast'
import Reviews from "./MovieDetails/Reviews/Reviews";
import Movie from "pages/Movie/Movie";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      </div>
  );
};
