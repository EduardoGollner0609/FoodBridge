import './styles.css'
import homeIcon from '../../assets/home-icon.svg';
import userIcon from '../../assets/user-icon-navegation.svg';
import donationFoodIcon from '../../assets/donation-food-icon.svg';
import exitIcon from '../../assets/exit-icon.svg';
import { NavLink } from 'react-router-dom';

export default function SideBarNavegation() {
    return (
        <aside>
            <div className="side-bar-navegation-logo-space">
                <h1>FoodBridge</h1>
            </div>

            <ul className="side-bar-navegation-options">
                <li className="side-bar-option-item">
                    <NavLink to="/community/home" className={({ isActive }) =>
                        isActive ? "navlink-active-community" : ""
                    }>
                        <span className="side-bar-option-item-icon">
                            <img src={homeIcon} alt="" />
                        </span>
                        <span className="side-bar-option-item-text">
                           Inicio
                        </span>
                    </NavLink>

                </li>
                <li className="side-bar-option-item">
                    <NavLink to="/community/user-details" className={({ isActive }) =>
                        isActive ? "navlink-active-community" : ""
                    }>
                        <span className="side-bar-option-item-icon">
                            <img src={userIcon} alt="" />
                        </span>
                        <span className="side-bar-option-item-text">
                            Ver Perfil
                        </span>

                    </NavLink>

                </li>
                <li className="side-bar-option-item">
                    <NavLink to="/community/donations" className={({ isActive }) =>
                        isActive ? "navlink-active-community" : ""
                    }>
                        <span className="side-bar-option-item-icon">
                            <img src={donationFoodIcon} alt="" />
                        </span>
                        <span className="side-bar-option-item-text">
                            Doar
                        </span>
                    </NavLink>

                </li>
                <li className="side-bar-option-item">
                    <a href="">
                        <span className="side-bar-option-item-icon">
                            <img src={exitIcon} alt="" />
                        </span>
                        <span className="side-bar-option-item-text">
                            Sair
                        </span>
                    </a>

                </li>
            </ul>
        </aside>
    );
}