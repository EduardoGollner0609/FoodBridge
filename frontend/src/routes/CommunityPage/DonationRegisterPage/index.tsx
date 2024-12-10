import './styles.css';

export default function DonationRegisterPage() {
    return (
        <main>
            <section id="section-donation-register">
                <div className="donation-register-content container">
                    <div className="card-donation-register">
                        <h2>Doação</h2>
                        <form >
                            <div className="card-donation-register-item">
                                <label>Nome</label>
                                <input type="text" placeholder='Digite seu nome'/>
                            </div>
                            <div className="card-donation-register-item">
                                <label>Endereço</label>
                                <input type="text" placeholder='Digite seu endereço' />
                            </div>
                            <div className="card-donation-register-item">
                                <label>Sobre a doação</label>
                                <textarea placeholder='Nos conte um pouco mais sobre a doação'></textarea>
                            </div>
                            <div className="card-donation-register-btn-submit">
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}