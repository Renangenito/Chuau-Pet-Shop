import React from 'react';
import styles from './InputData.module.css'
function Input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div className={styles.div_input}>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            />
        </div>
    )
}

export default Input;