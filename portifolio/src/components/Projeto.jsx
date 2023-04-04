import React from 'react'
import Button from './Button'
import {  FiLink } from "react-icons/fi";
const Projeto = (props) => {
  return (
<> 
    <div className='projeto'>
        <div className='fotoproj'><h1>FOTO</h1></div>
        <h2>Nome do projeto</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
        <h3>Tecnologias usadas no projeto</h3>
        <Button  caminho={props.link} cor1='#9358F7' cor2='#10D7E2' name='Vizualizar' icon={FiLink} />
    </div>
</>
  )
}

export default Projeto