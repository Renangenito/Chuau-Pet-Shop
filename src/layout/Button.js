import React from 'react';
import styles from '../layout/LinkButton.module.css'
function Button({text}){
    return(
      
            <button className={styles.botao}>{text}</button>
      
    )
}
export default Button;