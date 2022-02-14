import React from 'react';
import { Link } from 'react-router-dom'
import logoLampada from '../img/lampada.jpg'
import styles from '../layout/NavBar.module.css'

function NavBar(){
    return(
        <div className={styles.navBar}>
            <Link to='/'>
             <img src={logoLampada} alt='logo-lampada'/> 
            </Link>
            <div className={styles.titulo_logo}>
            <h1>Gerenciador de idéias <span>Eureka</span> </h1>

            </div>
          <ul className={styles.lista}>
            <li className={styles.item}>
              <Link to='/'>Home</Link>
            </li>
            <li className={styles.item}>
              <Link to='/projetos'>Projetos</Link>
            </li>
            <li className={styles.item}>
              <Link to='/sobre'>Sobre</Link>
            </li>
            
          </ul>
        </div>
    )
}
export default NavBar;