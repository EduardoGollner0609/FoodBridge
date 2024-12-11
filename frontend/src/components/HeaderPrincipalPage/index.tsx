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
                    <a href="">
                        <img src={userIcon} alt="" />
                        Ver Perfil
                    </a>
                </div>

            </nav>
        </header>
    );
}