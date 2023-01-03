import React from 'react'
import styles from './AboutMe.module.css'
const AboutMe = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutImg}>
                <img src={require('./img/dylan.jpg')} alt='Dylan' ></img>
            </div>
            <div className={styles.aboutText}>
                <h2>Dylan Vallejo</h2>
                <p>
                    Hi,i'm a FullStack Developer focused on mastering JavaScript and Java .
                    I have a passion for learning new technologies building and giving the best of me to be 
                    one of the winners of The proyect KrugerStar whit disruptive ideas achieving my goals
                    along whit my other colleagues
                </p>
            </div>
        </div>
    )
}
export default AboutMe