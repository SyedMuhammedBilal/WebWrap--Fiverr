import React from 'react'
import SideBar from '../components/SideBar'
import styles from '../styles/follow.module.css'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import Mani from '../assets/mani.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function Followers(){
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            // margin: theme.spacing(1),
            backgroundColor: "white",

          },

    
        },
        shape: {
        //   backgroundColor: theme.palette.primary.main,
          width: 40,
          height: 40,
          backgroundColor: "gray",
        },
        shapeCircle: {
          borderRadius: '60%',
        },
      }));
    const classes = useStyles();
    const circle = <div  className={clsx(classes.shape, classes.shapeCircle)} />;
    return(
        <div className={styles.main}> 
        <SideBar/>
        <div className={styles.container} >
            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>




            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src='/sdds/ss' />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>



            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="omemy Sharp" src='/sdds/ss' />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>



            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>




            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="xsasa" src='/sdds/ss' />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>



            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>



            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>



            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>

            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>

            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>

            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>

            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>


            <div className={styles.boxes} >
            <div className={styles.iconDiv} >
            <Badge className={styles.avt} color="primary"  overlap="circle" badgeContent="99 ">
            {/* {circle} */}
            <Avatar className={styles.avat}  alt="Remy Sharp" src={Mani} />
            </Badge>
            <a href='www.travelsplaces.com' className={styles.but} > Follow </a>
            </div>
            
            <div className={styles.profile} >
            <a className={styles.name}> Alex Harry</a>
            <a className={styles.prof}> Reviewer (13 posts) </a>
            <a className={styles.prof} > Joined on Oct,3,2020 </a>
            <table className={styles.table} >
            <tr>
            <th>Reviews</th>
            <th>Followers</th>
            </tr>
            <tr  className={styles.revFol}>
             <td>4k</td>
             <td>12</td>
             </tr>
             </table>
            </div>
            </div>




            


        </div>
        </div>
       
    )
}

export default Followers;