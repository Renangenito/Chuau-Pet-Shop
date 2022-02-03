import React from 'react';
import styles from './TextArea.module.css'
function TextArea({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div className={styles.div_text_area}>
            <label htmlFor={name}>{text}</label>
           <textarea
           type={type}
           name={name}
           id={name}
           placeholder={placeholder}
           onChange={handleOnChange}
           value={value}/>
        </div>
    )
}

export default TextArea;