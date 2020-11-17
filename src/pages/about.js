import React from 'react'
import SideBar from '../components/SideBar';
import BoxImage from '../assets/topic.jpg';
import AboutImage from '../assets/about.png';
import styles from '../styles/About.module.css';
import { Link } from 'gatsby';

function About() {
    return (
        <div className={styles.container}>
            <SideBar/>
                <div className={styles.centercont}>
                <div className={styles.contentBoxes}>
                <div className={styles.box}>  
                    <img className={styles.img} src={AboutImage} alt="image" />   
                </div>     
            </div>
            </div>   
        </div>
    )
};

export default About;
