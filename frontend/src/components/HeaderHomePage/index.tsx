import { NavLink } from 'react-router-dom';
import './styles.css';
import { Link } from 'react-router-dom';

export default function HeaderHomePage() {
    return (
        <header>
            <nav className="container">
                <div className="fb-header-introduction-page-title">
                    <h1>FoodBridge</h1>
                </div>
                <div className="fb-header-introduction-page-navegation-options">
                    <ul>
                        <NavLink to="/home">
                            <li>Inicio</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li>Sobre</li>
                        </NavLink>
                        <NavLink to="/contact">
                            <li>Fale Conosco</li>
                        </NavLink>
                    </ul>
                </div>
                <div className="fb-header-introduction-page-login">
                    <Link to="/login">
                        Entrar
                    </Link>
                </div>
            </nav>
        </header>
    );
}