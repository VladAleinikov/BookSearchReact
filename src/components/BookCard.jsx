import React from 'react'

const BookCard = ({ img, authors, categories, name, ...props }) => {
  return (

    <div className="card">
      <div className="imgBox">
        <img src={img} alt="" />
      </div>
      <div className="information">
        <div className="category">{categories.map(e => <span><u>{e}</u> </span>)}</div>
        <div className="name">{name}</div>
        <div className="authors">{authors.map(e => <span>{e} </span>)}</div>
      </div></div>
  )
}

export default BookCard
