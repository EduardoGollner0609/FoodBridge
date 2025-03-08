import { NavLink } from 'react-router-dom';
import './styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function HeaderHomePage() {

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    return (
        <header className="header-home-page">
            <nav className="container">
                <div className="header-introduction-page-title">
                    <Link to="/">
                        <h1>FoodBridge</h1>
                    </Link>

                </div>
                <div className="header-introduction-page-navegation-options">
                    <ul>
                        <NavLink to="/home" className={({ isActive }) =>
                            isActive ? "option-navegation-header-active" : ""
                        }>
                            <li>Inicio</li>
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) =>
                            isActive ? "option-navegation-header-active" : ""
                        }>
                            <li>Sobre</li>
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "option-navegation-header-active" : ""
                        }>
                            <li>Fale Conosco</li>
                        </NavLink>
                    </ul>
                </div>
                <div className="header-introduction-page-login">
                    <Link to="/login">
                        Entrar
                    </Link>
                </div>
                <div className="header-introduction-page-mobile-menu" onClick={() => setMobileMenuVisible(true)}>
                    ☰
                </div>
                {
                    mobileMenuVisible &&
                    <>
                        <div className="options-navegation-mobile">
                            <div className="close-mobile-menu-icon" onClick={() => setMobileMenuVisible(false)}>
                                X
                            </div>
                            <ul>
                                <li>
                                    <NavLink to="/home" className={({ isActive }) =>
                                        isActive ? "option-navegation-mobile-menu-active" : ""
                                    } onClick={() => setMobileMenuVisible(false)}>
                                        <p>
                                            Inicio
                                        </p>

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({ isActive }) =>
                                        isActive ? "option-navegation-mobile-menu-active" : ""
                                    } onClick={() => setMobileMenuVisible(false)}>
                                        <p>
                                            Sobre
                                        </p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className={({ isActive }) =>
                                        isActive ? "option-navegation-mobile-menu-active" : ""
                                    } onClick={() => setMobileMenuVisible(false)}>
                                        <p>
                                            Fale Conosco
                                        </p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" className={({ isActive }) =>
                                        isActive ? "option-navegation-mobile-menu-active" : ""
                                    } onClick={() => setMobileMenuVisible(false)} >
                                        <p>
                                            Entrar
                                        </p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="overlay-menu" onClick={() => setMobileMenuVisible(false)}>
                        </div>
                    </>
                }
            </nav>
        </header >
    );
}