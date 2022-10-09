import React, { useEffect, useState } from 'react';
import './Home.css'
import {fetchPopularMovie} from 'api/api';
import MoviesItem from 'components/MoviesItem/MoviesItem';

export default function Home() {
  const [trending, setTrending] = useState();

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await fetchPopularMovie();
        setTrending(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <main className="wrapper">
      <h2>Trending today</h2>
      <ul className="movies-list">
        {trending && <MoviesItem data={trending} />}
      </ul>
    </main>
  )
}
