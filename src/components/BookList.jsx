import React, { useContext, useEffect } from 'react'
import { BooksContext, FilterContext } from '../context'
import BookCard from './BookCard'
import $ from 'jquery'
import noPhoto from '../img/noPhoto.png'
const BookList = ({ limit, ...props }) => {
      const { books, setBooks } = useContext(BooksContext)

      console.log(limit);


      return (
            <div className='booksList'>
                  {
                        books.map((book, index) => (index < limit) ?
                              <BookCard
                                    img={book.volumeInfo.imageLinks?.thumbnail || noPhoto}
                                    authors={book.volumeInfo.authors}
                                    name={book.volumeInfo.title}
                                    categories={book.volumeInfo.categories}
                                    bookId={book.id} /> : "")
                  
                  }
            </div>
      )
}

export default BookList