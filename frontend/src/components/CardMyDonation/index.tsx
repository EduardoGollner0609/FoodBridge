import './styles.css';
import deleteIcon from '../../assets/delete-icon.svg';
import updateIcon from '../../assets/update-icon.svg';
import { DonationMinDTO } from '../../models/donation';

type Props = {
    donation: DonationMinDTO
}

export default function CardMyDonation({ donation }: Props) {


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
                <div className="card-my-donation-icon-item">
                    <img src={updateIcon} alt="" />
                    <p>Editar</p>
                </div>
                <div className="card-my-donation-icon-item">
                    <img src={deleteIcon} alt="" />
                    <p>Deletar</p>
                </div>

            </div>
        </div>
    );
}