import React from 'react'
import logo from '../../assets/images/logo.svg'

function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-div">
                        <img src={logo} className="logo" alt="" />
                        <div className='humberger'>
                            <div className='line line1'></div>
                            <div className='line line2'></div>
                            <div className='line line3'></div>
                        </div>
                    </div>
                </div>
                <nav className='mt-4'>
                    <div className="container">
                        <div className="menu">
                            <ul className='list-unstyled'>
                                <li><a href="#!">Home</a></li>
                                <li><a href="#!">About Us</a></li>
                                <li><a href="#!">Merch</a></li>
                                <li><a href="#!">Dev Blogs</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header