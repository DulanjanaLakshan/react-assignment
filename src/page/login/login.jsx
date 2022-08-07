import React from 'react'
import './login.css'

const LoginForm = () => {
  return (
    <div className='main__panale'>
        <div className='login__form'>
          <div id='box_lable'>
            <div id='icon_image'></div>
            <h3>Welcome To Login</h3>
          </div>
          <div id='box_form'>
            <input type="text" placeholder='UserName'/>
            <input type="password" placeholder='Password'/>
          </div>
          <div id='box_button'>
            <div id='btn_login'><a href="/login" id='a_login'>Login</a></div>
            <h5>Create new user account? <a href="/singup">click here</a></h5>
          </div>
        </div>
    </div>
  )
}

export default LoginForm