// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'


const  Navbar = ( ) =>{
    // const [active, setActive] = useState(false);

    
    return(
        <header className={styles.headerContainer}>
            <ul className={styles.ulContainer}>
                <li className={styles.liRefs}>
                    <NavLink style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline purple 2px' : 'none', 
                    })} to='/' >Home</NavLink>
                    <NavLink to='/imc' style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline purple 2px' : 'none',
                    })}>IMC Calculator</NavLink>
                    <NavLink to='/age' style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline purple 2px' : 'none',
                    })}>Age Calculator</NavLink>
                </li>
                <li className={styles.liRefsImg} >
                    <a className={styles.nombreLogo}
                        target='_blank' 
                        rel="noreferrer"
                        href='https://www.instagram.com/krugercorp/?hl=es'
                        style={{display:'flex' }}>
                        <img className={styles.nombreLogo}
                            style={{height:'50px', margin:'auto 10px auto auto',}}
                            src={require('../components/img/kformatear.png')}
                            alt='krugerStar'
                        />
                        <p className={styles.nombreLogo}>KrugerStar</p>
                    </a>
                </li>
                <li className={styles.liRefs}>
                    <NavLink to='/clock' style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline purple 2px' : 'none',
                    })}>My Clock</NavLink>
                    <NavLink to='/about' style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline purple 2px' : 'none',
                    })}>About Me</NavLink>
                    <NavLink to='/contact' 
                        style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline purple 2px' : 'none',
                    })}>
                    Contact
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}
export default Navbar;