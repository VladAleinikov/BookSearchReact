import React, { useContext, useEffect } from 'react'
import MyInput from '../input/MyInput'
import MySelect from '../select/MySelect'
import background from '../../../img/books.jpeg'
import { BooksContext, FilterContext } from '../../../context'
import $ from 'jquery'
const Header = (props) => {
      const categories = ["All", "Art", "Biography", "Computers", "History", "Medical", "Poetry"];
      const sorting = ["relevance", "newest"]
      const { filters, setFilters } = useContext(FilterContext);
      const { books, setBooks } = useContext(BooksContext)

      useEffect(() => {
            const sortCategories = (array, category) => {
                  for (let i = 0; i < array.length; i++) {
                        if (array[i].volumeInfo.categories.indexOf(category) != -1) {
                              array.unshift(array[i]);
                              array.splice(i + 1, 1);
                        }
                  }
                  return array;
            }
            const sortBooks = (array, filter) => {
                  if (filter == "relevance")
                        array.sort((a, b) => (b.volumeInfo.averageRating - a.volumeInfo.averageRating));
                  else if (filter == "newest")
                        array.sort((a, b) => (b.volumeInfo.publishedDate - a.volumeInfo.publishedDate));
                  return array;
            }
            $("#categoriesSelect").change(e => {
                  if (filters.category != $('#categoriesSelect').val())
                        setFilters({
                              category: $('#categoriesSelect').val(),
                              sorting: filters.sorting
                        });
                  console.log($('#categoriesSelect').val());
                  console.log(filters.category);
                  if (filters.categories !== "all")
                        setBooks(sortCategories(books, filters.category));

            })
            $("#sortSelect").change(e => {
                  setFilters({
                        category: filters.category,
                        sorting: $('#sortSelect').val()
                  })
                  setBooks(sortBooks(books, filters.sorting))
            })
      })
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