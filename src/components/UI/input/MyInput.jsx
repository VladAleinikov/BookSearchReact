import React, { useContext } from 'react'
import search from '../../../img/icons/search.svg'
import $ from 'jquery'
import request from 'superagent'
import { BooksContext } from '../../../context'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
const MyInput = (props) => {
  const { books, setBooks } = useContext(BooksContext)
  
  useEffect(() => {
    const getBooks = () => {
      setBooks([])
      
      request.get('https://www.googleapis.com/books/v1/volumes')
        .query({ q: $("#searchInput").val() })
        .then((data) => {
          console.log(data);
          setBooks([...data.body.items])
        })
    }
    $("#searchBtn").on("click", (ev) => {
      getBooks();
    })
    $("#searchInput").keypress((e) => {
      if (e.keyCode === 13)
        getBooks();
    })
  })

  return (
    <div className='input'>
      <input type="text" id="searchInput" />
      <NavLink to='/' className="searchBtn" id="searchBtn">
        <img src={search} alt="search" />
      </NavLink>
    </div>
  )
}

export default MyInput