import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href='https://github.com/naderik' target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                <a href='https://linkedin.com/in/naderik' target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href='https://twitter.com/naderik_kaz' target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            </div >
            <p> &copy; 2022 naderik.info </p>
        </div >
    )
}

export default Footer