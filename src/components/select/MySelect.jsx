
import React from 'react'
import more from '../../img/icons/expand_more.svg'

const MySelect = ({ options, ...props }) => {
  return (
    <div className='select'>
      <select >
        {
          options.map((e) => { return <option>{e}</option>; })
        }
      </select>
      <img className='expand_more' src={more} alt="expand more" />
    </div>
  )
}

export default MySelect