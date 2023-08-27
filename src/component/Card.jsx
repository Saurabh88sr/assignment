import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="card">
        <div className="box"></div>
        <div className='lilday'>
        <h3 className='day'>{props.day}</h3>
        <p>{props.availability}</p>

        </div>
       
    </div>

    </>
  )
}

export default Card
