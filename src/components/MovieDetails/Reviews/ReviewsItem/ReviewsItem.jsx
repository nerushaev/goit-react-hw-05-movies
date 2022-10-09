import { nanoid } from 'nanoid';
import React from 'react'
import './ReviewsItem.css'

export default function ReviewsItem({data}) {
  return data.map(({author, content}) => {
    return <li className="reviews-item" key={nanoid()}>
      <span className="line"></span>
      <p className="author">Author: {author}</p>
      <p>{content}</p>
      <span className="line"></span>
    </li>
  })
}
