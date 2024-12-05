import './styles.css';
import imgCriancaCarente from '../../../assets/crianca-carente.jpg';
import arrowIcon from '../../../assets/arrow.svg';

export default function HomePage() {
    return (
        <main>
            <section id="section-home-page">
                <div className="home-page-introduction container">
                    <div className="home-page-introduction-invite">
                        <h2>A <span>fome</span> não espera, e a <span>solidariedade</span> também não.</h2>
                        <a href="">Doe agora <img src={arrowIcon} alt="" /></a>
                    </div>

                    <img src={imgCriancaCarente} alt="" />
                </div>
            </section>
        </main>
    );
}