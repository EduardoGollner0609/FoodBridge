import './styles.css';
import whatsappIcon from '../../assets/whatsapp-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <h2>FoodBridge</h2>
            <div className="footer-content container">
                <div className="footer-contacts">
                    <h3>Contato</h3>
                    <ul className="footer-contacts-list">
                        <li className="footer-contact-option-item">
                            <a href="https://wa.me/27992657127?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20do%20FoodBridge.">
                                <img src={whatsappIcon} alt="" />
                                <p>(27) 99265-7127</p>
                            </a>
                        </li>
                        <li className="footer-contact-option-item">
                            <a href="https://www.instagram.com/dudugollner05/">
                                <img src={instagramIcon} alt="" />
                                <p>@dudugollner05</p>
                            </a>
                        </li>
                        <li className="footer-contact-option-item">
                            <a href="https://www.linkedin.com/in/eduardo-gollner/">
                                <img src={linkedinIcon} alt="" />
                                <p>Eduardo Gollner</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-description">
                    <p>
                        FoodBridge é um projeto que tem como principal missão
                        acabar com a fome do mundo, mas para isso acontecer,
                        precisamos de você! Nesse projeto não estou com investidores ou algo do tipo,
                        porém você pode nos ajudar a crescer ajudando tanto enviando algum valor no pix (27) 99265-7127,
                        quanto compartilhando para outras pessoas.
                        Nos ajude nessa missão e vamos juntos.
                    </p>

                </div>
                <div className="footer-sections">
                    <h3>Seções</h3>
                    <ul>
                        <li>
                            <NavLink to="/home" className={({ isActive }) =>
                                isActive ? "footer-option-section-active" : ""
                            }>
                                <p>
                                    Inicio
                                </p>

                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) =>
                                isActive ? "footer-option-section-active" : ""
                            }>
                                <p>
                                    Sobre
                                </p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) =>
                                isActive ? "footer-option-section-active" : ""
                            }>
                                <p>
                                    Fale Conosco
                                </p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className={({ isActive }) =>
                                isActive ? "footer-option-section-active" : ""
                            } >
                                <p>
                                    Entrar
                                </p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    );
}