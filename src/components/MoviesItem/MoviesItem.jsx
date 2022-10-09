import React from 'react'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import './MoviesItem.css'

export default function MoviesItem({data}) {
  return data.map(({ title, id }) => {

    return <li className="movie-item" key={nanoid()}>
      <Link to={`/movie/${id}`}>{title}</Link>
      </li>
  })
}
