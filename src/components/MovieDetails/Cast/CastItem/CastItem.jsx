import { nanoid } from 'nanoid'
import React from 'react'
import './CastItem.css'

export default function CastItem({data}) {
  const IMAGE_URL = 'https://images.tmdb.org/t/p/w500';
  return data.map(({ profile_path, original_name, character, know_for_department }) => {
    return <li className="cast-item" key={nanoid()}>
      {profile_path ? <img
        className="cast-img"
        src={`${IMAGE_URL}${profile_path}`}
        alt={original_name} />
        : <img
          className="cast-img"  
          src="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg"
          alt={original_name}></img>}
      <p>{original_name}</p>
      <p>{know_for_department}</p>
      <p>Character: {character}</p>
    </li>
  })
}
