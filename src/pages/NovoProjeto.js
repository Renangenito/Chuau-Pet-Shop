import React from 'react';
import Formulario from '../projeto/Formulario'
import styles from './NovoProjeto.module.css'
function NovoProjeto(){
    return(
       <div className={styles.projeto}>
            
           <h1>Novo Projeto</h1>
           <Formulario />
       </div>
    )
}
export default NovoProjeto;