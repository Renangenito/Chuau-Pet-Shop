import React from 'react';
import styles from '../layout/LinkButton.module.css'
function ButtonLayout({text, click}){
    return(
      
            <button onClick={click} className={styles.botao}>{text}</button>
      
    )
}
export default ButtonLayout;