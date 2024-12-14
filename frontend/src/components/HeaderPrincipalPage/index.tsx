import './styles.css';
import userIcon from '../../assets/user-icon.svg';
import { Link } from 'react-router-dom';

export default function HeaderPrincipalPage() {
    return (
        <header>
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
                                <img src={userIcon} alt="" />
                                Ver Perfil
                            </Link>
                        </li>
                    </ul>

                </div>

            </nav>
        </header>
    );
}