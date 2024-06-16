import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home.jsx';
import Menu from './componentes/menu.jsx'
import Rodape from './componentes/rodape.jsx'
import Comprar from './paginas/comprar.jsx'
import Controle from './paginas/controle.jsx'
import Produtos from './paginas/produtos.jsx'
import Contato from './paginas/contato.jsx';

function App() {
  return (
    <>
    <Menu/>
    <Home/>
    <Comprar/>
    <Controle/>
    <Produtos/>
    <Contato/>
    <Rodape/>
    </>
  );
}

export default App;
