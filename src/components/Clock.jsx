import { useState } from "react";
// import styles from './Clock.module.css'
import '../App.css';

const Clock = () => {
    
    const [hora, setHora] = useState(0)
    const [minuto, setMinuto] = useState(0)
    const [segundo, setSegundo] = useState(0)
    
//obteniendo los segundos totales del dia 
function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
  // obteniendo el angulo con el modulo de 43200s (12h) multiplicando 360 r de una circunferencia * segundos actuales
  // dividido para 12 horas en segundo  (43200) + modulo de 360
function getHourHandAngle(s) {
    s %= 43200; // seconds in 12 hours
    // return ((360 * s / 43200) + 180) % 360;
    return ((360 * s / 43200)) % 360;
    
}  
  //transforming the seconds to minutes 
function getMinuteHandAngle(s) {
    s %= 3600; // seconds in an hour
    // return ((6 * s / 60) + 180) % 360;
    return ((6 * s / 60)) % 360;
    
}
  //

function getSecondHandAngle(s) {
    s %= 60; // seconds in a minute
    // return ((6 * s) + 180) % 360;
    return ((6 * s)) % 360;
    
}
// ejecutando las funciones de angulos y obtener segundos del dia cada segundo 
setInterval( () => {
    let s = getSecondsSinceStartOfDay();
    setHora(getHourHandAngle(s))
    setMinuto(getMinuteHandAngle(s))
    setSegundo(getSecondHandAngle(s))
    // console.log(`${hora},${minuto},${segundo}, `)
}, 1000);

    return (
        <div className="clock">

            <div className="hand hour" data-hour-hand style={{transform:`rotate(${hora}deg)`}}></div>
            <div className="hand minute" data-minute-hand style={{transform:`rotate(${minuto}deg)`}}></div>            
            <div className="hand second" data-second-hand style={{transform:`rotate(${segundo}deg)`}}></div>
            
            <div className="number number1">1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number number6">6</div>
            <div className="number number7">7</div>
            <div className="number number8">8</div>
            <div className="number number9">9</div>
            <div className="number number10">10</div>
            <div className="number number11">11</div>
            <div className="number number12">12</div>
        </div>
    );
};
export default Clock;