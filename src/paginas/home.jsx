import React from "react";
import controle from '../img/fundocontrole.png'
import '../css/home.css'
import botaoMenu1 from '../img/botaomenu.png'
import imgalta from '../img/controlealta.png'
import '../css/menu.css'

const Home = () => {
    return(
        <div id="home">
        <div className="body">
        <a href="#topo"><img src={botaoMenu1} className="Subir" alt="Subir"/></a>
            <div className="container">
            <div className="row fundo2 tamcol meiorow">
                <div className="col-md-6 meiocol tamcol ">
                    <div className="texto ">
                        <h1 className="fonte"><b>Lorem ipsum dolor sit amet consectetur</b></h1>
                        <p className="texto ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repellendus eveniet pariatur, at quaerat commodi! Consequatur dignissimos velit, sapiente iusto.</p>
                        <button className="botao fl p-1">Compre agora</button>
                    </div>
                </div>
                <div className="col-md-6 meiorow">
                    <img className="imagembanner" src= {imgalta} alt="controle" />
                </div>
            </div>
            </div>
        </div>
            
        </div>
    )
}

export default Home