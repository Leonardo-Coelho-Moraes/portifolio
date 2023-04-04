import React from 'react'

const Navbar = () => {
  return (
    <>
    <header >
        <div className='header container'>
            <h1>Portfólio</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#conhecimentos">Conhecimentos</a></li>
                <li><a href="#projetos">Projetos</a></li>
            </ul>
        </div>
    </header>
    </>
  )
}

export default Navbar