import React from 'react'
import Github from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialLinks'>
                <LinkedInIcon />
                <Github />
            </div>
            <p>©Copyright {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;