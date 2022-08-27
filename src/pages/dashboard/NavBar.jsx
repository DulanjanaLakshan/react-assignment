import React from 'react'
import './Navbar.css'

const NavBar = () => {
    return (
        <div className='nav'>
            <nav>
                <ul>
                    <li><a href="" className='active'>Home</a></li>
                    <li><a href="">Item</a></li>
                    <li><a href="">Customer</a></li>
                    <li><a href="">User</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar