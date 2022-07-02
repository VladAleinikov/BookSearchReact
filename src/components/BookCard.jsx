import React from 'react'
import { NavLink } from 'react-router-dom'

const BookCard = ({ img, authors, categories, name, bookId, ...props }) => {
  name = (name.length > 50) ? name.substring(0, 50) + "..." : name;
  return (

    <NavLink to={"/" + bookId} className="card">
      <div className="imgBox">
        <img src={img} alt="" />
      </div>
      <div className="information">
        <div className="category">{(categories !== undefined) ? categories.map(e => <span><u>{e}</u> </span>) : ""}</div>
        <div className="name">{name}</div>
        <div className="authors">{(authors !== undefined) ? authors.map(e => <span>{e} </span>) : ""}</div>
      </div>
    </NavLink>
  )
}

export default BookCard
