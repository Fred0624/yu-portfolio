import React from 'react'
import Github from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialLinks'>
                <LinkedInIcon />
                <Github />
                <EmailIcon />
            </div>
            <p>©Copyright {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;