import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import SideBar from '../components/SideBar';
import styles from '../styles/leaderBoard.module.css';
import Avatar from '@material-ui/core/Avatar';
import RateReviewIcon from '@material-ui/icons/RateReview';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import ColorIcon from '@material-ui/icons/Assessment';
import PageviewIcon from '@material-ui/icons/Pageview';
import Logo from '../assets/WrapLogo.png';

function LeaderBoard(){
    const data = useStaticQuery(graphql`
        query ($shouldOrderByAddedDate: Boolean) {
            webwrap {
                queryLeaders(
                    from: 0, 
                    shouldOrderByAddedDate: $shouldOrderByAddedDate, 
                    size: 10, 
                    sortField: "reviewsCount"
                    ) {
                hasMore
                leaders {
                    id
                    picture
                    username
                    followersCount
                    reviewsCount
                    totalCredibilityScore
                }
                total
                }
            }
        }
    `);

    return(
        <div className={styles.main}>
            <SideBar/>
        
            <div className={styles.centerDiv}>
    
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
            
            {/* center div leader container */}
                <div className={styles.leaderCont} >
                    <h3> Your current position in the reviews leaderboard: #50  </h3>
                    <div className={styles.contentBoxes}>
                        {
                            data.webwrap.queryLeaders.leaders.map((leader) => {
                                return (
                                    <div className={styles.boxes} key={leader.id} >
                                        {
                                            leader.picture === null ? <Avatar className={styles.avt} alt="Remy Sharp" src={Logo} /> : <Avatar className={styles.avt} alt="Remy Sharp" src={leader.picture} />
                                        }
                                        <div className={styles.profile}>
                                            <h5> {leader.username} </h5>
                                            <table >
                                                <tr>
                                                    <td> {leader.reviewsCount} </td>
                                                    <td> {leader.followersCount} </td>
                                                </tr>
                                                <tr>
                                                <th> Reviews </th>
                                                <th>Followers</th>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className={styles.point}>
                                            <ColorIcon style={{fill: "#99781d"}} className={styles.pointicon} />
                                            {
                                                leader.totalCredibilityScore === null ? <h4>No Points</h4> : <h4> {leader.totalCredibilityScore} Points</h4>
                                            }
                                        </div>
                                    </div>
                                )    
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard
