import React from 'react'
import styles from '../styles/leaderBoard.module.css';
import Avatar from '@material-ui/core/Avatar';
import RateReviewIcon from '@material-ui/icons/RateReview';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ColorIcon from '@material-ui/icons/Assessment';

function IconBar() {
    return (
        <div className={styles.centerDivHeader}>
            <ul>
                <Avatar style={{backgroundColor: "#f1f1f1f1"}} className={styles.avatar}>
                    <RateReviewIcon style={{backgroundColor: "#f1f1f1", fill: "#fc8403"}} />
                </Avatar>
                <br/>
                <a>REVIEWS</a> 
            </ul>
            <ul>
                <Avatar style={{backgroundColor: "#f1f1f1f1"}} className={styles.avatar} >
                    <RemoveRedEyeIcon style={{backgroundColor: "#f1f1f1", fill: "#21b5a1"}} />
                </Avatar>
                <br/> 
                <a> FOLLOWERS </a> 
            </ul>
            <ul>
                <Avatar style={{backgroundColor: "#f1f1f1f1"}} className={styles.avatar} > 
                    <ThumbUpIcon style={{backgroundColor: "#f1f1f1", fill: "#a88a67"}}  />
                </Avatar>
                <br/> 
                <a> THUMBS UP </a> 
            </ul>
            <ul>
                <Avatar style={{backgroundColor: "#f1f1f1f1"}} className={styles.avatar} >
                    <PeopleAltIcon style={{backgroundColor: "#f1f1f1", fill: "#298fe3"}} />
                </Avatar>
                <br/>
                <a> INVITES </a>
            </ul>
            <ul>
                <Avatar style={{backgroundColor: "#f1f1f1f1"}} className={styles.avatar} >
                    <ColorIcon style={{backgroundColor: "#f1f1f1", fill: "#99781d"}} />
                </Avatar>
                <br/>
                <a> CREDIBILITY </a>
            </ul>
        </div>
    )
}

export default IconBar
