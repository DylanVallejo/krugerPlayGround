
import React, { useState } from 'react';
import styles from './AgeCalc.module.css';
const AgeCalc = () => {
    
    
    const [birthday, setBirthday] = useState('');
    const [age, setAge] = useState("-");
    const [month, setMonth] = useState("-")
    const [day, setDay] = useState("-")

    const calculateAge = () => {
        
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth()+1;
        const currentDay = currentDate.getDate();
        

        // Split the birthday string into an array of [year, month, day]
        const birthdayArray = birthday.split('-');
        const birthYear = parseInt(birthdayArray[0]);
        const birthMonth = parseInt(birthdayArray[1]);
        const birthDay = parseInt(birthdayArray[2]);
        let age = currentYear - birthYear;
        // const monthCalc = (currentMonth,birthMonth) => {
        //     let month = 0
        //     if(currentMonth > birthMonth){
        //         month = currentMonth-birthMonth
        //         return month
        //     }else if(birthMonth > currentMonth){
        //         month = birthMonth-currentMonth
        //         return month
        //     }
            
        // }
        // let month =  currentMonth-birthMonth
        const dayCalc = (currentDay, birthDay) => {
            let day = 0
            if (currentDay > birthDay) {
                day = currentDay - birthDay
                return day
            } else if (birthDay > currentDay) {
                day = birthDay - currentDay 
                return day
            }
        }
        // let day = currentDay - birthDay
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age -= 1;
        }
        setAge(age);
        setMonth( 12-birthMonth )
        setDay(dayCalc(currentDay, birthDay))
    }

    return (
        <div>
            {/* <label htmlFor="birthday">Enter your birthday:</label> */}
            <div className={styles.inputContainer}>
                <input type="date" className={styles.dateInput} value={birthday} onChange={e => setBirthday(e.target.value)} />
                <button className={styles.dateButton} onClick={calculateAge}>Calculate</button>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    {age !== null && <p> {age} <br/>anios</p>}
                    
                </div>
                <div className={styles.info}>
                    {month !== null && <p> {month}<br/>meses</p>}
                </div>
                <div className={styles.info}>
                    {day !== null && <p>{day}<br/>dias </p>}
                    
                </div>
            </div>
        </div>
    );
}

export default AgeCalc;

