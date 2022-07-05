import React, { useContext } from 'react'
import search from '../../../img/icons/search.svg'
import $ from 'jquery'
import request from 'superagent'
import { BooksContext } from '../../../context'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
const MyInput = (props) => {


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