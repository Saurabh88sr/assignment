import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='btn btn-success'>{props.name}</button>
    </div>
  )
}

export default Button
