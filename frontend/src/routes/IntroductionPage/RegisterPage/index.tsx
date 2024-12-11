import './styles.css';

export default function RegisterPage() {
    return (
        <main>
            <section id="section-register-page">
                <div className="register-page-content container">
                    <div className="card-register">
                        <h2>Cadastro</h2>
                        <form >
                            <div className="form-item-input">
                                <label>Nome</label>
                                <input type="text" placeholder='Digite seu nome' />
                            </div>
                            <div className="form-item-input">
                                <label>Data de Nascimento</label>
                                <input type="date" />
                            </div>
                            <div className="form-item-input">
                                <label>Número</label>
                                <input type="text" placeholder='Digite seu número' />
                            </div>
                            <div className="form-item-input">
                                <label>Email</label>
                                <input type="text" placeholder='Digite seu email' />
                            </div>
                            <div className="form-item-input">
                                <label>Senha</label>
                                <input type="password" placeholder='Digite sua senha' />
                                <p>* Minimo de 6 caracteres.</p>
                            </div>
                            <button>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </section>
        </main >
    );
}