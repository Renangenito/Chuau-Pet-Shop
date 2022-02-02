import React from 'react';
import imageChuau from '../img/chuau-pet.png'
import LinkButton from '../layout/LinkButton';
import styles from '../pages/Home.module.css'
function Home(){
    return(
        <div className={styles.home_container}>
            {/* <h1>Banho e tosa <span>Chuau Pet</span> </h1> */}
            <p>Faça já o seu orçamento!</p>
            <LinkButton to='/novoorcamento' text="Criar Orçamento"/>
            <img src={imageChuau} alt='imageChuau' />
        </div>
    )
}
export default Home;