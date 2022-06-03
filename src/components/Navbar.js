import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [expandNav, setExpandNav] = React.useState(false);
    const location = useLocation();
    React.useEffect(() => {
        setExpandNav(false);
    }, [location]);
    return (
        <div className='navbar' id={expandNav ? "open" : "close"}>
            <div className='toggleButton'>
                <button onClick={
                    () => {
                        setExpandNav((prev) => !prev)
                    }}>
                    <MenuIcon />
                </button>
            </div>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/projects'>Projects</Link>
            </div>
        </div>
    )
}

export default Navbar