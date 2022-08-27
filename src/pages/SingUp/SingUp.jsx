import React from 'react'
import MInput from '../../components/Input/MInput'
import MButton from '../../components/Button/MButton'

import './singup.css'

const SingUp = () => {
  return (
    <div className='main'>
      <div className='box'>
        <div className='logo'></div>
        <div className='form'>
          <MInput name='Name' type='text' placeholder='plece enter your full name' />
          <MInput name='Contact' type='text' placeholder='plece enter your contact number' />
          <MInput name='Address' type='text' placeholder='plece enter your full name' />
          <MInput name='User Name' type='text' placeholder='plece enter your User name' />
          <MInput name='password' type='password' placeholder='plece enter your password' />
        </div>
        <div className='button'>
          <MButton name='Sing Up' backgroundColor='blue' />
          <MButton name='Login' backgroundColor='red' />
        </div>
      </div>
    </div>
  )
}

export default SingUp