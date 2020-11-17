import React from 'react'
import styles from '../styles/sidebar.module.css'
import Logo from '../assets/WrapLogo.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'gatsby';

function SideBar(){
    return(
        <div className={styles.sideBar}>
            <img className={styles.Logo}  src={Logo} />
            <br/>
            <ul className={styles.navlist}>
                <Link  className={styles.list} to="/" >Wraps</Link>
                <Link className={styles.list} to="/follows" >Follows</Link>
                <Link className={styles.list} to="/leaders" >Leaders</Link>
                <Link className={styles.list} to="/get-it" >Get it</Link>
                <Link className={styles.list} to="/about" >About</Link>
                <a className={styles.list} href="https://www.webwrap.com/get-webwrap/" >F.A.Q</a>
                <a className={styles.list} href="https://www.webwrap.com/privacy-policy" >Privacy</a>
                <a className={styles.list} href="https://www.webwrap.com/contact-us/" >Contact</a>
            </ul>
            <br/>
            <div className={styles.socialMedia}>  
                <YouTubeIcon 
                    onClick={() => window.open('https://www.youtube.com/channel/UComfGMN2ZTfKwSp9QXzSYvQ', '_blank')} 
                    className={styles.icon} />
                <FacebookIcon 
                    onClick={() => window.open('https://www.facebook.com/WebWrap.info/', '_blank')}  
                    className={styles.icon}/>
                <TwitterIcon 
                    onClick={() => window.open('https://twitter.com/webwrapi', '_blank')} 
                    className={styles.icon} />
            </div>
        </div>
    )
};

export default SideBar;