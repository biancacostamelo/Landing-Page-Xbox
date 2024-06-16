import React from "react";
import '../css/contato.css'
const Contato = () => {
    return(
        <div id="Contato">
            <div className="body">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 meiocol2 mt-5">
                            <h2 className="fontebranca fonte">ENTRE EM CONTATO</h2>
                        </div>
                        <div className="col-sm-6 p-5">
                            <p>&#9993;&#65039; <span className="fontebranca">bianca.costamelo1@gmail.com</span></p>
                            <p>&#128222; <span>(11) 985154845</span> &#127463;&#127479;</p>
                            <p>&#128222; <span>(11) 985154845</span> &#127482;&#127480;</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="nome" className="fontebranca">Nome</label>
                            <p><input type="text" className="nome" id="nome" /></p>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="Telefone" className="fontebranca">Sobrenome</label>
                            <p><input type="text" className="nome" id="Telefone" /></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="E-mail" className="fontebranca">E-mail</label>
                            <p><input type="text" className="nome" id="E-mail" /></p>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="Telefone" className="fontebranca">Telefone</label>
                            <p><input type="text" className="nome" id="Telefone" /></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <label htmlFor="Mensagem" className="fontebranca">Mensagem</label>
                            <p><input type="text" className="msg" id="Mensagem" /></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 meiorow2">
                            <button className="botao mb-3">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato