import React, { useContext } from 'react'
import BookList from '../components/BookList'
import Loading from '../components/UI/loading/Loading'
import { BooksContext, FilterContext } from '../context'

const SearchPage = () => {
  const { books, setBooks } = useContext(BooksContext)


  return (
    books.length === 0 ?
      <Loading />
      :
      <div div className="searchPage" >
        <div className="numOfBooks">Found {books.length} results</div>
        <BookList />
        <div className="loadMoreBtn">Load More</div>
      </div >


  )
}

export default SearchPage;