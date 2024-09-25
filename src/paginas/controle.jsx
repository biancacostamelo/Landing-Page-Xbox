import React from "react";
import '../css/controle.css'
import controles01 from '../img/controles01.png'
const Controle = () => {
    return (
        <div id="Controle">
            <div className="body">
                <div className="container">
                    <div className="row fundo2 tamcol meiorow">
                        <div className="col-sm-6 meiocol">
                            <div className="img">
                                <img className="imagem" src={controles01} alt="controle" />
                            </div>
                        </div>
                        <div className="col-sm-6 meiocol">
                            <div className="texto2 ">
                                <h1 className="mb-4"><b>Feito com qualidade</b></h1>
                                <p className="texto2 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repellendus eveniet pariatur, at quaerat commodi! Consequatur dignissimos velit, sapiente iusto.</p>
                                <li> —⁠ Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                                <li> —⁠ Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                                <li> —⁠ Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                                <li> —⁠ Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Controle