import React, { useState } from "react";
import Input from "../ComponentsDoForm/Input";
import Button from "../ComponentsDoForm/Button";
import styles from '../projeto/Formulario.module.css'
function Formulario() {
  const [campos, setCampos] = useState({})
  const [cliente, setCliente] = useState({})

  function adicionarCliente() {
    
    fetch('http://localhost:5000/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    })
      .then((resp) => resp.json())
      .then((data) => {console.log(data)})
  }

  function handleChange(e) {
    
    setCampos({ ...campos, [e.target.name]: e.target.value })
    setCliente({
        nome: campos.nome,
        email: campos.email,
        telefone: campos.tel
      
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    adicionarCliente()
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
        name="email"
        placeholder="Digite o seu email"
        type="email"
        text="Email"
        id="email"
        value={campos.email || ""}
        handleOnChange={handleChange}

      />
      <Input
        name="tel"
        placeholder="Digite o seu tel"
        type="tel"
        text="Telefone"
        id="tel"
        value={campos.tel || ""}
        handleOnChange={handleChange}
      />

      <Button handleOnSubmit={handleSubmit} text='Confirmar' />
    </form>
  );
}
export default Formulario;
