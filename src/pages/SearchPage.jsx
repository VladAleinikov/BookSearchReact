import React, { useContext, useEffect, useState } from 'react'
import BookList from '../components/BookList'
import Loading from '../components/UI/loading/Loading'
import { BooksContext, FilterContext } from '../context'
import $ from 'jquery'
import request from 'superagent'
const SearchPage = () => {
  const { books, setBooks } = useContext(BooksContext)
  const [ limit, setLimit ] = useState(30);
  
  return (
    books.length === 0 ?
      <Loading />
      :
      <div div className="searchPage" >
        <div className="numOfBooks">Found {books.length} results</div>
        <BookList limit={limit} />
        <div className="loadMoreBtn" id="loadMoreBtn" onClick={(e) => { setLimit(limit + 30) }}>Load More</div>
      </div >


  )
}

export default SearchPage;