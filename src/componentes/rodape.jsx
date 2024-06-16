import React from "react";
import '../css/rodape.css'

const Rodape = () => {
    return (
        <>
            <div className="body pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 pt-3 pb-3">
                            <h3 className="link">Seções</h3>
                            <li><a className="link" href="#home">HOME</a></li>
                            <li><a className="link" href="#COMPRAR">Comprar</a></li>
                            <li><a className="link" href="#Contato">Contato</a></li>
                            <li><a className="link" href="#Produtos">Produtos</a></li>
                            <li><a className="link" href="#Controle">Controle</a></li>
                        </div>
                        <div className="col-sm-3 pt-3 pb-3">
                            <h3 className="link">Quem somos</h3>
                            <li><a className="link" href="">Sobre nós</a></li>
                            <li><a className="link" href="">Carreiras</a></li>
                        </div>
                        <div className="col-sm-3 pt-3 pb-3">
                            <h3 className="link">Precisa de ajuda?</h3>
                            <li><a className="link" href="#Contato">Contato</a></li>
                            <li><a className="link" href="">Whatsapp</a></li>
                            <li><a className="link" href="">Central de ajuda</a></li>
                            <li><a className="link" href="">Duvidas frequentes</a></li>
                        </div>
                        <div className="col-sm-3 pt-3 pb-3">
                            <h3 className="link">Contato</h3>
                            <p>&#9993;&#65039; <span className="fontebranca">bianca.costamelo1@gmail.com</span></p>
                            <p>&#128222; <span>(11) 951794913</span> &#127463;&#127479;</p>
                            <p>&#128222; <span>(11) 985154845</span> &#127482;&#127480;</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Rodape