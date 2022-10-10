import React, { useEffect, useState } from 'react'
import { fetchQueryMovie } from 'api/api';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import { useSearchParams } from 'react-router-dom';
import './Movie.css'
import Loader from 'components/Loader/Loader';

export default function Movie() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

    const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
    };
  
  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true)
      try {
        const data = await fetchQueryMovie(productName);
        setMovies(data.results)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }
    if (productName) {
      fetchMovie();
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let notFound = false;

  const handleChange = (e) => {
    setSearch(e.target.value);
    updateQueryString(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const data = await fetchQueryMovie(search);
      setMovies(data.results)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="wrapper">
      <div>
        <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" name="search" value={productName}/>
      <button className="search-btn" type="submit">Search</button>
        </form>
      </div>
      <ul className="movies-list">
        {loading && <Loader />}
        {movies && <MoviesItem data={movies} />}
        {error && <p>An unexpected error occurred</p>}
        {notFound && <p>Sorry, movie not found</p>}
      </ul>
    </main>
  )
}
