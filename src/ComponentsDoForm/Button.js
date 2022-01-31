import React from 'react';
import styles from './Button.module.css'
function Button({text, handleOnSubmit}){
    return(
        <div>
            <button onClick={handleOnSubmit} className={styles.form_botao}>{text}</button>
        </div>
    )
}
export default Button;