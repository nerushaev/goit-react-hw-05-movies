import React, { useEffect, useState } from 'react'
import { fetchActorsMovie } from 'api/api'
import { useParams } from 'react-router'
import CastItem from './CastItem/CastItem';

export default function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async (id) => {
    try {
      const data = await fetchActorsMovie(id);
      setMovieCast(data)
    } catch (e) {
      console.log(e);
    }
    }
    fetchMovieCast(id)
  }, [id])

  return (
    <ul className="cast-list">
      {movieCast.length !== 0 && <CastItem data={movieCast.cast} />}
    </ul>
  )
}
