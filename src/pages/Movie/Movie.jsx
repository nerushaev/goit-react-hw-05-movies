import React, { useEffect, useState } from 'react'
import { fetchQueryMovie } from 'api/api';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import { useSearchParams } from 'react-router-dom';
import './Movie.css'
export default function Movie() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

    const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchQueryMovie(productName);
      setMovies(data.results)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(true)
    }
  }
  

  return (
    <main className="wrapper">
      <div>
        <form onSubmit={handleSubmit}>
      <input onChange={(e) => updateQueryString(e.target.value)} type="text" name="search" value={productName}/>
      <button className="search-btn" type="submit">Search</button>
        </form>
      </div>
      <ul className="movies-list">
        {movies && <MoviesItem data={movies} />}
      </ul>
    </main>
  )
}
