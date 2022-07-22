import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import request from 'superagent'
import $ from 'jquery'
import Loading from '../components/UI/loading/Loading'

const ProductPage = () => {
  const params = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    if (book === undefined) {

      request.get("https://www.googleapis.com/books/v1/volumes/" + params.bookId)
        .then((data) => {
          setBook(data.body)
        })
    }
    else
      $("#description").html(book.volumeInfo.description);
  }, [])


    
  return (
    book === undefined ?
      <Loading/> :

      <div>
        <div className="bookContainer">
          <div className="imgBox">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
          </div>
          <div className="infotrmation">
            <div className="categories">{book.volumeInfo.categories === undefined ? "" : book.volumeInfo.categories.join(' / ')}</div>
            <h1 className="name">{book.volumeInfo.title}</h1>
            <div className="author">{(book.volumeInfo.authors !== undefined) ? book.volumeInfo.authors.map(e => <span>{e} </span>) : ""}</div>
            <div className="description" id="description"></div>
          </div>
        </div>
      </div>
  )
}

export default ProductPage