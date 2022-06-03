import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-button'>
                <button>
                </button>
            </div>
            <div className='navbar-links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/projects'>Projects</Link>
            </div>
        </div>
    )
}

export default Navbar