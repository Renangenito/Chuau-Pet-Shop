import React, { useEffect, useState } from "react";
import ProjectCard from "../projeto/ProjectCard";
import styles from "./Projetos.module.css";
function Projetos() {
const [projetos, setProjetos] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/projetos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setProjetos(data)
      })
      console.log("Aqui é o log dos projetos"+ projetos)
      // eslint-disable-next-line 
  }, [])
  
  return (
    <div className={styles.projetos}>
      <h1>Meus Projetos</h1>
      <div className={styles.cards}>
        {projetos.map((projeto)=>(
          <ProjectCard 
        key={projeto.id}
        projeto={projeto.projeto}
        autor={projeto.nome}
        data={projeto.data}
        sobre={projeto.sobre}/>
        ))}

      </div>
    </div>
  );
}

export default Projetos;
