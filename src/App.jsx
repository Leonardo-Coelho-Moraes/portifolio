import Navbar from './components/Navbar';
import './App.css';
import React, { useState } from 'react';
import Lopper from './images/Looper.png'
import Button from './components/Button';
import { FiGithub, FiLinkedin, FiDownloadCloud, FiMail} from "react-icons/fi";
import conhecimentos from './conhecimentos';
import Projeto from './components/Projeto';
import escola from './images/escola.png'
import login from './images/login.png'
import pokemon from './images/pokemon.png'


function App() {
  const [descriAtual, setDescriAtual] = useState('HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.');
  const [observacaoAtual, setObservacaoAtual] = useState('OBS: meu código é muito clean, gosto de páginas estáticas.');
  const [porcentAtual, setPorcentAtual] = useState(90);
  
    

  const handleMouseOver = (conhecimento) => {
    setDescriAtual(conhecimento.descri);
    setObservacaoAtual(conhecimento.obs);
    setPorcentAtual(conhecimento.porcent);
  }
  const xpStyle = {
    width: `${porcentAtual}%`
  };
  return (
      <>
          <Navbar/>
          <main>
            <section className='sec1 width100 flex' id='home'>
              <div className='container sec1conteudo flex'>
                  <h2>Olá, eu sou <br/> <span>leonardo coelho</span> <br/> Desenvolvedor Front-end  </h2>
                  <div className='btns flex'>
                  <Button   cor1='#9358F7' cor2='#10D7E2' name='Linkedin' icon={FiLinkedin}  />
                  <Button cor1='#D24074' cor2='#6518B4' name='Github' icon={FiGithub} />
                  </div>
              </div>
            </section>
            <section className='sec2 width100 flex' id='sobre'>  
              <div className='container sec2conteudo centerbetween flex'>
                <div className='fotoeu flex'><h3>FOTO</h3></div> 
                <div className='sobremim'>
                    <h3>Sobre mim</h3>
                    <h4>Coari-AM, Brasil</h4>
                    <p>Meu nome é Leonardo e desde muito novo gosto de computadores. Minha meta é oferecer um serviço o mais completo possível, desde o trabalho com imagens até o trabalho com vídeos. Meu foco principal é em desenvolvimento para a web :)</p>
                    <div className='btns flex'>
                    <Button caminho='https://drive.google.com/file/d/1YAUF1VdEfP0aDPu3_GkFEP0jRxGkEXsQ/view?usp=sharing'cor1='#D24074' cor2='#6518B4' name='Currículo' icon={FiDownloadCloud} />
                  <Button   cor1='#9358F7' cor2='#10D7E2' name='E-mail' icon={FiMail} />
                 
                  </div>
                </div>

              </div>
            </section>
         
            <section className='sec3 width100 flex' id='conhecimentos'>
              <div className="areas container centerbetween flex">
                <div className="images flex">
                  {conhecimentos.map((conhecimento)=> (
                   <div color="#c4c4c4" className='cardcon flex'><img src={conhecimento.img} alt={conhecimento.descri}   onClick={() => handleMouseOver(conhecimento)} /></div>
                  ))}
                </div>
                <div className="descri flex">
          <h1>Conhecimentos</h1>
          <p>{descriAtual}</p>
          <p >{observacaoAtual}</p>
         
          <div className='barraxp flex'> <div className='xp'  style={xpStyle}></div></div>
          <h2>{porcentAtual}%</h2>
        </div>
              </div>
            </section>
            <section className='sec4 width100 flex' id='projetos'>
              <div className='sec4conteudo container'>
                <h1>Projetos</h1>
                    <div className="projetos flex">
                    <Projeto link='https://pokemon-woad-ten.vercel.app/' imagem={pokemon} projetoNome="Pokédata" descricaoProjeto='Pokédata faz o uso da pokeApi para exibir todos os pokemons que existem.' tecnologia='Site feito com Next.js'/>
                    <Projeto link='https://react-escola.vercel.app/' imagem={escola} projetoNome="Plataforma Escola" descricaoProjeto='Esse site é um exemplo de uma plataforma escola, para exibir noticias, projetos e o que você quise, o modelo reutilizado.' tecnologia='Site feito com React.js'/>
                    <Projeto link='https://pokemon-woad-ten.vercel.app/' imagem={login} projetoNome="Log in" descricaoProjeto='Uma página de login do minecraft a ideia é uma remodelação da conta no site do minecraft' tecnologia='Site feito com React.js'/>

                    </div>
              </div>

            </section>
            
               
            <img src={Lopper} alt='fundo imagem abstrata' className='imgab'/>
          </main>
          <footer className='width100 flex'>
            <div className="creditos container centerbetween flex">
              <h2>@ 2023 - Leonardo Coelho</h2>
              <h2>Design - Iuri Code</h2>
            </div>
          </footer>
      </>
  );
}

export default App;
