import { Link } from 'react-router-dom';
import './styles.css'
import CardMyDonation from '../../../components/CardMyDonation';

export default function DonationsPage() {
    return (
        <main>
            <section id="section-donations">
                <div className="donations-content container">
                    <h2>Suas <span>Doações</span></h2>
                    <div className="my-donations-space">
                        <div className="donations-plus-btn">
                            <Link to="/community/donation-register">
                                Fazer Doação
                            </Link>
                        </div>
                        <div className="card-my-donations-list">
                            <CardMyDonation />
                            <CardMyDonation />
                            <CardMyDonation />
                            <CardMyDonation />
                            <CardMyDonation />
                            <CardMyDonation />
                            <CardMyDonation />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}