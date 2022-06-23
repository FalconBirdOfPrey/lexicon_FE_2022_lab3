import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="container">
            <h1>Welcome to my blogs!</h1>
            <ul className="nav-links">
                <li><NavLink to = "/" className='nav-link'>Home</NavLink></li>
                <li><NavLink to = "/create" className='nav-link'>Create</NavLink></li>
                <li><NavLink to = "/overview" className='nav-link'>Overview</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar