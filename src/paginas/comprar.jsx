import React from "react";
import '../css/comprar.css'
import imgpart1 from '../img/fundocontrolemeio1.png'
import imgpart2 from '../img/fundocontrolemeio2.png'
import imgpart55 from '../img/55fundocontrolemeio.png'
import imgpart66 from '../img/66fundocontrolemeio.png'
const Comprar = () => {
    return (
        <div id="COMPRAR">
            <div className="fundocomprar">
                    <div className="row  tamcol ">
                        <div className="col-sm-4 alignmeio">
                            <img className="imgpart2" src={imgpart66} alt="" />
                        </div>
                        <div className="col-sm-4 meiocol alignmeio">
                            <div className="elemento p-5 meiocol">
                                <p>XB Shop Exclusive</p>
                                <h2 className="h3 m-2"><b>Sale by XD Shop</b></h2>
                                <h4 className="h4 m-2">ALL PRICES UP TO -4% OFF</h4>
                                <button className="botao1 p-1 mt-3">Comprar Agora</button>
                            </div>
                        </div>
                        <div className="col-sm-4 alignmeio">
                            <img className="imgpart1" src={imgpart55} alt="" />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Comprar