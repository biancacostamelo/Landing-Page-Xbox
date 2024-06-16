import Carousel from 'react-bootstrap/Carousel';
import imgalta from '../img/controlealta.png'
import css from '../css/menu.css'
import imgcarrosel from '../img/iconduna.png'

function Carrosel() {
    return (
        <Carousel className='w-c' data-bs-theme="dark">
            <Carousel.Item>
                .fundo2
                <Carousel.Caption>
                        <h1 className="fonte"><b>Lorem ipsum dolor sit amet consectetur</b></h1>
                        <p className="texto ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repellendus eveniet pariatur, at quaerat commodi! Consequatur dignissimos velit, sapiente iusto.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=eee"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrosel;