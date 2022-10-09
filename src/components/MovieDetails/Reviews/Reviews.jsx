import React, { useEffect, useState } from 'react'
import { fetchReviewsMovie } from 'api/api'
import { useParams } from 'react-router'
import ReviewsItem from './ReviewsItem/ReviewsItem';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();

  let needErrorMessage = false;

  useEffect(() => {
    const fetchMovieCast = async (id) => {
    try {
      const data = await fetchReviewsMovie(id);
      setMovieReviews(data)
    } catch (e) {
      console.log(e);
    }
    }
    fetchMovieCast(id)
  }, [id])


  if (movieReviews.total_results === 0) {
    needErrorMessage = true;
  }

  return (
    <ul className="reviews-list">
      {movieReviews.results && <ReviewsItem data={movieReviews.results} />}
      {needErrorMessage && <p>Sorry, reviews not found...</p>}
    </ul>
  )
}