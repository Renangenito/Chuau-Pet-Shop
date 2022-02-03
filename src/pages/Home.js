import React from 'react';
import lampadaHome from '../img/lampada-home.png'
import LinkButton from '../layout/LinkButton';
import styles from '../pages/Home.module.css'
function Home(){
    return(
        <div className={styles.home_container}>
            <p>Alguma idéia nova?</p>
            <img src={lampadaHome} alt='lampada-home' />
            <LinkButton to='/novo-projeto' text="Novo Projeto"/>
        </div>
    )
}
export default Home;