import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Logo from '../assets/WebwrapLogo_Dark-square.png'
import logo from '../assets/WrapLogo.png'
import SideBar from '../components/SideBar';
import './global.css'
import styles from '../styles/webwrap.module.css'

export default function Home() {

  // fetching all query from GraphQL for Index Page
  const data = useStaticQuery(graphql`
    query MyQuery(
      $from: Int, 
      $query: String, 
      $size: Int, 
      $sortField: String
      ) {
      webwrap {
        queryFilterableReviews(filter: {
          excludingReviews: [],
          mustIncludePicture: true,
        }, 
        sortField: $sortField, 
        size: $size, 
        query: $query, 
        from: $from
        ) {
          items {
            content
            id
            title
            picture
            added
          }
          total
          hasMore
        }
      }
    }  
  `
  );

  console.log(data);

  return (
    <div>
      <SideBar />
      <div>
      <div  className={styles.container}>
      <div className={styles.contentBoxes} >
            {
              data.webwrap.queryFilterableReviews.items.map((web) => {
                return(
                  <div className={styles.box}> 
                    {
                      web.picture === null ? <img src={logo} /> : <img className={styles.img} src={web.picture} alt={styles.id} /> 
                    } 
                    <div className={styles.centered}>
                      <h3><span>{web.title}</span></h3> 
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
};