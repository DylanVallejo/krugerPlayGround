import styles from './Contact.module.css'; 


    const  Contact = () => {
        return (
            <div className={styles.contactContainer}>
                <h2 className={styles.text}>Ready to connect whit me?</h2>
                <form className={styles.formContainer}>
                        <h4 className={styles.formHeader}>Let's connect</h4>
                        <div className={styles.contactForm}>
                            <input type="text" placeholder="Name" className={styles.input}/>
                            <input type="text" placeholder="Last Name" className={styles.input} />
                            <input type="email" placeholder="Email Adress" className={styles.input}/>
                            <textarea 
                                className={styles.textarea}
                                name="story"
                                rows="5" 
                                cols="33"
                                placeholder='Enter text here ...'>
                                
                            </textarea>
                            
                            <button className={styles.buttonForm}>Get in Touch</button>
                        </div>
                </form>
            </div>
        )
    }

    export default Contact;
