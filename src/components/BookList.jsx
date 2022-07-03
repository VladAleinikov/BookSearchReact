import React, { useContext, useEffect } from 'react'
import { BooksContext, FilterContext } from '../context'
import BookCard from './BookCard'
import $ from 'jquery'
const BookList = () => {
      const { books, setBooks } = useContext(BooksContext)




      return (
            <div className='booksList'>
                  {
                        books.map((book, index) => <BookCard
                              img={book.volumeInfo.imageLinks.thumbnail}
                              authors={book.volumeInfo.authors}
                              name={book.volumeInfo.title}
                              categories={book.volumeInfo.categories}
                              bookId={book.id} />)
                  }
            </div>
      )
}

export default BookList