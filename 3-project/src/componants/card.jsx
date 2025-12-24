import React from 'react'

const Card = (e) => {
  return (
    <div className='card'>
      <h2 className='c-h'>{e.title}</h2>
      <hr></hr>
      <p className='c-p'>{e.notes}</p>
    </div>
  )
}

export default Card