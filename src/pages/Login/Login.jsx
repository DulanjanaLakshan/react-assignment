import React from 'react'
import MButton from '../../components/Button/MButton'
import MInput from '../../components/Input/MInput'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='main_div'>
            <div className='form_div'>
                <div className='user_icon'>
                    <div className='icon'></div>
                    <h2>Wellcome to Login</h2>
                </div>
                <div className='form_panle'>
                    <form action="" className='form'>
                        <MInput name='User Name' type='text' placeholder='Enter Your Username' width='w-90' />
                        <MInput name='Password' type='password' placeholder='Enter Your Password' width='w-90' />
                    </form>
                </div>
                <div className='button_div'>
                    <Link to="/singup">
                        <MButton name='Sing Up' backgroundColor='blue' />
                    </Link>
                    <Link to="/dashboard">
                    <MButton name='Login' backgroundColor='red' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login