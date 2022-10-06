import React from 'react'
import Github from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import '../styles/Footer.css'
import Link from '@material-ui/core/Link'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialLinks'>
                <Link href='https://www.linkedin.com/in/yu-xiong/'>
                <LinkedInIcon />
                </Link>
                <Link href='https://github.com/Fred0624'>
                <Github />
                </Link>
                <EmailIcon />
            </div>
            <p>©Copyright {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;