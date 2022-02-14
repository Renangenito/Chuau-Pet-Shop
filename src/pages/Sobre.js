import React from 'react';
import styles from './Sobre.module.css'

function Sobre(){
    return(
        <div className={styles.sobre}>
        <h1>Página Sobre:</h1>
        <p>Eureka é uma aplicação onde você pode criar e gerenciar seus projetos</p>
        <p>Surgiu uma idéia na cabeça? Abra a apicação e salva tudo para lembrar mais tarde</p>
        <p>Você pode ter acesso a todos os projetos criados, na página: Projetos</p>    
        </div>
    )
}
export default Sobre