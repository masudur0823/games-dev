import React from 'react'
import logo from '../../assets/images/logo.svg'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo-div">
                    <NavLink to="/"><img src={logo} className="logo" alt="" /></NavLink>
                </div>
            </div>
            <nav className='mt-4'>
                <div className="container">
                    <div className="menu">
                        <ul className='list-unstyled'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="#!">Merch</NavLink></li>
                            <li><NavLink to="/devblogs">Dev Blogs</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header