import React, { useContext } from 'react'
import BookList from '../components/BookList'
import { BooksContext } from '../context'

const SearchPage = () => {
  const { books, setBooks } = useContext(BooksContext)
  return (
    <div className="searchPage">
      <div className="numOfBooks">Found {books.length} results</div>
      <BookList />
      <div className="loadMoreBtn">Load More</div>
    </div>
  )
}

export default SearchPage;