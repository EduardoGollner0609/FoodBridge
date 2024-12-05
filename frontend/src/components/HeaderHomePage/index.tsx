import './styles.css';

export default function HeaderHomePage() {
    return (
        <header>
            <nav className="container">
                <div className="fb-header-introduction-page-title">
                    <h1>FoodBridge</h1>
                </div>
                <div className="fb-header-introduction-page-navegation-options">
                    <ul>
                        <li>Inicio</li>
                        <li>Sobre</li>
                        <li>Fale Conosco</li>
                    </ul>
                </div>
                <div className="fb-header-introduction-page-login">
                    <a href="">Entrar</a>
                </div>
            </nav>
        </header>
    );
}