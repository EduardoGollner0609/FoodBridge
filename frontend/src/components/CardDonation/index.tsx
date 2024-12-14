import { Link } from 'react-router-dom';
import './styles.css';
import { DonationMinDTO } from '../../models/donation';

type Props = {
    donation: DonationMinDTO
}

export default function CardDonation({ donation }: Props) {

    return (
        <Link to={`/community/donation/${donation.id}`}>
            <div className="card-donation">
                <div className="card-donation-data">
                    <h3>{donation.userName}</h3>
                    <p>{donation.description}</p>
                </div>
                <p>{donation.city}, {donation.state}</p>
            </div>
        </Link>
    );
}