import React from 'react'
import './style.css'


const MInput = (props) => {
    return (
        <div className='input_form'>
            <label>{props.name}</label>
            <input type={props.type} placeholder={props.placeholder} width={props.width}/>
        </div>
    )
}

export default MInput