import styles from '../Home.module.css'
const HomePage = () =>{   
    
    return(
        <>
            <div>
                <h2>Welcome to my Playground</h2>
            </div>
            <div className={styles.grettingSpech}>
                <p>
                    Hi everyone! My name is Dylan Vallejo and this is my PlayGround
                    , check some of my proyects. If you like what   you see don't hesitate on contact me,
                    i'll be glad to help you.
                </p>
            </div>

        </>        
    )
}

export default HomePage