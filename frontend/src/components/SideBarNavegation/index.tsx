import './styles.css'
import homeIcon from '../../assets/home-icon.svg';
import userIcon from '../../assets/user-icon-navegation.svg';
import donationFoodIcon from '../../assets/donation-food-icon.svg';
import exitIcon from '../../assets/exit-icon.svg';

export default function SideBarNavegation() {
    return (
        <aside>
            <div className="side-bar-navegation-logo-space">
                <h1>FoodBridge</h1>
            </div>

            <ul className="side-bar-navegation-options">
                <li className="side-bar-option-item">
                    <a href="">
                        <span className="side-bar-option-item-icon">
                            <img src={homeIcon} alt="" />
                        </span>
                        <span className="side-bar-option-item-text">
                            Home
                        </span>
                    </a>

                </li>
                <li className="side-bar-option-item">
                    <a href="">
                        <span className="side-bar-option-item-icon">
                            <img src={userIcon} alt="" />
                        </span>
                        <span className="side-bar-option-item-text">
                            Ver Perfil
                        </span>
                    </a>
                </li>
                <li className="side-bar-option-item">
                    <a href="">
                        <span className="side-bar-option-item-icon">
                            <img src={donationFoodIcon} alt="" />
                        </span>
                        <span className="side-bar-option-item-text">
                            Doar
                        </span>
                    </a>

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