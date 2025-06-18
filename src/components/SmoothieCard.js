import React from 'react'

const SmoothieCard = ({smoothie}) => {
  return (
    <div className='smoothie-card'>
    <h3>{smoothie.title}</h3>
    <p>{smoothie.method}</p>
    <div className="ratings">{smoothie.rating}</div>
    </div>
  )
}

export default SmoothieCard