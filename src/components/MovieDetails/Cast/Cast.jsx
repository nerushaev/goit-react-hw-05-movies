import React, { useEffect, useState } from 'react'
import { fetchActorsMovie } from 'api/api'
import { useParams } from 'react-router'
import CastItem from './CastItem/CastItem';
import Loader from 'components/Loader/Loader';

export default function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieCast = async (id) => {
      setLoading(true)
    try {
      const data = await fetchActorsMovie(id);
      setMovieCast(data)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
    }
    fetchMovieCast(id)
  }, [id])

  return (
    <ul className="cast-list">
      {loading && <Loader />}
      {movieCast.length !== 0 && <CastItem data={movieCast.cast} />}
    </ul>
  )
}
