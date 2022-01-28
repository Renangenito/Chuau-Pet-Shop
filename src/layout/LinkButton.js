import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../layout/LinkButton.module.css'
function LinkButton({to, text}){
    return(
        <Link to={to}>
            <button className={styles.botao}>{text}</button>
        </Link>
    )
}
export default LinkButton;