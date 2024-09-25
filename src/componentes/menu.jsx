import React from 'react';
import '../css/menu.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/controle.png'

const Menu = () => {
    return (
        <div id="topo">
            <div className="menu fundo">
                <div className="row">
                    <div className="col-4 logoimg">
                        <a to='#home'><img src={logo} alt="logo" className='p-3' /></a>
                    </div>
                    <div className="col-8 navegacao">
                    <Navbar expand="lg" className="menu fundo">
                <Container>
                    <Navbar.Toggle className='custom-toggle' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='' id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <a className="p-2 link" href="#home">Home</a>
                            <a className="p-2 link" href="#Controle">Controle</a>
                            <a className="p-2 link" href="#COMPRAR">Comprar</a>
                            <a className="p-2 link" href="#Produtos">Produtos</a>
                            <a className="p-2 link" href="#Contato">Contato</a>
                            <div className="bot fr">
                                <button className='botao m-3'>Login</button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu