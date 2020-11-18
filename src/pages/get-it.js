import React from "react"
import SideBar from '../components/SideBar';
import GoogleLogo from '../assets/google.png'
import Logo from '../assets/WrapLogo.png'
import Secimg from '../assets/topic.jpg'
import styles from '../styles/getit.module.css'

function Getit(){
    return(
        <div>
            <SideBar/>
            <div className={styles.getCont}>
                <div className={styles.centerCont}>
                    <div className={styles.extensionCont}>
                        <img  className={styles.img} src={GoogleLogo} alt='image'/>
                        <div className={styles.starter} >
                            <h1 > 1.  Start Webwrap </h1>
                            <p> You can start using Webwrap here by clicking <a> Webwrap</a> </p>
                            <p> for a more complete experience go ahead install Webwrap. 
                                You will be able to start inviting followers and sharing you reviews in minutes </p> 
                        <div className={styles.buttoncont}> 
                            <button onClick={() => window.open('https://chrome.google.com/webstore/detail/webwrap/ndgbomimpkpkhdgfjamadadpmfmbajbi?hl=en','_blank')} className={styles.but}> Chrome Extension </button> 
                            <button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.webwrap.androidservice&hl=en_US&gl=US', '_blank')} className={styles.but}> Android App (Beta)</button></div>
                        </div>               
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.end} >    
                        <iframe className={styles.image}  width="560" height="315" src="https://www.youtube.com/embed/A0CAJ6AXe0I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <b/>
                        <iframe className={styles.image} width="560" height="315" src="https://www.youtube.com/embed/s5ZCREanpBg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div> 
                <br />   
            </div>
        </div>
    )
};

export default Getit;