import { Link } from 'react-router-dom';
import './styles.css';
import CardMyDonation from '../../../components/CardMyDonation';

export default function UserDetailsPage() {
    return (
        <main>
            <section id="user-details-page">
                <div className="user-details-content container">

                    <div className="card-user-details">
                        <Link to="/community">
                            Voltar
                        </Link>
                        <h3>Perfil</h3>
                        <div className="card-user-details-header">
                            <p>Nome: Eduardo Sousa Gollner</p>
                            <p>Email: dudugollner@gmail.com</p>
                            <p>Data de nascimento: 06/09/2005 - 19 anos</p>
                            <p>Número: 27 992657127</p>
                            <p>Endereço: Vitória, Espirito Santo</p>
                        </div>
                        <div className="card-user-details-colaboration">
                            <div className="card-user-details-donations">
                                <h4>Doações: </h4>  <p>3</p>

                            </div>
                            <div className="card-user-details-delivery">
                                <h4>Entregas: </h4> <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-donations">
                <div className="donations-content container">
                    <h2>Suas <span>Doações</span></h2>
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
            </section>
        </main>
    );
}