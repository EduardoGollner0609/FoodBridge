import './styles.css';
import { Link } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import * as userService from '../../services/user-service';

export default function HeaderPrincipalPage() {

    function logOut() {
        authService.logout();
        userService.logout();
    }

    return (
        <header className="header-principal-page">
            <nav className="container">
                <div className="fb-header-community-page-title">
                    <Link to="/community">
                        <h1>FoodBridge</h1>
                    </Link>
                </div>
                <div className="fb-user-informations-community-page">
                    <ul>
                        <li>
                            <Link to="/community/user-details">
                                Ver Perfil
                            </Link>
                        </li>
                        <p>Ou</p>
                        <li>
                            <Link to="/home" onClick={logOut}>
                                Sair
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}