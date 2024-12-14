import './styles.css';
import { DonationDTO } from '../../models/donation';

type Props = {
    donation: DonationDTO
}

export default function CardDonationDetails({ donation }: Props) {

    return (
        <div className="card-donation-details">
            <h3>Doação</h3>
            <p>Nome: {donation.user.name}</p>
            <p>Endereço: {donation.city}, {donation.state}</p>
            <p>Número: {donation.user.phone}</p>
            <p>Description: {donation.description}</p>
        </div>
    );
}