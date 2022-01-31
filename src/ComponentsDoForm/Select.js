import React from "react";
import styles from './Select.module.css'
function Select() {
  return (
    <div className={styles.div_select}>
      <label>Categorias</label>
      <select>
        <option>-Selecione uma opção-</option>
        <option className={styles.opcoes}>1 - Cachorro</option>
        <option className={styles.opcoes}>2 - Gato</option>
      </select>
    </div>
  );
}
export default Select;
