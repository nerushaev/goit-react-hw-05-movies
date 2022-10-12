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
      setSearch(productName)
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
  }, [productName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateQueryString(e.target.elements.search.value)
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

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  
  return (
    <main className="wrapper">
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" name="search" value={search}/>
      <button className="search-btn" type="submit">Search</button>
        </form>
      </div>
      <ul className="movies-list">
        {loading && <Loader />}
        {movies && <MoviesItem data={movies} />}
        {movies.length === 0 && <p>Sorry, movie not found</p>}
        {error && <p>Unexpected error...</p>}
      </ul>
    </main>
  )
}
