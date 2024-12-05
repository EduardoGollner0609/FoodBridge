import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
    return (
        <header>
            <nav className="container">
                <div className="fb-header-title">
                    <h1>FoodBridge</h1>
                </div>
                <div className="fb-header-navegation-options">
                  <ul>
                    <li></li>
                  </ul>
                </div>
            </nav>
        </header>
    );
}