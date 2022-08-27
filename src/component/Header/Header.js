import React from 'react'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import activeClass from "../../assets/css/nav.module.css";

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
                            <li>
                                <NavLink
                                    to="/"
                                    className={(navInfo) =>
                                        navInfo.isActive ? activeClass.active_nav : ""
                                    }
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={(navInfo) =>
                                        navInfo.isActive ? activeClass.active_nav : ""
                                    }
                                >About Us</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/merch"
                                    className={(navInfo) =>
                                        navInfo.isActive ? activeClass.active_nav : ""
                                    }
                                >Merch</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/devblogs"
                                    className={(navInfo) =>
                                        navInfo.isActive ? activeClass.active_nav : ""
                                    }
                                >Dev Blogs</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header