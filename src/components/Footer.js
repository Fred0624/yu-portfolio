import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css'
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialLinks'>
                <Link href='https://www.linkedin.com/in/yu-xiong/'>
                <LinkedInIcon />
                </Link>
                <Link href='https://github.com/Fred0624'>
                <GitHubIcon />
                </Link>
                <EmailIcon />
            </div>
            <p>©Copyright {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;