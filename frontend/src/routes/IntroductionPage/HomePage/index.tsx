import './styles.css';
import imgCriancaCarente from '../../../assets/crianca-carente.jpg';
import arrowIconPurple from '../../../assets/arrow-purple.svg';
import arrowIconWhite from '../../../assets/arrow-white.svg';
import donationFood from '../../../assets/donation-food.svg';
import handsHelp from '../../../assets/hands-help.svg';
import shareHelp from '../../../assets/share-help.svg';
import moreDetails1 from '../../../assets/more-details-img1.png';
import moreDetails2 from '../../../assets/more-details-img2.jpeg';
import moreDetails3 from '../../../assets/more-details-img3.jpg';
import CardHelp from '../../../components/CardHelp';

export default function HomePage() {

    const descriptionDonation: string = "Segundo a ONU, em 2024, mais de 700 milhões de pessoas passam fome no Mundo, você pode ajudar a fazer com que esse número abaixe ajudando com aquilo que estiver em seu alcance, doe já!";
    const descriptionDelivery: string = "Você pode colaborar não apenas doando, mas também se voluntariando a distribuir os alimentos. Confiamos em você para entregar as pessoas que realmente necessitam";
    const descriptionShare: string = "Você tem o poder de compartilhar com amigos, familiares ou conhecidos, e assim ajudar a levar nosso projeto mais longe, alcançando assim mais pessoas, agora é com você ;)";

    return (
        <main>
            <section id="section-home-page">
                <div className="home-page-introduction container">
                    <div className="home-page-introduction-invite">
                        <h2>A <span>fome</span> não espera, e a <span>solidariedade</span> também não.</h2>
                        <a href="">Doe agora <img src={arrowIconPurple} alt="" /></a>
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
                        <CardHelp imgUrl={donationFood} title="Doando" description={descriptionDonation} />
                        <CardHelp imgUrl={handsHelp} title="Entregando" description={descriptionDelivery} />
                        <CardHelp imgUrl={shareHelp} title="Compartilhando" description={descriptionShare} />
                    </div>
                </div>
            </section>
            <section id="section-home-page-more-details">
                <div className="home-page-more-details-content container">
                    <div className="home-page-more-details-imgs">
                        <div className="home-page-more-details-img-top">
                            <img src={moreDetails1} alt="" />
                        </div>
                        <div className="home-page-more-details-imgs-bottom">
                            <img src={moreDetails2} alt="" />
                            <img src={moreDetails3} alt="" />
                        </div>

                    </div>

                    <div className="home-page-more-details-descriptions">
                        <h2>Cada <span>Doação</span> é um passo mais perto de um mundo sem <span>Fome</span>.</h2>
                        <div className="home-page-more-details-descriptions-text">

                            <p>A fome é um problema global que afeta milhões de pessoas ao redor do mundo, de acordo com a ONU, o mundo tinha cerca de 733 milhões de pessoas passando fome em 2023, ou 1 em cada 11 pessoas.</p>
                            <p>É fato que não podemos zerar esses números sozinhos, precisamos de corações solidarios, que se importam com a dor do outro e acima de tudo um entendimento de que temos que nos unir em prol disso, são pessoas, são crianças, são vidas... </p>
                            <p>A FoodBridge é um site aonde conectamos pessoas que estão dispostas a ajudar em doações a pessoas que estão disposta a ajudar distribuindo os alimentos.</p>
                        </div>
                        <div className="home-page-more-details-description-phrases">
                            <h3>Unidos por pessoas</h3>
                            <div className="home-page-more-details-column">
                            </div>
                            <h3>Unidos contra a fome</h3>
                        </div>
                        <a href="">Doe agora <img src={arrowIconWhite} alt="" /></a>
                    </div>
                </div>
            </section>
        </main>
    );
}