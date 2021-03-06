
import React from 'react'
import more from '../../../img/icons/expand_more.svg'

const MySelect = ({ options, selectID, ...props }) => {
  return (
     <div className='select' >
      <select id={selectID}>
        {
          options.map((e) => { return <option value={e}>{e}</option>; })
        }
      </select>
      <img className='expand_more' src={more} alt="expand more" />
    </div>
  )
}

export default MySelect