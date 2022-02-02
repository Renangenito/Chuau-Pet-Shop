import React from 'react';
import { Link } from 'react-router-dom'
import pataPet from '../img/pata-pet.png'
import styles from '../layout/NavBar.module.css'

function NavBar(){
    return(
        <div className={styles.navBar}>
            <Link to='/'>
             <img src={pataPet} alt='pata-pet'/> 
            </Link>
            <div className={styles.titulo_logo}>
            <h1>Banho e tosa <span>Chuau Pet</span> </h1>

            </div>
          <ul className={styles.lista}>
            <li className={styles.item}>
              <Link to='/'>Home</Link>
            </li>
            <li className={styles.item}>
              <Link to='/orcamentos'>Orçamentos</Link>
            </li>
            <li className={styles.item}>
              <Link to='/novosservicos'>Novos Serviços</Link>
            </li>
          </ul>
        </div>
    )
}
export default NavBar;