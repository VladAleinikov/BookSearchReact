import React from 'react'
import search from '../../img/icons/search.svg'
const MyInput = () => {
  return (
    <div className='input'>
      <input type="text" />
      <div className="searchBtn">
        <img src={ search} alt="search" />
      </div>
    </div>
  )
}

export default MyInput