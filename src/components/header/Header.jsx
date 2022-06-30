import React from 'react'
import MyInput from '../input/MyInput'
import MySelect from '../select/MySelect'
import background from '../../img/books.jpeg'

const Header = (props) => {
      const categories = ["all", "art", "biography", "computers", "history", "medical", "poetry"];
      const sorting = ["relevance", "newest"]
      return (
            <header className='header'>
                  <div className="content">
                        <h1>Search for books</h1>
                        <MyInput />
                        <div className="filters">
                              <div className="categories">
                                    Categories
                                    <MySelect options={categories}/>
                              </div>
                              <div className="sorting">
                                    Sorting by
                                    <MySelect options={sorting}/>
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