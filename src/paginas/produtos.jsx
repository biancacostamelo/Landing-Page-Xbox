import React from "react";
import imgcard from '../img/iconcontrole.png'
import '../css/produtos.css'
import avaliacao from '../img/iconavaliacao.png'
import controleRoxo from '../img/controleRoxo.png'
import controleVermelho from '../img/controleVermelho.png'
import controleAzul from '../img/controleAzul.png'
import controleBranco from '../img/controleBranco.png'
import controleMisto from '../img/controleMisto.png'
import fone from '../img/Fone.png'
import gabinete from '../img/Gabinete.png'
import XboxAdaptive from '../img/XboxAdaptiveController.png'
import controle55 from '../img/controle55.png'

const Produtos = () => {
    return (
        <div id="Produtos">
            <div className="body">
                <div className="container-xl">
                    <div className="row p-5 meiorow66">
                        <div className="col-sm-3 meiocol2 card11 tam56 m-2 p-2">
                            <div className="p-2 meiocol">
                                <div className="eclipse">
                                    <img className="cardimagem p-1" src={controle55} alt="Card"></img>
                                </div>
                                <div className="container">
                                    <div class="card-body meiocol3">
                                        <h5 class="fontebranca mt-3"> <b>Controle sem Fio Xbox</b></h5>
                                        <img className="imgavaliacao" src={avaliacao} alt="avaliacao" />
                                        <h6 class="fontebranca mn">R$100.00</h6>
                                    </div>
                                </div>
                                <button className="botaocarrinho mt-3 fontebranca">Adicionar +</button>
                            </div>
                        </div>
                        <div className="col-sm-3 card11 meiocol2 tam56 m-2 p-2">
                            <div className=" p-2 meiocol">
                                <div className="eclipse">
                                    <img className="cardimagem p-1" src={controleRoxo} alt="Card"></img>
                                </div>
                                <div className="container">
                                    <div class="card-body meiocol3">
                                        <h5 class="fontebranca mt-3"> <b>Xbox Controle</b></h5>
                                        <img className="imgavaliacao" src={avaliacao} alt="avaliacao" />
                                        <h6 class="fontebranca mn">R$100.00</h6>
                                    </div>
                                </div>
                                <button className="botaocarrinho mt-3 fontebranca">Adicionar +</button>
                            </div>
                        </div>
                        <div className="col-sm-3 card11 meiocol2 tam56 m-2 p-2">
                            <div className=" p-2 meiocol">
                                <div className="eclipse">
                                    <img className="cardimagem p-1" src={controleVermelho} alt="Card"></img>
                                </div>
                                <div className="container">
                                    <div class="card-body meiocol3">
                                        <h5 class="fontebranca mt-3"> <b>Xbox Controle</b></h5>
                                        <img className="imgavaliacao" src={avaliacao} alt="avaliacao" />
                                        <h6 class="fontebranca mn">R$100.00</h6>
                                    </div>
                                </div>
                                <button className="botaocarrinho mt-3 fontebranca">Adicionar +</button>
                            </div>
                        </div>
                        <div className="col-sm-3 card11 meiocol2 tam56 m-2 p-2">
                            <div className=" p-2 meiocol">
                                <div className="eclipse">
                                    <img className="cardimagem p-1" src={fone} alt="Card"></img>
                                </div>
                                <div className="container">
                                    <div class="card-body meiocol3">
                                        <h5 class="fontebranca mt-3"> <b>Xbox Controle</b></h5>
                                        <img className="imgavaliacao" src={avaliacao} alt="avaliacao" />
                                        <h6 class="fontebranca mn">R$100.00</h6>
                                    </div>
                                </div>
                                <button className="botaocarrinho mt-3 fontebranca">Adicionar +</button>
                            </div>
                        </div>
                    </div>
                    <div className="row p-5 meiorow66">
                        <div className="col-lg-3 card11 meiocol2 tam56 m-2 p-2">
                            <div className=" p-2 meiocol">
                                <div className="eclipse">
                                    <img className="cardimagem p-1" src={controleBranco} alt="Card"></img>
                                </div>
                                <div className="container">
                                    <div class="card-body meiocol3">
                                        <h5 class="fontebranca mt-3"> <b>Xbox Controle</b></h5>
                                        <img className="imgavaliacao" src={avaliacao} alt="avaliacao" />
                                        <h6 class="fontebranca mn">R$100.00</h6>
                                    </div>
                                </div>
                                <button className="botaocarrinho mt-3 fontebranca">Adicionar +</button>
                            </div>
                        </div>
                        <div className="col-lg-3 card11 meiocol2 tam56 m-2 p-2">
                            <div className=" p-2 meiocol">
                                <div className="eclipse">
                                    <img className="cardimagem p-1" src={controleVermelho} alt="Card"></img>
                                </div>
                                <div className="container">
                                    <div class="card-body meiocol3">
                                        <h5 class="fontebranca mt-3"> <b>Xbox Controle</b></h5>
                                        <img className="imgavaliacao" src={avaliacao} alt="avaliacao" />
                                        <h6 class="fontebranca mn">R$100.00</h6>
                                    </div>
                                </div>
                                <button className="botaocarrinho mt-3 fontebranca">Adicionar +</button>
                            </div>
                        </div>
                        <div className="col-lg-3 card11 meiocol2 tam56 m-2 p-2">
                            <div className=" p-2 meiocol">
                                <div className="eclipse">
                                    <img className="cardimagem p-1" src={gabinete} alt="Card"></img>
                                </div>
                                <div className="container">
                                    <div class="card-body meiocol3">
                                        <h5 class="fontebranca mt-3"> <b>Xbox Controle</b></h5>
                                        <img className="imgavaliacao" src={avaliacao} alt="avaliacao" />
                                        <h6 class="fontebranca mn">R$100.00</h6>
                                    </div>
                                </div>
                                <button className="botaocarrinho mt-3 fontebranca">Adicionar +</button>
                            </div>
                        </div>
                        <div className="col-lg-3 card11 meiocol2 tam56 m-2 p-2">
                            <div className=" p-2 meiocol">
                                <div className="eclipse">
                                    <img className="cardimagem p-1" src={XboxAdaptive} alt="Card"></img>
                                </div>
                                <div className="container">
                                    <div class="card-body meiocol3">
                                        <h5 class="fontebranca mt-3"> <b>Xbox Controle</b></h5>
                                        <img className="imgavaliacao" src={avaliacao} alt="avaliacao" />
                                        <h6 class="fontebranca mn">R$100.00</h6>
                                    </div>
                                </div>
                                <button className="botaocarrinho mt-3 fontebranca">Adicionar +</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produtos