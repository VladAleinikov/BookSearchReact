import React, { useContext } from 'react'
import { BooksContext } from '../context'
import BookCard from './BookCard'

const BookList = () => {
      const { books, setBooks } = useContext(BooksContext)
      return (
            <div className='booksList'>
                  {

                        books.map((book, index) => <BookCard
                                          img={book.volumeInfo.imageLinks.thumbnail}
                                          authors={book.volumeInfo.authors}
                                          name={book.volumeInfo.title}
                                          categories={book.volumeInfo.categories} />)
                  }
            </div>
      )
}

export default BookList