import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <GitHubIcon />
                <LinkedInIcon />
                <TwitterIcon />
            </div>
            <p> &copy; 2022 naderik.info </p>
        </div>
    )
}

export default Footer