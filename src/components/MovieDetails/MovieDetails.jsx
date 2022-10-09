import React, { useEffect, useState } from 'react'
import { fetchMovieDetails } from 'api/api';
import { useParams, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import './MovieDetails.css'
import { Outlet } from 'react-router';

const getActiveClass = ({ isActive }) => {
  return isActive ? `film-link active` : `film-link`;
}

export default function MovieDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, setState] = useState(null);
  const IMAGE_URL = 'https://images.tmdb.org/t/p/w500';


  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        const result = await fetchMovieDetails(id);
        setState(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchMovie();
  }, [id])

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <main className="wrapper">
    <div className="film">
      <button className="go-back" onClick={goBack}>Go back</button>
      {state &&
        <div className="film-wrapper">
        <img className="film-poster" src={`${IMAGE_URL}${state.poster_path}`} alt="" />
        <div className="film-description">
        <p>{state.original_title}</p>
        <p>Overview: <span>{state.overview}</span></p>
        <p>Release date: <span className="film-description__span">{state.release_date}</span></p>
        <p>Rating: <span className="film-description__span">{state.vote_average}</span></p>
        </div>
        </div>}
      </div>
      <NavLink className={getActiveClass} to="cast">Cast</NavLink>
      <NavLink className={getActiveClass} to="reviews">Reviews</NavLink>
      <Outlet />
      </main>
  )
}
