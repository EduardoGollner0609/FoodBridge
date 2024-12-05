import './styles.css';
import imgCriancaCarente from '../../../assets/crianca-carente.jpg';
import arrowIcon from '../../../assets/arrow.svg';
import donationFood from '../../../assets/donation-food.svg';
import handsHelp from '../../../assets/hands-help.svg';
import shareHelp from '../../../assets/share-help.svg';

export default function HomePage() {
    return (
        <main>
            <section id="section-home-page">
                <div className="home-page-introduction container">
                    <div className="home-page-introduction-invite">
                        <h2>A <span>fome</span> não espera, e a <span>solidariedade</span> também não.</h2>
                        <a href="">Doe agora <img src={arrowIcon} alt="" /></a>
                    </div>

                    <div className="home-page-introduction-invite-img">
                        <img src={imgCriancaCarente} alt="" />
                    </div>

                </div>
            </section>
            <section id="section-home-page-how-help">
                <div className="home-page-how-help-content container">
                    <h2>Como posso ajudar?</h2>
                    <div className="home-page-how-help-cards-list">
                        <div className="card-how-help-item">
                            <div className="card-how-help-item-img">
                                <img src={donationFood} alt="" />
                            </div>
                            <div className="card-how-help-item-description">
                                <h3>Doando</h3>
                                <p>Segundo a ONU, em 2024, mais de 700 milhões de pessoas passam fome no Mundo, você pode ajudar a fazer com que esse número abaixe ajudando com aquilo que estiver em seu alcance, doe já!  </p>
                            </div>
                            <div className="card-how-help-tem-read-more-invite">
                                <a href="">Saiba Mais</a>
                            </div>
                        </div>

                        <div className="card-how-help-item">
                            <div className="card-how-help-item-img">
                                <img src={handsHelp} alt="" />
                            </div>
                            <div className="card-how-help-item-description">
                                <h3>Entregando</h3>
                                <p>Você pode colaborar não apenas doando, mas também se voluntariando a distribuir os alimentos. Confiamos em você para entregar as pessoas que realmente necessitam</p>
                            </div>
                            <div className="card-how-help-tem-read-more-invite">
                                <a href="">Saiba Mais</a>
                            </div>
                        </div>

                        <div className="card-how-help-item">
                            <div className="card-how-help-item-img">
                                <img src={shareHelp} alt="" />
                            </div>
                            <div className="card-how-help-item-description">
                                <h3>Compartilhando</h3>
                                <p>Você tem o poder de compartilhar com amigos, familiares ou conhecidos, e assim ajudar a levar nosso projeto mais longe, alcançando assim mais pessoas, agora é com você ;)</p>
                            </div>
                            <div className="card-how-help-tem-read-more-invite">
                                <a href="">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}