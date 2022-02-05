import React from 'react';
import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
function ProjectCard({id, projeto, autor, data, sobre, handleRemove}){

    function remove(e){
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.project_card}>
            <h2>{projeto}</h2>
            <p> <span>Autor: </span>{autor}</p>
            <p> <span>Realização: </span>{data}</p>
            <div className={styles.campo_sobre}>
            <p><span> Sobre:</span></p>
            <p>{sobre}</p>
            </div>
            <Link className={styles.botao_link} to='/projeto/' >
                <BsPencil/>
                Editar
            </Link>
            <button onClick={remove}>
                <BsFillTrashFill/>
                Excluir
            </button>
        </div>
    )
}
export default ProjectCard;