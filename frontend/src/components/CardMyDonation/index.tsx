import './styles.css';
import deleteIcon from '../../assets/delete-icon.svg';
import { DonationMinDTO } from '../../models/donation';
import * as donationService from '../../services/donation-service';

type Props = {
    donation: DonationMinDTO
}

export default function CardMyDonation({ donation }: Props) {

    function handleDeleteClick() {
        donationService.deleteById(donation.id).then(() => {

        });
    }

    return (
        <div className="card-my-donation">
            <div className="card-my-donation-data">
                <h3>{donation.userName}</h3>
                <p>{donation.description}</p>
            </div>
            <div className="card-my-donation-icon-status">
                AGUARDANDO
            </div>
            <div className="card-my-donation-icons">
                <div className="card-my-donation-icon-item" onClick={handleDeleteClick}>
                    <img src={deleteIcon} alt="" />
                    <p>Deletar</p>
                </div>

            </div>
        </div>
    );
}