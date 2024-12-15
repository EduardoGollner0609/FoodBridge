import { Link } from 'react-router-dom';
import './styles.css';
import { DonationMinDTO } from '../../models/donation';

type Props = {
    donation: DonationMinDTO
}

export default function CardDonation({ donation }: Props) {

    function formatedDescription(description: string) {
        if (description.length > 30) {
            return description.slice(0, 30) + '...';
        }
        return description
    }
    
    return (
        <Link to={`/community/donation/${donation.id}`}>
            <div className="card-donation">
                <div className="card-donation-data">
                    <h3>{donation.userName}</h3>
                    <p>{formatedDescription(donation.description)}</p>
                </div>
                <p>{donation.city}, {donation.state}</p>
            </div>
        </Link>
    );
}