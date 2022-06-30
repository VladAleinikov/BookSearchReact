import React, { useContext } from 'react'
import search from '../../img/icons/search.svg'
import $ from 'jquery'
import request from 'superagent'
import { BooksContext } from '../../context'
const MyInput = (props) => {
  const {books, setBooks} = useContext(BooksContext)
  $('#searchBtn').on('click', (e) => {
    console.log($("#searchInput").val());
    request
      .get('https://www.googleapis.com/books/v1/volumes')
      .query({ q: $("#searchInput").val() })
      .then((data) => {
        setBooks([...data.body.items])
      })
  })

  return (
    <div className='input'>
      <input type="text" id="searchInput" />
      <div className="searchBtn" id="searchBtn">
        <img src={search} alt="search" />
      </div>
    </div>
  )
}

export default MyInput