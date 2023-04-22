import React from 'react'
import Button from './Button'
import {  FiLink } from "react-icons/fi";
const Projeto = (props) => {
  return (
<> 
    <div className='projeto'>
        <a href={props.link}>
          <div className='fotoproj'><img src={props.imagem} alt={props.descrimagem}  width='99%' height='100%'  /></div>
        </a>
        <h2>{props.projetoNome}</h2>
        <p>{props.descricaoProjeto}</p>
        <h3>{props.tecnologia}</h3>
        <Button  caminho={props.link} cor1='#9358F7' cor2='#10D7E2' name='Vizualizar' icon={FiLink} />
    </div>
</>
  )
}

export default Projeto