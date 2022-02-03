import React, { useState } from "react";
import Input from "../ComponentsDoForm/Input";
import Button from "../ComponentsDoForm/Button";
import styles from '../projeto/Formulario.module.css'
import { useNavigate } from 'react-router-dom';
import TextArea from "../ComponentsDoForm/TextArea";

function Formulario() {
  const [campos, setCampos] = useState({})
  const [projetos, setProjetos] = useState({})

  const navigate = useNavigate()

  function adicionarProjetos() {

    
    fetch('http://localhost:5000/projetos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projetos),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        navigate('/projetos', { state: {message: 'Projeto criado com sucesso!'} })
        
      })
  }


  
  function handleChange(e) {
    
    setCampos({ ...campos, [e.target.name]: e.target.value })
    setProjetos({
        nome: campos.nome,
        projeto: campos.projeto,
        data: campos.data,
        sobre: campos.sobre
      
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    adicionarProjetos()
    setCampos('')
  }


  return (
    <form className={styles.formulario}>
      <Input
        name="nome"
        placeholder="Digite o seu nome"
        type="text"
        text="Nome"
        id="nome"
        value={campos.nome || ""}
        handleOnChange={handleChange}
      />
      <Input
        name="projeto"
        placeholder="Digite o nome do projeto"
        type="text"
        text="Projeto"
        id="projeto"
        value={campos.projeto || ""}
        handleOnChange={handleChange}

      />
       <Input
        name="data"
        placeholder="Informe a data da realização"
        type="date"
        text="Data da realização"
        id="data"
        value={campos.data || ""}
        handleOnChange={handleChange}

      />
      
      <TextArea 
      name="sobre"
      placeholder="Informação sobre o projeto"
      type="text"
      text="Sobre o projeto"
      id="sobre"
      value={campos.sobre || ""}
      handleOnChange={handleChange}
      />


      <Button handleOnSubmit={handleSubmit} text='Confirmar' />
    </form>
  );
}
export default Formulario;
