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
                                <input type="text" />
                            </div>
                            <div className="card-donation-register-item">
                                <label>Nome</label>
                                <input type="text" />
                            </div>
                            <div className="card-donation-register-item">
                                <label>Nome</label>
                                <textarea></textarea>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}