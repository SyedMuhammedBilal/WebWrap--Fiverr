import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import SideBar from '../components/SideBar';
import IconBar from '../components/IconBar';
import styles from '../styles/leaderBoard.module.css';
import Avatar from '@material-ui/core/Avatar';
import ColorIcon from '@material-ui/icons/Assessment';
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


    var review = [data.webwrap.queryLeaders.leaders.reviewsCount];
    useEffect(() => {
        console.log(review.sort(sortReview));
        function sortReview(a, b){
          return b[1] - a[1];
        }
    }, []);

    return(
        <div className={styles.main}>
            <SideBar/>
        
            <div className={styles.centerDiv}>
    
            <IconBar />
            
            {/* center div leader container */}
                <div className={styles.leaderCont} >
                    <h3> Your current position in the reviews leaderboard: #50  </h3>
                    <div className={styles.contentBoxes}>
                        {
                            data.webwrap.queryLeaders.leaders.map((leader, index) => {
                                    
                                return (
                                    <div className={styles.boxes} key={leader.id} >
                                        {
                                            leader.picture === null ? <Avatar className={styles.avt} alt="Logo" src={Logo} /> : <Avatar className={styles.avt} alt="picture" src={leader.picture} />
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
