import React from 'react'

const Button = (props) => {
    const Icon = props.icon 
  return (
    <button className='btndeg'  style={{ '--clr': props.cor1, '--clr2': props.cor2 }}>
        <a href={props.caminho} onClick={props.click} target="_blank"> <Icon /> {props.name}</a>
        
    </button>

  )
}

export default Button
