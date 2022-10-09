import axios from "axios";

const API_KEY = 'ade224e438a5cac910232dacab4d697a';
const BASE_URL = 'https://api.themoviedb.org/3';

const TRENDING_MOVIE = '/trending/movie/week';
const QUERY_MOVIE = '/search/movie';

export const fetchPopularMovie = async () => {
    const { data } = await axios.get(`${BASE_URL}${TRENDING_MOVIE}?api_key=${API_KEY}`)
    return data;
}

export const fetchMovieDetails = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    return data;
}

export const fetchQueryMovie = async (query) => {
  const { data } = await axios.get(`${BASE_URL}${QUERY_MOVIE}?api_key=${API_KEY}&query=${query}`)
  return data;
}


export const fetchActorsMovie = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
  return data;
}

export const fetchReviewsMovie = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
  return data;
}

