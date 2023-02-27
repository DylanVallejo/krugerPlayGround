import { useEffect ,useState} from "react";
import styles from './Masa.module.css';

const Masa = () =>{
    
    const [masa, setMasa] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setImc] = useState(0)
    const [advertencia, setAdvertencia] = useState('')
    const [color, setColor] = useState('')
    
    const clasificar = (imc) => {
        if(imc <18.5){
            setAdvertencia('delgado')
            setColor('black')
        }
        else if(imc >= 18.5 && imc <= 24.9){
            setAdvertencia('aceptable')
            setColor('green')
            
        }else if(imc >= 25 && imc <= 29.9){
            setAdvertencia('sobrepeso')
            setColor('yellow')
        }else if (imc >= 30 && imc  <= 34.9){
            setAdvertencia('obesidad grado 1')
            setColor('orange')
        }
        else if (imc >= 35 && imc  <= 39.9){
            setAdvertencia('obesidad grado 2')
            setColor('red')
        }
        else if (imc >= 40){
            setAdvertencia('obesidad grado 3')
            setColor('red')
        }
    }        

    console.log(typeof(masa))
    console.log(typeof(altura))
    
    const calculateImc = (masa, altura)=> {
        let calculo =masa/Math.pow(altura/100,2)
        setImc(calculo.toFixed(1))
    }

    
    useEffect(() => {
        calculateImc(masa,altura);
        clasificar(imc);
    }, [masa,altura,imc])
    return(
        <div className={styles.containerMasa}>
            <div className={styles.containerInputs}>
                <label>peso</label>
                <input type="range" 
                    min="40" 
                    max="150" 
                    value={masa} 
                    className={styles.range}
                    onChange={e => {
                        setMasa(parseFloat(e.target.value))}
                    } 
                />
                <span>{masa}</span> <br/>
                
                <label>altura</label>
                <input type="range" 
                    min="120" 
                    max="230"
                    value={altura}
                    className={styles.range}
                    
                    onChange={e => {
                        setAltura(parseFloat(e.target.value))}
                    }
                /> 
                <span>{altura}</span><br/>
            </div>
            
            <div className={styles.containerInfo}>
                <p className={styles.masaActual}>Tu IMC acutal es: {imc}</p>
                <p className={styles.advertenciaActual} style={{color: `${color}`}}>{advertencia}</p>
            </div>
        </div> 
        
        )
}
export default Masa;