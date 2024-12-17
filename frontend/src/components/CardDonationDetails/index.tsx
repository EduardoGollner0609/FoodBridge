import './styles.css';
import { DonationDTO } from '../../models/donation';
import { Link } from 'react-router-dom';

type Props = {
    donation: DonationDTO,
    collectFunction: () => void
}

export default function CardDonationDetails({ donation, collectFunction }: Props) {

    return (
        <div className="card-donation-details">
            <div className="card-donation-details-top">
                <Link to="/community">Voltar</Link>
            </div>
            <h3>Doação</h3>
            <h4>Doador:</h4>
            <p>Nome: {donation.user.name}</p>
            <p>Endereço: {donation.city}, {donation.state}</p>
            <p>Número: {donation.user.phone}</p>
            <h4>Descrição: </h4>
            <p>{donation.description}</p>
            <div className="card-donation-details-links-bottom">
                <div className="card-donation-details-colect">
                    <Link to="/community" onClick={collectFunction}>Coletar</Link>
                </div>
                <div className="card-donation-details-contact">
                    <a href={`https://api.whatsapp.com/send?phone=${donation.user.phone}&text=Olá,%20tudo%20bem?%20vim%20do%20FoodBridge%20e%20gostaria%20de%20perguntar%20sobre%20uma%20doação%20feita%20por%20você.`}>Conversar</a>
                </div>
            </div>


        </div>
    );
}