import React from 'react'
import './MButton.css'



const MButton = (props) => {
  return (
    <div className='MButton' style={{backgroundColor:`${props.backgroundColor}`}}>
      {props.name}
    </div>
  )
}

export default MButton