import React from 'react';
import Formulario from '../projeto/Formulario'
import styles from './NovoOrcamento.module.css'
function NovoOrcamento({to, text}){
    return(
       <div className={styles.orcamento}>
           <h1>Novo Orçamento</h1>
           <Formulario />
       </div>
    )
}
export default NovoOrcamento;