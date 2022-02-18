import React, { useEffect, useState } from "react";
import styles from "./Projeto.module.css";
import { useParams } from "react-router-dom";
import ButtonLayout from "../layout/ButtonLayout";
import Input from "../ComponentsDoForm/Input";
import TextArea from "../ComponentsDoForm/TextArea";
import Button from "../ComponentsDoForm/Button"

function Projeto() {
  const [showForm, setShowForm] = useState(false);
  const [projeto, setProjeto] = useState([]);
  
  const { id } = useParams();

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

  function alternarForm() {
    setShowForm(!showForm);
  }

  function handleChange(e) {
    
    setProjeto({ ...projeto, [e.target.name]: e.target.value })
      
  }

 function editarProjeto(){
   fetch(`http://localhost:5000/projetos/${projeto.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projeto)
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjeto(data);
      });

   setShowForm(false)
 }

  return (
    <div className={styles.projeto}>
      <div className={styles.edit_card}>
        <div className={styles.div_titulo}>
          <h3>
            <span>Projeto: </span> {projeto.projeto}{" "}
          </h3>
          <ButtonLayout click={alternarForm} text="Editar Projeto" />
        </div>
        {!showForm ? (
          <>
            <p>
              <span>Autor:</span> {projeto.nome}
            </p>
            <p>
              <span>Realização:</span> {projeto.data = new Date(projeto.data).toLocaleDateString('pt-BR', {timeZone: 'UTC'})} 
            </p>
            <p>
              <span>Sobre: </span>
            </p>
            <p>{projeto.sobre}</p>
          </>
        ) : (
          <>
            <Input
              name="nome"
              placeholder="Digite o seu nome"
              type="text"
              text="Nome"
              id="nome"
              value={projeto.nome || ""}
              handleOnChange={handleChange}
            />
            <Input
              name="projeto"
              placeholder="Digite o nome do projeto"
              type="text"
              text="Projeto"
              id="projeto"
              value={projeto.projeto || ""}
              handleOnChange={handleChange}
            />
            <Input
              name="data"
              placeholder="Informe a data da realização"
              type="date"
              text="Data da realização"
              id="data"
              value={projeto.data || ""}
              handleOnChange={handleChange}
            />
            <TextArea
              name="sobre"
              placeholder="Informação sobre o projeto"
              type="text"
              text="Sobre o projeto"
              id="sobre"
              value={projeto.sobre || ""}
              handleOnChange={handleChange}
            />
            <Button handleClick={editarProjeto} text="Concluir Edição"/>
            
          </>
        )}
      </div>
    </div>
  );
}
export default Projeto;
