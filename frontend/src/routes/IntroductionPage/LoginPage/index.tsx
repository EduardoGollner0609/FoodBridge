import { Link } from 'react-router-dom';
import './styles.css';

export default function LoginPage() {
    return (
        <main>
            <section id="section-login-page">
                <div className="login-page-content container">
                    <div className="card-login">
                        <h2>Login</h2>
                        <form>
                            <div className="form-item-input">
                                <label>Email</label>
                                <input type="text" /></div>
                            <div className="form-item-input">
                                <label>Senha</label>
                                <input type="password" />
                            </div>
                            <button>Login</button>
                        </form>
                        <div className="card-login-invite-register">
                            <Link to="/register">
                                Clique aqui para se cadastrar
                            </Link>
                        </div>


                    </div>
                </div>
            </section>
        </main>
    );
}