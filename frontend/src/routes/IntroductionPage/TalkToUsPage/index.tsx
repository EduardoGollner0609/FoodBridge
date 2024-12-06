import './styles.css'
import instagramIcon from '../../../assets/instagram-icon.svg';
import whatssapIcon from '../../../assets/whatsapp-icon.svg';

export default function TalkToUsPage() {
    return (
        <main>
            <section id="section-talk-to-us-page">
                <div className="talk-to-us-content container">
                    <h2>Fale <span>Conosco</span></h2>
                    <div className="card-talk-to-us-contact">
                        <div className="card-talk-to-us-contact-item">
                            <h3>Telefone</h3>
                            <p>Cel: (027) 99265-7127</p>
                        </div>
                        <div className="card-talk-to-us-contact-item">
                            <h3>Redes Sociais</h3>
                            <div className="card-talk-to-us-cotact-icons">
                                <a href="">
                                    <img src={instagramIcon} alt="" />
                                </a>
                                <a href="">
                                    <img src={whatssapIcon} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card-talk-to-us-send-question">
                        <h3>Tire sua duvida</h3>
                        <form >
                            <div className="card-talk-to-us-send-question-inputs">
                                <div className="card-talk-to-us-send-question-credentials">
                                    <input type="text" placeholder="Nome" />
                                    <input type="text" placeholder="Número de Telefone" />
                                    <input type="text" placeholder="Assunto" />
                                </div>
                                <div className="card-talk-to-us-send-question-message">
                                    <textarea placeholder="Deixe sua mensagem" />
                                </div>
                            </div>
                            <div className="card-talk-to-us-send-question-button-submit">
                                <button>Enviar</button>
                            </div>

                        </form>
                    </div>
                </div>

            </section>
        </main>
    );
}