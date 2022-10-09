import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./Loader/Loader";

import Home from 'pages/Home/Home';
import SharedLayout from "./SharedLayout/SharedLayout";

const Movie = lazy(() => import("pages/Movie/Movie"));
const Reviews = lazy(() => import("./MovieDetails/Reviews/Reviews"));
const Cast = lazy(() => import("./MovieDetails/Cast/Cast"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const NotFoundPage = lazy(() => import("./NotFoundMessage/NotFoundPage"));


export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<Suspense fallback={<Loader/>}><Movie/></Suspense>} />
          <Route path="/movie/:id" element={<Suspense fallback={<Loader/>}><MovieDetails /></Suspense>}>
            <Route path="cast" element={<Suspense fallback={<Loader/>}><Cast /></Suspense>} />
            <Route path="reviews" element={<Suspense fallback={<Loader/>}><Reviews /></Suspense>} />
          </Route>
          <Route path="*" element={<Suspense fallback={<Loader/>}><NotFoundPage /></Suspense>} />
        </Route>
      </Routes>
      </div>
  );
};
