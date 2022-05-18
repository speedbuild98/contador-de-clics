import './App.css';
import './hojas-de-estilo/Boton.css';
import gallardo from "./img/gallardo.png";
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import './hojas-de-estilo/contador.css'
import { useState } from "react"


function App(){
  const [numClics, setNumClics] = useState(0);
  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
    <div className="logo-contenedor">
      <img 
        className='logo'
        src={gallardo}
        alt="Logo de Gallardo"/>
        <a target={"_blank"} rel="noreferrer" href='https://devgallardo.netlify.app/'>Gallardo Frontend Developer</a>
        <Contador className="contador" numClics={numClics} />
    </div>
    <div className='contenedor-principal'>
      <Boton
        texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton
        texto="Reiniciar"
        esBotondeClic={false}
        manejarClic={reiniciarContador}/>
    </div>
    </div>
  );
}

export default App;
