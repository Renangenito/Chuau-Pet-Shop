import React from 'react';
import styles from './Button.module.css'
function Button({text}){
    return(
        <div>
            <button type='submit' className={styles.form_botao}>{text}</button>
        </div>
    )
}
export default Button;