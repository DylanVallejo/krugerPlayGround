
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
    console.log(birthday)
    const birthdayArray = birthday.split('-');
    console.log(birthdayArray)
    
    const birthYear = parseInt(birthdayArray[0]);
    const birthMonth = parseInt(birthdayArray[1]);
    const birthDay = parseInt(birthdayArray[2]);

    let age = currentYear - birthYear;
    let month = currentMonth - birthMonth
    let day = currentDay - birthDay
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age -= 1;
    }
    setAge(age);
    setMonth(month)
    setDay(day)
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
                    x``
                </div>
                <div className={styles.info}>
                    {day !== null && <p>{day}<br/>dias </p>}
                    
                </div>
            </div>
        </div>
    );
}

export default AgeCalc;

