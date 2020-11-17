import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import SideBar from '../components/SideBar'
import styles from '../styles/follow.module.css'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import { createMuiTheme } from '@material-ui/core/styles';
import Badges from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function Followers(){

  const data = useStaticQuery(graphql`
    query {
      webwrap {
        allUser {
          username
          reviewsCount
          picture
          name
          canFollow
          id
          followingsCount
          followersCount
          bookmarksCount
        }
      }
    }
  `);

    console.log(data);

    const useStyles = makeStyles((theme) => ({
        root: {
          display: "flex",
          '& > *': {
            backgroundColor: "white",
            marginLeft: theme.spacing(2)
          },
        },
        shape: {
          width: 40,
          height: 40,
          backgroundColor: "gray",
        },
        shapeCircle: {
          borderRadius: '60%',
        },
      }));

      const StyledBadge = withStyles((theme) => ({
        badge: {
          right: 1,
          top: 32,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
          backgroundColor: "#b99e33",
        },
      }))(Badges);      
    
    const classes = useStyles();
      const circle = <div  className={clsx(classes.shape, classes.shapeCircle)} />
    
    return(
        <div className={styles.main}> 
        <SideBar/>
        <div className={styles.container} >
          {
            data.webwrap.allUser.map((user) => {
              return (
                <div className={styles.boxes} >
                  
                  <div className={styles.iconDiv} >
                    <StyledBadge className={styles.avt} color="warning" badgeContent="">
                      <Avatar className={styles.avat}  alt="Profile Picture" src={user.picture} />
                    </StyledBadge>
                    {
                      user.canFollow === true ? <a href='www.travelsplaces.com' className={styles.but} > Follow </a> : <div></div>
                    }  
                  </div>

                  <div className={styles.profile} >
                    <a className={styles.name}> {user.name} </a>
                    <a className={styles.prof}> Review ({user.bookmarksCount} posts) </a>
                    <a className={styles.prof} > Joined on Oct,3,2020 </a>
                    <table className={styles.table} >
                    <tr>
                      <th>Reviews</th>
                      <th>Followers</th>
                    </tr>
                    <tr  className={styles.revFol}>
                      <td> {user.reviewsCount} </td>
                      <td> {user.followersCount} </td>
                    </tr>
                  </table>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>       
    )
}

export default Followers;