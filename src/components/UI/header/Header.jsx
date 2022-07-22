import React, { useContext, useEffect } from 'react'
import MyInput from '../input/MyInput'
import MySelect from '../select/MySelect'
import background from '../../../img/books.jpeg'
import { BooksContext, FilterContext } from '../../../context'
import $ from 'jquery'
import request from 'superagent'
const Header = (props) => {
      const categories = ["All", "Art", "Biography", "Computers", "History", "Medical", "Poetry"];
      const sorting = ["relevance", "newest"]
      const { filters, setFilters } = useContext(FilterContext);
      const { books, setBooks } = useContext(BooksContext)
      const getBooks = () => {
            setBooks([])

            request.get('https://www.googleapis.com/books/v1/volumes')
                  .query({
                        q: $("#searchInput").val() || "React",
                        maxResults: 40,
                        orderBy: $("#sortSelect").val()
                  })
                  .then((data) => {
                        setBooks([...data.body.items])
                        console.log(books);
                  })
      }
      const sortCategories = (array, category) => {
            for (let i = 0; i < array.length; i++) {
                  if (array[i].volumeInfo.categories != undefined)
                        if (array[i].volumeInfo.categories.indexOf(category) != -1) {
                              array.unshift(array[i]);
                              array.splice(i + 1, 1);
                        }
            }
            return array;
      }
      useEffect(() => {


            $("#searchBtn").on("click", (ev) => {
                  getBooks();
            })
            $("#searchInput").keypress((e) => {
                  if (e.keyCode === 13)
                        getBooks();
            })


            $("#categoriesSelect").change(e => {

                  setBooks(books.filter(e => {
                        if (e.volumeInfo.categories != undefined)
                              if (e.volumeInfo.categories.indexOf($('#categoriesSelect').val()) != -1)
                                    return e;
                  }))
                  /* if (filters !== "all")
                        setBooks(sortCategories(books, $("#categoriesSelect").val())) */


            })
            $("#sortSelect").change(e => {
                  getBooks()
            })
      }, [books])
      return (
            <header className='header'>
                  <div className="content">
                        <h1>Search for books</h1>
                        <MyInput />
                        <div className="filters">
                              <div className="categories">
                                    Categories
                                    <MySelect options={categories} selectID="categoriesSelect" />
                              </div>
                              <div className="sorting">
                                    Sorting by
                                    <MySelect options={sorting} selectID="sortSelect" />
                              </div>
                        </div>
                  </div>
                  <div className="background">
                        <img src={background} alt="books" />
                        <div className="layout"></div>
                  </div>

            </header>
      )
}

export default Header