import React, { useEffect, useState } from "react";
import styles from './Projeto.module.css'
import { useParams } from "react-router-dom";
import Button from "../layout/Button";


function Projeto() {
    const [projeto, setProjeto] = useState([])
    const {id} = useParams()
  useEffect(() => {
    fetch(`http://localhost:5000/projetos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjeto(data);
      });
  }, [id]);
  return (
    <div className={styles.projeto}>
   
    <div className={styles.edit_card}>
        <div className={styles.div_titulo}>
        <h3><span>Projeto: </span> {projeto.projeto} </h3>
        <Button text='Editar Projeto'/>

        </div>
        <p><span>Autor:</span> {projeto.nome}</p>
        <p><span>Realização:</span> {projeto.data}</p>
        <p><span>Sobre: </span></p>
        <p>{projeto.sobre}</p>
      </div>
    </div>
  );
}
export default Projeto;
